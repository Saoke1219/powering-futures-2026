import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}explore_ke.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/50" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white space-y-5">
        
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f7a24b]">
          World Energy Council Conference 2026
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-semibold leading-tight">
          POWERING FUTURES:<br />
          <span className="text-[#f7a24b]">POWERING POSSIBILITY</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-medium tracking-[0.25em] uppercase text-gray-100">
          Nairobi, Kenya &nbsp;|&nbsp; 10–12 February 2026
        </p>

        <div className="flex justify-center">
          <Countdown />
        </div>

        {/* Host Logos */}
<div className="flex flex-col items-center gap-3 mt-6">
  <p className="text-[10px] tracking-[0.18em] uppercase opacity-90">
    Hosted by
  </p>

  <div className="flex items-center gap-8 sm:gap-12">

    {/* Kenya Logo */}
    <img
      src={`${import.meta.env.BASE_URL}ke_logo.png`}
      alt="WEC Kenya Host Logo"
      className="
        h-14 sm:h-16 w-auto object-contain drop-shadow-lg
        brightness-125 contrast-110 saturate-110
      "
    />

    {/* South Africa Logo — extra boost */}
    <img
      src={`${import.meta.env.BASE_URL}sa_logo.png`}
      alt="Energy Council of South Africa Logo"
      className="
        h-16 sm:h-[80px] w-auto object-contain drop-shadow-xl
        brightness-[1.35] contrast-125 saturate-120
        scale-110 sm:scale-125
      "
    />
    
  </div>
</div>



        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#registration"
            className="inline-flex items-center justify-center px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-full bg-[#0071ce] text-white hover:bg-[#005aa4] transition"
          >
            Register your interest
          </a>
          <a
            href="#programme"
            className="inline-flex items-center justify-center px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-full border border-white/70 text-white hover:bg-white/10 transition"
          >
            View the programme
          </a>
        </div>
      </div>
    </section>
  );
}

