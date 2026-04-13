import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-heritage-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

