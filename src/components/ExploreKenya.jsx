export default function ExploreKenya() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">

      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 tracking-tight">
        Explore Kenya
      </h2>

      {/* Two-column layout */}
      <div className="grid gap-8 md:grid-cols-2 items-start">

        {/* Left: Image */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}city.jpg`}
            alt="Kenya landscape"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Existing Content */}
        <div>
          <p className="text-sm sm:text-base text-slate-700 max-w-3xl mb-6 leading-relaxed">
            Nairobi, the capital of Kenya, is a dynamic city where modern innovation
            meets rich cultural heritage. As East Africa’s commercial and diplomatic
            hub, Nairobi offers visitors an exciting mix of world-class dining,
            contemporary art, and lively markets within a rapidly evolving urban
            landscape.
          </p>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl mb-6 leading-relaxed">
            Just minutes from the centre, Nairobi National Park offers the rare
            chance to encounter wildlife against the backdrop of the city skyline.
            Beyond the city, attendees can explore nearby nature reserves, artisan
            collectives, and historic sites that reveal the region’s depth and
            diversity.
          </p>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
            Suggested places for travel, leisure, and dining will be shared with
            registered participants, highlighting experiences that showcase Kenya’s
            vibrancy, culture, and natural beauty.
          </p>
        </div>

      </div>
    </div>
  );
}
