import { useState } from "react";
import { motion } from "framer-motion";

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10.5a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

export function Itinerary() {
  type MapKey = "civil" | "ceremonia" | "fiesta";

  const [openMap, setOpenMap] = useState<MapKey | null>(null);

  const maps = {
    civil:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.678683828601!2d-62.88533921953781!3d-33.56144854139987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf2c79fbb58f17%3A0xa46b287f54974cfe!2sParroquia%20La%20Anunciaci%C3%B3n%20y%20Santo%20Cristo!5e0!3m2!1sen!2sar",
  
    ceremonia:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.678683828601!2d-62.88533921953781!3d-33.56144854139987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf2c79fbb58f17%3A0xa46b287f54974cfe!2sParroquia%20La%20Anunciaci%C3%B3n%20y%20Santo%20Cristo!5e0!3m2!1sen!2sar",
  
    fiesta:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.678683828601!2d-62.8791295!3d-33.5591006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf2c7af9f51c75%3A0x87c0fa75c1ab3d03!2sSociedad%20Rural!5e0!3m2!1sen!2sar",
  };

  return (
    <section className="py-16 bg-[#E8DCCB] text-center px-6">

      {/* TITULO */}
      <h2
        className="text-4xl md:text-5xl mb-6"
        style={{ fontFamily: "'Great Vibes', cursive", color: "#000000" }}
      >
        Itinerario
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-12">
        Te esperamos para celebrar nuestra boda
      </p>

      {/* linea */}
      <div className="w-24 h-[1px] bg-black mx-auto mb-12" />

      <div className="flex flex-col gap-14 max-w-md mx-auto">

        {/* CIVIL */}
        <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/letter.png" className="mt-6 mb-4 w-16 mx-auto opacity-80" />
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">CIVIL</p>
          <p className="text-2xl text-gray-800">12:30 HS</p>

          <button
            onClick={() => setOpenMap("civil")}
            className="mt-3 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            <span className="text-[#977f5d] flex items-center gap-2 text-sm">
              <LocationIcon />
              Cómo llegar
            </span>
          </button>
        </motion.div>
        </div>

        {/* CEREMONIA */}
        <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/church.png" className="mt-6 mb-4 w-16 mx-auto opacity-80" />
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">CEREMONIA</p>
          <p className="text-2xl text-gray-800">20:30 HS</p>

          <button
            onClick={() => setOpenMap("ceremonia")}
            className="mt-3 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            <span className="text-[#977f5d] flex items-center gap-2 text-sm">
              <LocationIcon />
              Cómo llegar
            </span>
          </button>
        </motion.div>
        </div>

        {/* FIESTA */}
        <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/champagne.png" className="mt-6 mb-4 w-16 mx-auto opacity-80" />
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">FIESTA</p>
          <p className="text-2xl text-gray-800">21:00 HS</p>

          <button
            onClick={() => setOpenMap("fiesta")}
            className="mt-3 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            <span className="text-[#977f5d] flex items-center gap-2 text-sm">
              <LocationIcon />
              Cómo llegar
            </span>
          </button>
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      {openMap && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-2xl rounded-xl overflow-hidden relative">

            {/* cerrar */}
            <button
              onClick={() => setOpenMap(null)}
              className="absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

            {/* MAPA */}
            <iframe
              src={maps[openMap]}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}