import Hero from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Itinerary } from "./components/Initerario";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";
import { Frase } from "./components/frase";
import { Instagram } from "./components/Instagram";
import { FraseDos } from "./components/frase2";
import { Gallery } from "./components/Gallery";
import { FraseTres } from "./components/frase3";

function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <Frase />
      <Itinerary />
      <FraseDos />
      <Gallery />
      <FraseTres />
      <Instagram />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;