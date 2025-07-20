"use client";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section
      className="bg-white py-20"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagem ilustrativa com animação */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/pessoas/sobre-protect.png"
            alt="Equipe da Protect Network instalando câmeras de segurança em ambiente corporativo"
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* Texto com animação */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            id="sobre-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          >
            Sobre a Protect Network
          </h2>

          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            A Protect Network é referência em soluções de segurança eletrônica e infraestrutura de redes no Nordeste. Há mais de duas décadas, desenvolvemos projetos sob medida com foco em inovação, confiabilidade e excelência no atendimento.
          </p>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Com uma equipe multidisciplinar altamente qualificada, entregamos soluções completas para empresas e residências que exigem o melhor em CFTV, redes corporativas, controle de acesso e suporte técnico. Somos movidos pela confiança que nossos clientes depositam em nosso trabalho.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
