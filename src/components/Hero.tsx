import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    if (!started) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [started]);

  const toggleMute = () => {
    if (!audioRef.current) return;
  
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const startExperience = () => {
    audioRef.current?.play();
    setStarted(true);
  };

  return (
<section className="h-screen w-full flex items-center justify-center relative overflow-hidden transition-all duration-700">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: "url('/couple.jpeg')",
          filter: started ? "blur(0px)" : "blur(8px)",
          transform: started ? "scale(1)" : "scale(1.05)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundColor: started
            ? "rgba(0,0,0,0.4)"
            : "rgba(0,0,0,0.7)",
        }}
      />

      {/* Contenido (NO borroso) */}
      <div className="relative z-10 text-center text-white px-4">

        {!started ? (
          <button
            onClick={startExperience}
            className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            Ver invitación ✨
          </button>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 mb-2 text-lg md:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Con mucha alegría, te invitamos a nuestra boda
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" mt-6 md:mt-8 text-5xl md:text-7xl leading-tight"
              style={{ fontFamily: "'Great Vibes', cursive",
                color: "#E8DCCB"
              }}
            >
              Marcos y Valentina
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-2 text-md tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              10 de enero 2027
            </motion.p>
          </>
        )}

      </div>

      {/* Música */}
      <audio ref={audioRef} src="/cancion.mp3" />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      </section>
  );
}