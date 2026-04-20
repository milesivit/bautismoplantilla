import { useEffect, useState } from "react";

export function Countdown() {
  const weddingDate = new Date("2027-01-10T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +weddingDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span
        className="text-4xl md:text-6xl font-light tabular-nums"
        style={{ color: "#1b4568" }}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="text-xs md:text-sm tracking-[0.2em] mt-2"
        style={{ color: "#1b4568" }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <section className="bg-white py-16 text-center">

      <p
        className="mt-10 text-lg tracking-wide"
        style={{ color: "#1b4568" }}
      >
        El <span className="text-red-600 font-medium">01 de Enero de 2027</span> en
      </p>

      <img
        src="/rings.gif"
        className="mt-8 w-20 md:w-24 mx-auto opacity-80"
      />

      <div className="flex justify-center gap-6 md:gap-10">
        <Item value={timeLeft.days} label="DÍAS" />
        <Item value={timeLeft.hours} label="HORAS" />
        <Item value={timeLeft.minutes} label="MIN" />
        <Item value={timeLeft.seconds} label="SEG" />
      </div>

      <p
        className="mt-10 text-lg tracking-wide"
        style={{ color: "#1b4568" }}
      >
        ¡NOS CASAMOS!
      </p>
    </section>
  );
}