export default function VisaInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight">
        Visa Information for WEC Conference 2026
      </h2>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 max-w-3xl mb-6 leading-relaxed">
        Deadline for visa applications:{" "}
        <span className="font-semibold">[To be confirmed]</span>. We recommend
        that all international participants review visa requirements and begin
        their application as early as possible.
      </p>

      {/* Determine Visa Need */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Determine if you need a visa
        </h3>

        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          To see if you need a visa to travel to Kenya, please consult the
          official website of the Embassy of Kenya or your nearest Kenyan
          diplomatic mission.
        </p>

        <p className="mt-2 text-sm">
          Official information:{" "}
          <a
            href="https://www.ecitizen.go.ke"
            target="_blank"
            rel="noreferrer"
            className="text-[#0071ce] underline"
          >
            Kenya eVisa / eCitizen portal
          </a>
        </p>
      </section>

      {/* Steps for Application */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Steps for visa application</h3>
        
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
          <li>Determine whether you require a visa for entry to Kenya.</li>
          <li>Review the document and photograph requirements.</li>
          <li>
            Submit your application via the official online portal or the
            relevant embassy/consulate.
          </li>
          <li>
            Allow sufficient processing time and keep copies of all documents.
          </li>
        </ol>
      </section>

      {/* Notes */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Additional notes</h3>

        <ul className="list-disc list-inside text-sm sm:text-base text-slate-700 space-y-2 leading-relaxed">
          <li>
            Ensure your passport is valid for at least 6 months beyond your
            travel dates.
          </li>
          <li>Check whether transit visas are required for any stopovers.</li>
          <li>
            Keep printed and digital copies of your visa approval and invitation
            letter (if applicable).
          </li>
        </ul>
      </section>

      {/* Help Section */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Need help?</h3>

        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          For assistance or questions regarding your visa application, please
          contact the conference support team at{" "}
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

  