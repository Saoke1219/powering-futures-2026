export default function RegistrationSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-start">

        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
            WEC Conference 2026 Registration
          </h2>

          <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
          Powering Futures: Powering Possibility 2026 offers an engaging, solutions-driven 
            environment where participants move beyond dialogue into coordinated action.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Through high-level plenaries, interactive sessions, and collaborative 
            working groups, delegates from across regions and sectors will help shape 
            an actionable agenda that reflects diverse perspectives and real-world priorities.
          </p>
        </div>

        {/* Right: Image + Button */}
        <div className="flex flex-col items-center gap-6">

          {/* EVENT IMAGE — stored in /public */}
          <img
            src={`${import.meta.env.BASE_URL}conference.jpg`}
            alt="Conference registration"
            className="w-full h-64 object-cover rounded-md shadow-md border border-slate-200"
          />

          {/* BUTTON */}
          <a
            href="https://www.eventbrite.com/e/powering-futures-powering-possibility-tickets-1975265191360?aff=oddtdtcreator" // Replace with actual ticket link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto rounded-md bg-[#0071ce] text-white text-sm font-semibold px-6 py-3 hover:bg-[#005aa4] transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
