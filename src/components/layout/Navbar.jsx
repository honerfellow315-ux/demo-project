export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-slate-900">
          Business<span className="text-blue-600">Pro</span>
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </header>
  );
}