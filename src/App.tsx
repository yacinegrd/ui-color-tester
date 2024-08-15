import Header from "./components/Header";
import Logos from "./components/Logos";
import Hero from "./components/Hero";
import "./styles/App.scss";
import DarkSection from "./components/DarkSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
