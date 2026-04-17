import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import { DressCode } from "./components/DressCode";
import { Honeymoon } from "./components/Honeymoon";
import { Itinerary } from "./components/Initerario";
import { Information } from "./components/Menu";
import { Bebes } from "./components/Bebes";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <DressCode />
      <Itinerary />
      <Honeymoon />
      <Information />
      <Bebes />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;