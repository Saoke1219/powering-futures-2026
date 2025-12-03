export default function Footer() {
    return (
      <footer className="bg-[#003845] text-slate-100">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} World Energy Council Conference 2026 –
            Nairobi, Kenya.
          </p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white">
              Back to top
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    );
  }
  