import { useState } from "react";
import { programDays } from "../data/program";

export default function ProgramTabs() {
  const [activeId, setActiveId] = useState("day1");
  const activeDay = programDays.find((d) => d.id === activeId);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-tight">
            CONFERENCE PROGRAMME
          </h2>
          <p className="text-sm sm:text-base text-slate-100 max-w-8xl leading-relaxed">
            The programme is built for impact. Participants will move beyond discussion to hands-on collaboration, tackling real-world challenges and co-designing practical solutions. Through interactive working groups, immersive sessions, and dynamic exchanges, delegates will shape actionable agendas, unlock new opportunities, and build partnerships that can accelerate the global energy transition. Every session is designed to inspire fresh thinking, foster cross-sector collaboration, and deliver tangible outcomes that matter.
          </p>
        </div>

        {/* Mobile dropdown */}
        <div className="md:hidden">
          <label className="block text-xs font-semibold text-slate-100 mb-1">
            Select day
          </label>
          <select
            value={activeId}
            onChange={(e) => setActiveId(e.target.value)}
            className="w-full rounded border border-slate-400 bg-[#003845] text-white px-3 py-2 text-sm"
          >
            {programDays.map((day) => (
              <option key={day.id} value={day.id}>
                {day.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop tabs */}
      <div className="hidden md:flex flex-wrap gap-2 mb-6">
        {programDays.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveId(day.id)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] rounded-full border ${
              activeId === day.id
                ? "bg-[#0071ce] text-white border-[#0071ce]"
                : "bg-transparent text-slate-100 border-slate-500 hover:bg-white/10"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* Active day card */}
      {activeDay && (
        <div className="bg-[#004354] border border-[#0c5b6e] rounded-md p-6 text-sm sm:text-base text-slate-50">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {activeDay.label}
          </h3>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300 mb-4">
            {activeDay.date}
          </p>
          <ul className="space-y-2 leading-relaxed">
            {activeDay.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f7a24b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
