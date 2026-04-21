import { useEffect, useState } from "react";

export function Gallery() {
  const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"];
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // cambia cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 overflow-hidden">

      {/* MOBILE → carrusel automático */}
      <div className="md:hidden relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full h-[350px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* DESKTOP → grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-[400px] object-cover"
          />
        ))}
      </div>

    </section>
  );
}