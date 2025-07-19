import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo animado */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col items-start justify-center min-h-[50vh] md:min-h-[60vh]">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Segurança Eletrônica e Redes com Tecnologia de Ponta
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-0 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Monitoramento 24h, instalação de câmeras, estrutura de redes,
          suporte técnico e muito mais. Soluções completas para empresas e
          residências.
        </motion.p>
      </div>
    </section>
  );
}
