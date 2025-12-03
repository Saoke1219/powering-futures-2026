export default function WhyAttend() {
  const bullets = [
    "<strong>Shape real outcomes</strong> <span class='text-sm sm:text-base text-gray-200'>at a critical moment for energy transformation and implementation.</span>",
    "<strong>Engage directly with global leaders</strong> <span class='text-sm sm:text-base text-gray-200'>across government, industry, finance, technology, and policy who are driving the next phase of the energy transition.</span>",
    "<strong>Co-create an actionable agenda</strong> <span class='text-sm sm:text-base text-gray-200'>through high-level plenaries, interactive sessions, and collaborative working groups.</span>",
    "<strong>Access emerging opportunities</strong> <span class='text-sm sm:text-base text-gray-200'>in renewable-focused systems, hydrogen development, and clean energy value chains.</span>",
    "<strong>Build cross-continental partnerships</strong> <span class='text-sm sm:text-base text-gray-200'>that connect Africa’s transition with global markets, supply chains, and investment flows.</span>",
    "<strong>Gain early insight</strong> <span class='text-sm sm:text-base text-gray-200'>into ideas, investment directions, and innovation shaping the 2026 World Energy Congress.</span>",
    "<strong>Expand your network</strong> <span class='text-sm sm:text-base text-gray-200'>through curated sessions, meaningful conversations, and partnership facilitation.</span>",
    "<strong>Experience Nairobi’s energy</strong> <span class='text-sm sm:text-base text-gray-200'>— a vibrant hub for innovation, culture, and global collaboration.</span>",
  ];    

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 tracking-tight text-white">
        POWERING FUTURES, POWERING POSSIBILITY
      </h2>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-sm sm:text-base text-gray-100 leading-relaxed max-w-4xl mb-14">
        <p>
          Africa’s energy transition stands at a decisive inflection point, and so does 
          the global market that surrounds it. As the world moves from net-zero pledges 
          to real implementation, Africa is no longer a frontier of potential but a 
          system actor whose choices will shape resilience, competitiveness and energy 
          security around the world.
        </p>

        <p>
          The World Energy Council Conference 2026, held under the theme Powering 
          Futures: Powering Possibility, creates a results-focused platform that brings 
          together governments, energy leaders, financiers, innovators, and development 
          partners to align renewable-first systems with the policy, capital, and 
          partnerships needed to realize them.
        </p>

        <p>
          Co-hosted by the Kenya and South Africa Member Committees of the World Energy 
          Council, the conference provides a collaborative space for designing an 
          actionable agenda that connects energy access and equity with industrial 
          competitiveness and global stability. The focus is on implementation, 
          coordination, and system design, ensuring that ideas translate into real 
          progress.
        </p>

        <p>
          Our work in Nairobi will help establish the foundation of a continental platform 
          for renewable and hydrogen cooperation and inform Africa’s collective 
          contribution to the World Energy Congress in Riyadh. It is a moment to shape 
          solutions that elevate shared opportunity and expand the possibilities of a 
          more secure and resilient global energy future.
        </p>
      </div>

      {/* Subheading like screenshot */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide text-[#f7a24b]">
        Why Attend WEC Conference 2026?
      </h3>

      {/* Bulleted List */}
      <ul className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-100">
        {bullets.map((item, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className="h-2 w-2 rounded-sm bg-[#f7a24b] mt-2 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>

    </section>
  );
}


  