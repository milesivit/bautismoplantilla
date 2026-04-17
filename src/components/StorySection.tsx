import { motion } from "framer-motion";

const sections = [
  {
    title: "La Invitación",
    text: "Hay momentos en la vida que son especiales por sí solos...",
  },
  {
    title: "El Gran Día",
    text: "Te invito a compartir una noche inolvidable llena de magia...",
  },
  {
    title: "Detalles",
    text: "Tu presencia es muy importante para nosotros. ¡No faltes!",
  },
];

export default function StorySection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {item.title}
            </h2>
            <p className="text-lg md:text-xl text-white/80">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}