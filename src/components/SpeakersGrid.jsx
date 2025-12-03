import { speakers } from "../data/speakers";

export default function SpeakersGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-tight">
            Speakers
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed">
            The programme will feature leaders from across government, industry,
            finance, technology, and civil society, reflecting the diversity and
            depth of the global energy community.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {speakers.map((speaker) => (
          <article
            key={speaker.name}
            className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="h-44 bg-slate-100">
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900">
                {speaker.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1">{speaker.role}</p>
              <p className="text-xs text-slate-500 mt-1">{speaker.company}</p>
              <p className="text-[11px] text-slate-500 mt-1">
                {speaker.country}
              </p>

              {speaker.bioLink && speaker.bioLink !== "#" && (
                <a
                  href={speaker.bioLink}
                  className="mt-3 text-xs font-semibold text-[#0071ce] hover:underline"
                >
                  View bio
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
