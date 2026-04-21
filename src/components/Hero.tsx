import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = started ? "auto" : "hidden";
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
    <>
      <div
        className={`fixed inset-0 bg-white z-50 flex items-center justify-center text-center px-4 transition-opacity duration-700 ${
          started ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#3FA7D6" }}
          >
            MAGDALENA
          </motion.h2>

          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl mb-6 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#5F9FBF" }}
          >
            Mi primer añito y bautismo
          </motion.h6>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={startExperience}
            className="px-8 py-3 rounded-full text-lg shadow-md hover:scale-105 transition"
            style={{ backgroundColor: "#3FA7D6", color: "white" }}
          >
            VER INVITACIÓN
          </motion.button>
        </div>
      </div>

      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden transition-all duration-700">
        
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: "url('/cata.jpeg')",
            filter: started ? "blur(0px)" : "blur(8px)",
            transform: started ? "scale(1)" : "scale(1.05)",
          }}
        />

        {/* Overlay oscuro */}
        {/* <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: started
              ? "rgba(0,0,0,0.4)"
              : "rgba(0,0,0,0.7)",
          }}
        /> */}

        {/* Música */}
        <audio ref={audioRef} src="/cancion.mp3" />

        {/* Botón sonido */}
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </section>
    </>
  );
}