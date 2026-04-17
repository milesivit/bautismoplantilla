export function DressCode() {
  return (
    <section className="py-10 text-center bg-white">

      <h2
        className="text-4xl md:text-5xl mb-4 mt-6"
        style={{ fontFamily: "'Great Vibes', cursive", color: "#D6C4AE" }}
      >
        Dress Code
      </h2>

      <p
        className="text-lg mb-6 tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FORMAL
      </p>

      <p
        className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Recordá que en esta ocación el blanco es exclusivo 
        <br />
        para los novios.
        <br />
        Te pedimos evitar los colores{" "}
        <span className="text-red-600 font-medium">rojo</span>{" "}
        y{" "}
        <span className="text-amber-600 font-medium">crema</span>.
      </p>

      <img
        src="/model.gif"
        className="mt-8 w-20 md:w-24 mx-auto opacity-80"
      />
    </section>
  );
}