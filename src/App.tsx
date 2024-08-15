import "./styles/App.scss";

import Header from "./components/Header";
import Logos from "./components/Logos";
import Hero from "./components/Hero";
import DarkSection from "./components/DarkSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <>
      <ColorPicker />
      <Header />
      <main>
        <Hero />
        <Logos />
        <DarkSection />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
