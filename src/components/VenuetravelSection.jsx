

export default function VenueTravelSection() {
    return (
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
  
        {/* Venue Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 tracking-tight">
          Event Venue: The Edge Convention Center
        </h2>
  
        {/* Two-column layout: Text left, Image right */}
  <section className="grid gap-8 md:grid-cols-2 items-center mb-16">
  
  {/* Left: Text */}
  <div>
    <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
      Nestled on the edge of Nairobi and just steps from the National Park,{" "}
      <a
        className="text-[#f7a24b] font-semibold hover:underline"
      >
        The Edge
      </a>{" "}
      offers a world-class setting for collaboration, connection, and creativity.
      More than a conference venue, it provides an energising environment where
      participants can engage in high-impact discussions, build partnerships,
      and explore new ideas.
    </p>
  
    <p className="text-sm sm:text-base text-slate-100 mt-4 leading-relaxed">
      With its inviting ambiance and warm African hospitality, The Edge sets the
      stage for productive sessions, meaningful networking, and truly memorable
      conference experiences.
    </p>
  </div>
  
  {/* Right: Image */}
  <div>
    <img
      src={`${import.meta.env.BASE_URL}the_edge.jpg`}
      alt="The Edge Convention Center Nairobi"
      className="w-full max-h-[420px] object-cover rounded-lg shadow-lg"
    />
  </div>
  
  </section>
  
  
        {/* 3-column Info */}
        <section className="grid gap-8 md:grid-cols-3 text-sm sm:text-base">
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Getting to Kenya</h3>
            <p className="text-slate-100 leading-relaxed">
              Nairobi is served by Jomo Kenyatta International Airport (NBO) with direct
              or one-stop connections from major hubs in Africa, Europe, the Middle East,
              and beyond.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Where to Stay</h3>
            <p className="text-slate-100 leading-relaxed">
              A range of partner hotels and guesthouses will be available near the venue
              and within central Nairobi. Details on recommended accommodation options
              and booking links will be shared with confirmed participants.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Movement Around Nairobi</h3>
            <p className="text-slate-100 leading-relaxed">
              Transport options include organised shuttles for conference venues,
              ride-hailing services, and licensed taxis. Further guidance on safe and
              convenient mobility options will be provided closer to the event.
            </p>
          </div>
  
        </section>
  
        {/* Contact */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Logistics Enquiries
          </h3>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
            If you have any questions regarding travel, accommodation, or general logistics,
            please contact us at{" "}
            <a
              href="mailto:info@oesslin.com"
              className="font-semibold underline hover:text-[#f7a24b] transition"
            >
              info@oesslin.com
            </a>.
          </p>
        </section>
      </div>
    );
  }
  