import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'toggle-id-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/toggle-id' && req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const { id, used } = JSON.parse(body);
                if (typeof id !== 'string' || typeof used !== 'boolean') {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Invalid request body' }));
                  return;
                }

                const filePath = path.resolve(__dirname, 'src/lib/ids.ts');
                if (!fs.existsSync(filePath)) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'ids.ts file not found' }));
                  return;
                }

                let content = fs.readFileSync(filePath, 'utf-8');
                const regex = new RegExp(`(\\{\\s*id:\\s*['"]${id}['"]\\s*,\\s*used:\\s*)(true|false)(\\s*\\})`);
                
                if (!regex.test(content)) {
                  res.writeHead(404, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: `ID ${id} not found in ids.ts` }));
                  return;
                }

                content = content.replace(regex, `$1${used}$3`);
                fs.writeFileSync(filePath, content, 'utf-8');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              } catch (err: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
})
