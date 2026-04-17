import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-12-01T00:00:00");

function getTimeLeft() {
    const now = new Date();
    
    const total = EVENT_DATE.getTime() - now.getTime(); 
    let years = EVENT_DATE.getFullYear() - now.getFullYear();
    let months = EVENT_DATE.getMonth() - now.getMonth();
    let days = EVENT_DATE.getDate() - now.getDate();

    if (days < 0) {
        months--;
        const prevMonthDays = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
        ).getDate();
        days += prevMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return {
        months: months + years * 12,
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
      <div className="bg-white/30 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-2xl 
                      text-2xl sm:text-3xl md:text-5xl font-serif text-gray-800 shadow-md 
                      min-w-[65px] sm:min-w-[80px] md:min-w-[100px] text-center">
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
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
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