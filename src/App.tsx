import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark font-sans">
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </WouterRouter>
  );
}
