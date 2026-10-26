import { Header } from "@/components/header";
import { Hero, Marquee } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Founder } from "@/components/founder";
import { Principle } from "@/components/principle";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8faff] text-slate-950 transition-colors duration-200 dark:bg-[#0c0e14] dark:text-white">
      <Header />
      <main id="home" className="flex-1 bg-[#f8faff] dark:bg-[#0c0e14]">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Pricing />
        <Process />
        <Founder />
        <Principle />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
