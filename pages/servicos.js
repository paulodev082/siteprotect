// pages/servicos.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Servicos() {
  const servicos = [
    {
      titulo: "Monitoramento CFTV",
      descricao: "Visualize câmeras ao vivo de qualquer lugar.",
      imagem: "/images/servicos/monitorament.jpg",
      link: "/servicos/monitoramento",
    },
    {
      titulo: "Alarmes e Sensores",
      descricao: "Detecte invasões com alertas em tempo real.",
      imagem: "/images/servicos/alarmes.jpg",
      link: "/servicos/alarmes",
    },
    {
      titulo: "Redes Corporativas",
      descricao: "Cabeamento e organização para alto desempenho.",
      imagem: "/images/servicos/redes.jpg",
      link: "/servicos/redes",
    },
    {
      titulo: "Infraestrutura de TI",
      descricao: "Ambientes preparados para o crescimento da sua empresa.",
      imagem: "/images/servicos/infraestrutura.png",
      link: "/servicos/infraestrutura",
    },
    {
      titulo: "Locação para Eventos",
      descricao: "Soluções completas para eventos com câmeras, Wi-Fi e suporte técnico.",
      imagem: "/images/servicos/estande.jpeg",
      link: "/servicos/locacao",
    },
  ];

  return (
    <>
      <Head>
        <title>Serviços | Protect Network</title>
        <meta name="description" content="Conheça os serviços da Protect Network em segurança eletrônica e redes corporativas." />
      </Head>

      <Header />

      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Nossos Serviços
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Soluções completas para proteger e conectar seu patrimônio com tecnologia de ponta e suporte especializado.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {servicos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-blue-800 font-bold text-lg mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.descricao}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
