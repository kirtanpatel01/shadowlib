import { useEffect, useMemo, useState } from "react";
import { ids as seedIds, type IdItem } from "../lib/ids";
import { CopyCheck, Copy, Check } from "lucide-react";

const PAGE_SIZE = 10;

function IdsPage() {
  const [items, setItems] = useState<IdItem[]>(seedIds);
  const [page, setPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, items.length);

  const copyId = async (id: string) => {
    await navigator.clipboard.writeText(id);
    setCopiedId(id);
    window.setTimeout(() => {
      setCopiedId((current) => (current === id ? null : current));
    }, 1200);
  };

  const toggleUsed = async (id: string) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const newUsed = !item.used;

    // Optimistically update local React state
    setItems((current) =>
      current.map((i) => (i.id === id ? { ...i, used: newUsed } : i)),
    );

    try {
      const response = await fetch("/api/toggle-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, used: newUsed }),
      });

      if (!response.ok) {
        throw new Error("Failed to update ID on server");
      }
    } catch (error) {
      console.error("Error toggling used state:", error);
      // Revert optimistic update on failure
      setItems((current) =>
        current.map((i) => (i.id === id ? { ...i, used: !newUsed } : i)),
      );
      alert("Failed to save changes to the local file!");
    }
  };

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <section className="mx-auto w-full max-w-lg px-4 py-6 sm:px-6 lg:px-8">
      <div className="text-sm text-zinc-500">
        Page {page} of {totalPages}
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr className="text-center">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Id</th>
                <th className="px-4 py-3 font-medium">Used</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-center">
              {pageItems.map((item, index) => {
                const globalIndex = startIndex + index + 1;

                return (
                  <tr key={item.id} className="hover:bg-zinc-50/80">
                    <td className="px-4 py-3 text-zinc-500">{globalIndex}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <code className="rounded-lg bg-zinc-100 px-2 py-1 font-mono text-sm text-zinc-900">
                          {item.id}
                        </code>
                        <button
                          type="button"
                          onClick={() => void copyId(item.id)}
                          className="cursor-pointer"
                        >
                          {copiedId === item.id ? (
                            <Check size={16} />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleUsed(item.id)}
                        className={[
                          "inline-flex min-w-16 justify-center rounded-full px-3 py-1 text-xs font-semibold cursor-pointer",
                          item.used
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-zinc-100 text-zinc-600",
                        ].join(" ")}
                      >
                        {item.used ? "true" : "false"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing {startIndex + 1}-{endIndex} of {items.length}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(1)}
            disabled={page === 1}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            First
          </button>
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => goToPage(totalPages)}
            disabled={page === totalPages}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Last
          </button>
        </div>
      </div>
    </section>
  );
}

export default IdsPage;
