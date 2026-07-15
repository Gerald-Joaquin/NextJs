import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="flex min-h-screen w-full max-w-[280px] flex-none flex-col justify-between bg-slate-900 px-6 py-8 shadow-xl ring-1 ring-slate-800 md:w-72">
      <div>
        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-800/80 p-5 shadow-sm ring-1 ring-slate-700">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-xl font-semibold text-white shadow-md">

          </div>
        </div>

        <div className="mb-8 rounded-3xl bg-slate-950/90 p-4 shadow-sm ring-1 ring-slate-800">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">Navigation</p>
          <nav className="space-y-3">
            <Link href="/" className="flex items-center justify-between rounded-2xl bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-600 hover:text-white">
              Home
            </Link>
            <Link href="/dashboard" className="flex items-center justify-between rounded-2xl bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-600 hover:text-white">
              Dashboard
            </Link>
            <Link href="/profile" className="flex items-center justify-between rounded-2xl bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-600 hover:text-white">
              Profile
            </Link>
            <Link href="/settings" className="flex items-center justify-between rounded-2xl bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-600 hover:text-white">
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}
