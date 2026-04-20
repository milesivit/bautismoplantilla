import { motion } from "framer-motion";

export function Instagram() {
    return (
      <section className="py-10 text-center bg-[#1b4568]">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <img
            src="/insta.webp"
            className="mt-8 w-20 md:w-24 mx-auto"
            />
        </motion.div>

        <h2
          className="text-4xl md:text-4xl mb-2 mt-2"
          style={{ fontFamily:  "'Montserrat', sans-serif", color: "#ffffff" }}
        >
          @bodanatiymati
        </h2>

        <div className="w-24 h-[1px] bg-white mx-auto mb-12" />
        
  
        <p
          className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#ffffff" }}
        >
            ¡Preparate para nuestro gran día!
            <br />
            Ya podés seguirnos en nuestra cuenta 
            <br />
            para ver todas las novedades del casamiento
            <br />
             y etiquetarnos en tus fotos y videos.

        </p>
  
      </section>
    );
  }