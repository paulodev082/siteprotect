// pages/servicos/locacao.js
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormOrcamento from "../../components/FormOrcamento";
import {
  Wifi,
  Camera,
  Router,
  Truck,
  Headset,
  ShieldCheck,
} from "lucide-react";

export default function Locacao() {
  return (
    <>
      <Head>
        <title>Locação para Eventos | Protect Network</title>
        <meta
          name="description"
          content="Soluções completas de CFTV, internet Wi-Fi e infraestrutura temporária para eventos com a qualidade da Protect Network."
        />
      </Head>

      <Header />

      <main className="bg-white min-h-screen flex flex-col justify-start">
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              Locação de Tecnologia para Eventos
            </h1>

            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-lg">
              Oferecemos soluções temporárias completas em CFTV, Wi-Fi dedicado e
              infraestrutura de rede para eventos de todos os portes. Ideal para
              feiras, shows, congressos e formaturas.
            </p>

            <div className="mb-14 flex justify-center">
              <Image
                src="/images/servicos/locacao.jpg"
                alt="Locação de equipamentos para eventos"
                width={1000}
                height={500}
                className="rounded-xl shadow-2xl w-full max-w-4xl h-auto object-cover"
                priority
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <Camera className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-blue-800 text-lg mb-2">Monitoramento ao Vivo</h3>
                <p className="text-sm text-gray-700">Câmeras de segurança com acesso remoto e vigilância 24h.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <Wifi className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-blue-800 text-lg mb-2">Wi-Fi Dedicado</h3>
                <p className="text-sm text-gray-700">Rede estável para público, equipe e imprensa.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <Router className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-blue-800 text-lg mb-2">Infraestrutura de Rede</h3>
                <p className="text-sm text-gray-700">Switches, roteadores e cabeamento temporário.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <Truck className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-blue-800 text-lg mb-2">Trailer Equipado</h3>
                <p className="text-sm text-gray-700">Unidade móvel com tecnologia integrada de vigilância.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <Headset className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-blue-800 text-lg mb-2">Suporte Técnico</h3>
                <p className="text-sm text-gray-700">Assistência durante toda a realização do evento.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
                Eventos protegidos com confiança
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                <blockquote className="bg-white p-4 rounded shadow">
                  “Alugamos com a Protect para nosso festival e foi tudo impecável:
                  imagens ao vivo, Wi-Fi sem falhas e suporte nota 10.”
                  <br />
                  <span className="block mt-2 font-semibold text-blue-700">
                    — Carla, Produtora de Eventos
                  </span>
                </blockquote>
                <blockquote className="bg-white p-4 rounded shadow">
                  “A estrutura de câmeras com trailer da Protect fez toda
                  diferença na segurança do nosso evento.”
                  <br />
                  <span className="block mt-2 font-semibold text-blue-700">
                    — Marcos, Diretor de Logística
                  </span>
                </blockquote>
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <Image
                src="/images/favicon.png"
                alt="Selo de confiança"
                width={80}
                height={80}
                className="w-20 h-auto"
              />
            </div>

            {/* Formulário com assunto pré-definido */}
            <FormOrcamento assunto="Locação para Eventos" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
