export function Asistencia() {
  return (
    <section className="py-14 text-center bg-[#8B6B4A] px-6">

      {/* TÍTULO */}
      <h2
        className="text-2xl md:text-3xl mb-4 leading-snug"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        ¿VENDRÁS A MI CUMPLEAÑOS Y BAUTISMO?
      </h2>

      {/* TEXTO */}
      <p
        className="text-white/90 text-sm md:text-base mb-6"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        ¡Me haría muy feliz verte ese día! 🤍
      </p>

      {/* LÍNEA */}
      <div className="w-16 h-[1px] bg-white/70 mx-auto mb-8" />

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/543463404686"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#8B6B4A] font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Confirmar asistencia
      </a>

    </section>
  );
}