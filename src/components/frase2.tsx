export function FraseDos() {
  return (
    <section className="py-12 bg-[#3FA7D6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-6">
        
        {/* línea arriba */}
        <div className="w-24 md:w-40 h-[1px] bg-white/70" />

        <h2
          className="text-lg md:text-2xl text-center leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
        >
          UN AÑITO DE RISAS, JUEGOS Y TRAVESURAS
        </h2>


        {/* línea abajo */}
        <div className="w-24 md:w-40 h-[1px] bg-white/70" />

      </div>
    </section>
  );
}