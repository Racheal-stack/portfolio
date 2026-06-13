import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import SidebarNav from "@/components/SidebarNav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />

      <div className="relative px-6 lg:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="glow-orb -left-40 top-1/4 h-[400px] w-[400px] bg-indigo-600/10" />
          <div className="glow-orb -right-40 bottom-1/4 h-[400px] w-[400px] bg-purple-700/10" />
        </div>

        <div className="relative mx-auto flex max-w-7xl gap-16 pb-24 pt-8">
          <SidebarNav />
          <main className="min-w-0 flex-1">
            <About />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
