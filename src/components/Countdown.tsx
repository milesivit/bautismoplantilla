import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-12-01T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const total = EVENT_DATE.getTime() - now.getTime();

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
    <div className="bg-white/30 backdrop-blur-md px-2 py-2 md:px-3 md:py-2 rounded-xl 
                    text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 shadow-md 
                    min-w-[50px] sm:min-w-[60px] md:min-w-[70px] text-center">
        <motion.span
          initial={false}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="block"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </div>
      <span className="text-xs sm:text-sm mt-2">{label}</span>
    </div>
  );

  return (
    <div
    className="min-h-[60vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-gray-600 tracking-[0.3em] text-sm mb-10">
        {/* Corazón decorativo */}
        <div className="mt-4 text-gray-500 text-1xl">♡</div>
      {/* Título */}
        FALTAN
      </h1>

      {/* Countdown */}
      <div className="flex gap-6">
        <Item value={time.days} label="Días" />
        <Item value={time.hours} label="Horas" />
        <Item value={time.minutes} label="Minutos" />
        <Item value={time.seconds} label="Segundos" />
      </div>

      {/* Texto abajo */}
      <p className="mt-10 text-gray-600 italic text-sm">
        Para el día más especial de nuestras vidas
      </p>

        <img
        src="/corazon.png"
        className="mt-6 w-16 opacity-70"
        />
    </div>
  );
}