export function Asistencia() {
  return (
    <section className="py-10 text-center bg-[#E8DCCB] ">

      <h2
        className="text-4xl md:text-5xl mb-4 mt-6"
        style={{ fontFamily: "'Great Vibes', cursive", color: "#000000" }}
      >
        Confirmá tu asistencia
      </h2>

      {/* linea */}
      <div className="w-24 h-[1px] bg-black mx-auto mb-12" />

      <p
        className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Por favor <span className="font-semibold">confirma tu asistencia</span> antes del <span className="font-semibold">primero de octubre</span>
      </p>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/543463646518"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D6C4AE] bg-[#FAF7F2] text-[#977f5d] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Confirmar por WhatsApp
      </a>

      <img
        src="/invitacion.png"
        className="mt-8 w-10 md:w-12 mx-auto opacity-80"
      />
    </section>
  );
}