import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Servicos() {
  const servicos = [
    {
      titulo: "Monitoramento CFTV",
      descricao: "Visualize câmeras ao vivo de qualquer lugar com total segurança.",
      imagem: "/images/servicos/monitorament.jpg",
      link: "/servicos/monitoramento",
    },
    {
      titulo: "Alarmes e Sensores",
      descricao: "Detecte invasões com alertas em tempo real e proteção ativa.",
      imagem: "/images/servicos/alarmes.jpg",
      link: "/servicos/alarmes",
    },
    {
      titulo: "Redes Corporativas",
      descricao: "Cabeamento e estruturação para garantir desempenho e conectividade.",
      imagem: "/images/servicos/redes.jpg",
      link: "/servicos/redes",
    },
    {
      titulo: "Infraestrutura de TI",
      descricao: "Ambientes prontos para o crescimento da sua empresa, com organização profissional.",
      imagem: "/images/servicos/infraestrutura.png",
      link: "/servicos/infraestrutura",
    },
    {
      title: "Locação para Eventos",
      description: "Soluções completas de CFTV, internet Wi-Fi e infraestrutura temporária para eventos, com montagem rápida e suporte técnico especializado.",
      image: "/images/servicos/locacao.jpg",
      link: "/servicos/locacao"
    }
  ];

  return (
    <>
      <Head>
        <title>Serviços | Protect Network</title>
        <meta name="description" content="Conheça todos os serviços oferecidos pela Protect Network." />
      </Head>

      <Header />

      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Soluções em Segurança e Tecnologia
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A Protect Network oferece serviços completos para proteger, conectar e estruturar seu ambiente com eficiência. Conheça abaixo nossas principais especialidades.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <img
                  src={item.imagem}
                  alt={item.titulo}
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
        </div>
      </main>

      <Footer />
    </>
  );
}
