import { useEffect, useState } from "react";

const targetDate = new Date("2026-02-10T09:00:00+03:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      finished: false,
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.finished) {
    return (
      <p className="text-sm font-semibold text-[#f7a24b]">
        The conference is live in Nairobi.
      </p>
    );
  }

  return (
    <div className="inline-flex gap-3 bg-black/40 rounded-full px-4 py-2 text-[11px] sm:text-xs">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="flex flex-col items-center px-2">
          <span className="text-base sm:text-lg font-semibold">
            {timeLeft[unit]}
          </span>
          <span className="uppercase tracking-[0.16em] text-[10px] text-gray-200">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
