import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PhoneCall, Camera, Eye, ShieldCheck } from "lucide-react";

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

      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Locação para Eventos
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Oferecemos soluções temporárias completas em CFTV, conectividade Wi-Fi e infraestrutura tecnológica para eventos de todos os portes. Ideal para feiras, shows, congressos, formaturas e eventos corporativos.
        </p>

        <div className="w-full h-[400px] relative mb-12 rounded-xl overflow-hidden">
          <Image
            src="/images/servicos/locacao.jpg"
            alt="Trailer de CFTV para eventos"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">O que oferecemos:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Locação de câmeras com monitoramento ao vivo</li>
              <li>Rede Wi-Fi dedicada para público, staff e imprensa</li>
              <li>Cabos, roteadores, switches e estrutura de rede temporária</li>
              <li>Trailer técnico equipado com sistema de vigilância</li>
              <li>Suporte técnico durante todo o evento</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Solicite um orçamento</h2>
            <p className="mb-4 text-gray-700">
              Fale conosco pelo WhatsApp e receba um atendimento personalizado para seu evento.
            </p>
            <Link
              href="https://wa.me/558287709274?text=Olá! Gostaria de um orçamento para locação de equipamentos para evento."
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
              target="_blank"
            >
              Solicitar via WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            A segurança e a conectividade do seu evento garantidas pela Protect Network.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
