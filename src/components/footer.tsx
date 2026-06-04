import { Link } from "react-router"

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-zinc-900 px-4 py-1 border-t border-zinc-300 shadow-md shadow-zinc-400/30 h-(--footer-height)">
      <p className="text-center text-xs text-zinc-300 tracking-wide">
        Made with ❤️ by <Link to="https://kjpatel.me" target="_blank" className="hover:text-white hover:underline underline-offset-2 decoration-zinc-400">
          Kirtan Patel
        </Link>
      </p>
    </footer>
  )
}

export default Footer