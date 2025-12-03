const navItems = [
    { href: "#home", label: "Conference" },
    { href: "#overview", label: "Overview" },
    { href: "#programme", label: "Programme" },
    { href: "#travel", label: "Travel" },
  ];
  
  export default function Navbar() {
    return (
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-6">
          {/* Logo + title */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}wec_logo.png`}
              alt="World Energy Council"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                World Energy Council, Kenya.
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Conference 2026 – Nairobi
              </p>
            </div>
          </a>
  
          {/* High-level nav only */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
  
            <a
              href="#registration"
              className="ml-4 inline-flex items-center rounded-full border border-[#0071ce] px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase text-[#0071ce] hover:bg-[#0071ce] hover:text-white transition"
            >
              Register
            </a>
          </nav>
        </div>
      </header>
    );
  }
  