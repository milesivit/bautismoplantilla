export function DressCode() {
  return (
    <section className="py-10 text-center bg-white">
      <img
        src="/tuxedo.gif"
        className="mt-8 w-20 sm:w-25 md:w-30 mx-auto opacity-80"
      />

      <h2
        className="text-4xl md:text-5xl mb-2 mt-3"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#1b4568" }}
      >
        DRESS CODE
      </h2>

      <p
        className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#1b4568" }}
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

    </section>
  );
}