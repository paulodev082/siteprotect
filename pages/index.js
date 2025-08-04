import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Footer from "../components/Footer";
import ClientesSlider from "../components/ClientesSlider";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
        <title>Protect Network</title>
        <meta name="description" content="Soluções em segurança eletrônica e redes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Sobre />

        {/* Slider de clientes atendidos */}
        <ClientesSlider />

        {/* Seção de serviços */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
              Nossos Serviços
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Conheça as soluções da Protect Network para proteger seu patrimônio com inovação, desempenho e confiabilidade.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {servicos.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                >
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover"
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
                      Saiba mais <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/servicos"
                className="inline-block bg-blue-700 text-white font-medium py-3 px-6 rounded hover:bg-blue-800 transition"
              >
                Ver todos os serviços
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
