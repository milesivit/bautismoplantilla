import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export function Information() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    // cleanup por si el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <section className="py-20 text-center bg-[#1b4568] relative px-6">

      {/* TITULO */}
      <h2
        className="text-4xl md:text-3xl mb-6"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        INFORMACIÓN
      </h2>

      {/* linea */}
      <div className="w-24 h-[1px] bg-white mx-auto mb-12" />

      {/* TEXTO */}
      <p
        className="text-sm text-white max-w-md mx-auto leading-relaxed mb-6"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        <span className="font-semibold">VALOR POR PERSONA</span>.
      </p>

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

      {/* CARD PRECIO */}
      <div className="bg-[#F4EFE7] rounded-2xl p-6 shadow-md border border-[#D6C4AE] text-center max-w-sm mx-auto mb-6 hover:scale-[1.02] transition">

        {/* ICONO (IMAGEN) */}
        <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#ffffff]">
        <img
          src="/people.gif"
          alt="personas"
          className="w-12 h-12 object-contain"
        />
        </div>

        {/* TITULO */}
        <h4
          className="text-2xl mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mayores
        </h4>

        <p className="text-xs text-gray-500 mb-4">12+ años</p>

        {/* PRECIO ACTUAL */}
        <div className="border-2 border-[#7FA8A1] rounded-xl py-4 mb-3 bg-[#EAF3F1]">
          <p className="text-xs text-[#7FA8A1] mb-1">
            Hasta el 30 de Septiembre (Precio actual)
          </p>
          <p className="text-2xl text-[#2F6F68] font-semibold">
            $65.000
          </p>
        </div>

        {/* PRECIO FUTURO */}
        <div className="rounded-xl py-4 bg-[#E0E0E0] opacity-80">
          <p className="text-xs text-gray-600 mb-1">
            Del 1 de Octubre al 10 de Enero
          </p>
          <p className="text-2xl text-gray-700 font-semibold">
            $70.000
          </p>
        </div>

      </div>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

      {/* CARD PRECIO */}
      <div className="bg-[#F4EFE7] rounded-2xl p-6 shadow-md border border-[#D6C4AE] text-center max-w-sm mx-auto mb-6 hover:scale-[1.02] transition">

        {/* ICONO (IMAGEN) */}
        <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#ffffff]">
        <img
          src="/children.gif"
          alt="personas"
          className="w-12 h-12 object-contain"
        />
        </div>

        {/* TITULO */}
        <h4
          className="text-2xl mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Menores
        </h4>

        <p className="text-xs text-gray-500 mb-4">6 - 11 años</p>

        {/* PRECIO ACTUAL */}
        <div className="border-2 border-[#7FA8A1] rounded-xl py-4 mb-3 bg-[#EAF3F1]">
          <p className="text-xs text-[#7FA8A1] mb-1">
            Precio único
          </p>
          <p className="text-2xl text-[#2F6F68] font-semibold">
            $29.000
          </p>
        </div>

      </div>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

      {/* CARD PRECIO */}
      <div className="bg-[#F4EFE7] rounded-2xl p-6 shadow-md border border-[#D6C4AE] text-center max-w-sm mx-auto mb-6 hover:scale-[1.02] transition">

        {/* ICONO (IMAGEN) */}
        <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#ffffff]">
        <img
          src="/baby.gif"
          alt="personas"
          className="w-12 h-12 object-contain"
        />
        </div>

        {/* TITULO */}
        <h4
          className="text-2xl mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Minis
        </h4>

        <p className="text-xs text-gray-500 mb-4">2 - 5 años</p>

        {/* PRECIO ACTUAL */}
        <div className="border-2 border-[#7FA8A1] rounded-xl py-4 mb-3 bg-[#EAF3F1]">
          <p className="text-xs text-[#7FA8A1] mb-1">
            Precio único
          </p>
          <p className="text-2xl text-[#2F6F68] font-semibold">
            $20.000
          </p>
        </div>

      </div>
      </motion.div>

      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#1b4568] bg-[#ffffff] text-[#1b4568] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        Ver menú completo
      </button>

      {/* ICONO */}
      <img
        className="mt-6 mb-4 w-16 mx-auto opacity-80"
        src="/dinner.png"
      />

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-[92%] max-w-md shadow-xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#111" }}
            >
              Bruncher · Catering
            </h3>

            <p className="text-xs text-gray-600 mb-4 italic">
              Servicio de recepción y cena estilo campo argentino
            </p>

            <div className="text-left text-sm space-y-4 text-gray-700">

              <div>
                <p className="font-semibold">Recepción</p>
                <p>Tabla de fiambres, quesos y frutos secos</p>
                <p>Brusquetas variadas</p>
                <p>Empanaditas criollas</p>
                <p>Canapés gourmet</p>
                <p>Pinchos caprese y de pollo</p>
                <p>Picada criolla</p>
              </div>

              <div>
                <p className="font-semibold">Bebidas</p>
                <p>Vino tinto y blanco</p>
                <p>Cerveza tirada</p>
                <p>Gaseosas y aguas saborizadas</p>
                <p>Limonada y jugos naturales</p>
              </div>

              <div>
                <p className="font-semibold">Plato principal</p>
                <p>Asado tradicional argentino</p>
                <p>Bondiola braseada</p>
                <p>Pollo al horno con hierbas</p>
              </div>

              <div>
                <p className="font-semibold">Guarniciones</p>
                <p>Papas rústicas</p>
                <p>Ensaladas frescas de estación</p>
              </div>

              <div>
                <p className="font-semibold">Postre</p>
                <p>Chocotorta</p>
                <p>Brownie con helado</p>
              </div>

              <div>
                <p className="font-semibold">Trasnoche</p>
                <p>Pizzas</p>
                <p>Sandwiches calientes</p>
                <p>Medialunas dulces</p>
              </div>

              <div>
                <p className="font-semibold">Barra libre</p>
                <p>Fernet, gin, vodka, campari</p>
                <p>Tragos clásicos y tropicales</p>
                <p>Opciones sin alcohol</p>
              </div>

              <p className="text-xs mt-4 text-red-600">
                Contamos con opciones para celíacos, vegetarianos y veganos. Por favor informalo al confirmar tu asistencia.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}