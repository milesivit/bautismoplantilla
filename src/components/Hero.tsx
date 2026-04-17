import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const startExperience = () => {
    audioRef.current?.play();
    setStarted(true);
  };

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/viryseba.png')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative text-center text-white px-4">
        
        {!started ? (
          <button
            onClick={startExperience}
            className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            ✨ Ver invitación
          </button>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-4 mb-2 text-lg md:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Estás invitado a la boda de
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 md:mt-8 text-5xl md:text-7xl leading-tight"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Sebastián y Virginia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-2 text-md tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              1 de diciembre 2026
            </motion.p>
          </>
        )}
      </div>

      {/* Música */}
      <audio ref={audioRef} src="/music.mp3" />
    </section>
  );
}