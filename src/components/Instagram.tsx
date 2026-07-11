import { motion } from "framer-motion";

export function Instagram() {
  return (
    <section className="py-12 text-center bg-[#ffffff]">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/camera.gif"
          className="mt-6 w-16 md:w-20 mx-auto"
        />
      </motion.div>

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#A68A64" }}
      >
        Subí tus momentos y etiquetalos
      </h2>

      <div className="w-16 h-[2px] bg-[#A68A64] mx-auto mb-4 rounded-full" />

      <p
        className="text-base md:text-lg text-gray-600 max-w-sm mx-auto leading-relaxed px-4"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        con mi hashtag: <span className="font-semibold">#magdamibautismo</span>
      </p>

    </section>
  );
}