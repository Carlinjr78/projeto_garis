import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Impact />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
