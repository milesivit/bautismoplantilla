export function Bebes() {
    return (
      <section className="py-10 text-center bg-white">
  
        <h2
          className="text-4xl md:text-5xl mb-4 mt-6"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#D6C4AE" }}
        >
          Solo adultos
        </h2>
  
        <p
          className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
            <span className="font-semibold">Adoramos a sus niños</span>, pero ese día queremos 
            <br />
            que ustedes puedan <span className="font-semibold">relajarse y disfrutar</span> al máximo sin preocupaciones.

        </p>
  
        <img
          src="/baby.gif"
          className="mt-8 w-20 md:w-24 mx-auto opacity-80"
        />
      </section>
    );
  }