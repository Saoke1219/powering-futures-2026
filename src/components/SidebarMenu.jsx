const items = [
    { href: "#registration", label: "Registration" },
    { href: "#programme", label: "Programme" },
    { href: "#speakers", label: "Speakers" },
    { href: "#sponsorship", label: "Sponsorship" },
    { href: "#travel", label: "Travel & Accommodation" },
    { href: "#visa", label: "Visa Information" },
    { href: "#contact", label: "Contact Us" },
  ];
  
  export default function SidebarMenu() {
    return (
      <div className="bg-[#004354] border border-[#0c5b6e] rounded-md overflow-hidden">
        <div className="px-5 py-4 border-b border-[#0c5b6e]">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#f7a24b]">
            WEC Conference 2026
          </p>
        </div>
  
        <nav className="divide-y divide-[#0c5b6e]">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#005569] transition"
            >
              <span>{item.label}</span>
              <span className="text-[#f7a24b] text-lg leading-none">›</span>
            </a>
          ))}
        </nav>
      </div>
    );
  }
  