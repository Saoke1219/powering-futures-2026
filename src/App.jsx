import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SidebarMenu from "./components/SidebarMenu";
import WhyAttend from "./components/WhyAttend";
import RegistrationForm from "./components/RegistrationForm";
import ProgramTabs from "./components/ProgramTabs";
import SponsorshipSection from "./components/SponsorshipSection";
import ExploreKenya from "./components/ExploreKenya";
import VisaInfo from "./components/VisaInfo";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import VenueTravelSection from "./components/VenuetravelSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* OVERVIEW STYLE SECTION: left content, right quick links */}
        <section
          id="overview"
          className="bg-[#003845] text-white border-t border-[#005164]"
        >
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20 lg:grid lg:grid-cols-[minmax(0,2.1fr)_minmax(260px,1fr)] lg:gap-16">
            {/* Left column: Why Attend + intro text */}
            <div>
              <WhyAttend />
            </div>

            {/* Right column: sticky sidebar menu */}
            <aside className="mt-10 lg:mt-0 lg:sticky lg:top-24 self-start">
              <SidebarMenu />
            </aside>
          </div>
        </section>

        {/* MAIN SECTIONS – full-width blocks below */}
        <section id="registration" className="bg-white">
          <RegistrationForm />
        </section>

        <section id="programme" className="bg-[#003845] text-white">
          <ProgramTabs />
        </section>

        

        <section id="sponsorship" className="bg-[#f5f7fa]">
          <SponsorshipSection />
        </section>

        <section id="travel" className="bg-[#003845] text-white">
            <VenueTravelSection />
        </section>

        <section id="explore-kenya" className="bg-white">
          <ExploreKenya />
        </section>

        <section id="visa" className="bg-[#f5f7fa]">
          <VisaInfo />
        </section>

        <section id="contact" className="bg-white">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
