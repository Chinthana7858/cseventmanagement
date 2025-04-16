import About from "@/components/About";
import Agenda from "@/components/Agenda";
import CoverPage from "@/components/CoverPage";
import EventOverview from "@/components/EventOverview";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OurSpeakers from "@/components/OurSpeakers";
import RegisterSection from "@/components/RegisterSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className=" top-0 z-50">
        <NavBar />
      </div>
      <CoverPage />
      <EventOverview />
      <OurSpeakers />
      <Agenda />
      <About />
      <RegisterSection />
      <footer className="flex flex-wrap gap-6 items-center justify-center p-4">
        <Footer />
      </footer>
    </div>
  );
}
