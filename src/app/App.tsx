import { Hero } from "./components/Hero";
import { ForWho } from "./components/ForWho";
import { Program } from "./components/Program";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { Enroll } from "./components/Enroll";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ForWho />
      <Program />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <Enroll />
      <Footer />
    </div>
  );
}
