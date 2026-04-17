export function Footer() {
    return (
      <section className="py-5 text-center bg-white">
  
        <img
          src="/minilogo.png"
          className="w-16 md:w-20 mx-auto opacity-80 mb-4"
        />
  
        <p
          className="text-xs text-gray-500 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Desarrollado por <span className="font-semibold">Milena Sivit</span>
        </p>
  
        {/* BOTONES REDES */}
        <div className="flex justify-center gap-3">
  
          {/* WhatsApp */}
          <a
            href="https://wa.me/543463645091"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-3 py-1 rounded-full border border-[#D6C4AE] bg-[#FAF7F2] text-[#977f5d] hover:scale-105 transition"
          >
            WhatsApp
          </a>
  
          {/* Instagram */}
          <a
            href="https://instagram.com/sivitcode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-3 py-1 rounded-full border border-[#D6C4AE] bg-[#FAF7F2] text-[#977f5d] hover:scale-105 transition"
          >
            Instagram
          </a>
  
          {/* Portfolio */}
          <a
            href="https://portfoliosivit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-3 py-1 rounded-full border border-[#D6C4AE] bg-[#FAF7F2] text-[#977f5d] hover:scale-105 transition"
          >
            Portfolio
          </a>
  
        </div>
      </section>
    );
  }