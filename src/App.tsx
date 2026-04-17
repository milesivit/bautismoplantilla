import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import { DressCode } from "./components/DressCode";
import { Honeymoon } from "./components/Honeymoon";
import { Itinerary } from "./components/Initerario";
import { Information } from "./components/Menu";
import { Bebes } from "./components/Bebes";

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
    </>
  );
}

export default App;