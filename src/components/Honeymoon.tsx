import { useState } from "react";

export function Honeymoon() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 text-center bg-white relative">
      <h2
        className="text-4xl md:text-5xl mb-4 mt-6"
        style={{ fontFamily: "'Great Vibes', cursive", color: "#D6C4AE" }}
      >
        Luna de Miel
      </h2>

      <p
        className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Nuestro mejor regalo es que <span className="font-semibold">estés con nosotros</span>
        <br />
        <span className="font-semibold">en nuestro día</span>, pero si quieres hacernos un obsequio,
        <br />
        puedes contribuir a nuestra luna de miel.
      </p>

      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D6C4AE] bg-[#FAF7F2] text-[#977f5d] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        COLABORAR
      </button>

      {/* GIF */}
      <img
        src="/honeymoon.gif"
        className="mt-8 w-20 md:w-24 mx-auto opacity-80"
      />

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#E8DCCB] rounded-2xl p-6 w-[90%] max-w-sm shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
            >
              ×
            </button>

            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "'Great Vibes', cursive", color: "#111111" }}
            >
              Ayúdanos a viajar por el mundo
            </h3>

            <div className="text-left text-sm space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Alias:</span> XXXXXXXXX
              </p>
              <p>
                <span className="font-semibold">CBU:</span> XXXXXXXXX
              </p>
              <p>
                <span className="font-semibold">Titular:</span> XXXXXXX XXXXXXX
              </p>
            </div>
          <img src="/honeymoon.png" className="mt-6 mb-4 w-16 mx-auto opacity-80" />
          </div>
        </div>
      )}
    </section>
  );
}