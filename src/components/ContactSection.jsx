export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-start">

        {/* Left Text Block */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
            Contact Us about WEC Conference 2026
          </h2>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl mb-4 leading-relaxed">
            If you have questions about registration, sponsorship, speaking
            opportunities, logistics, or the programme, the conference team is
            here to help.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            You can also reach us directly by email at{" "}
            <a
              href="mailto:info@oesslin.com"
              className="font-semibold underline hover:text-[#f7a24b] transition"
            >
              info@oesslin.com
            </a>.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white border border-slate-200 rounded-md p-6 space-y-4 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Contact form submission handling to be wired.");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0071ce]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0071ce]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0071ce]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0071ce]"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 border-slate-300 rounded"
            />
            <label
              htmlFor="consent"
              className="text-xs text-slate-600 leading-snug"
            >
              By clicking “submit” you consent to the storage and use of your
              data according to our Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#0071ce] text-white text-sm font-semibold py-2.5 hover:bg-[#005aa4] transition"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

  