export default function SponsorshipSection() {
    return (
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
              Sponsorship
            </h2>
            <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
              WEC Conference 2026 offers tailored sponsorship opportunities for
              organisations that share a commitment to equitable, secure, and
              sustainable energy transitions.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Sponsors gain visibility among senior decision-makers, engage in
              curated sessions and side events, and help shape a results-focused
              agenda at the intersection of policy, finance, technology, and
              community impact.
            </p>
          </div>
  
          <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm text-sm sm:text-base text-slate-700 space-y-3">
            <p className="font-semibold text-slate-900">
              Sponsorship packages can include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Brand visibility across conference materials and spaces</li>
              <li>Speaking roles in key sessions, where appropriate</li>
              <li>Curated roundtables with government and industry leaders</li>
              <li>Exhibition and demonstration spaces</li>
              <li>Side events and networking receptions</li>
            </ul>
            <p className="pt-2">
              For more information on sponsorship tiers and benefits, please
              contact the conference team via the{" "}
              <a href="#contact" className="text-[#0071ce] underline">
                Contact form
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
  