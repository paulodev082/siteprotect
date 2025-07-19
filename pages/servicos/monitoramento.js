import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PhoneCall, Camera, Eye, ShieldCheck } from "lucide-react";

export default function Monitoramento() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Monitoramento CFTV com Acesso Remoto e Alta Definição
          </h1>

          {/* Imagem */}
          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/monitorament.jpg"
              alt="Sistema de monitoramento CFTV"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Descrição geral */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Com o monitoramento CFTV da Protect, você acompanha em tempo real tudo o que acontece no seu patrimônio – de onde estiver. Garantia de segurança, tranquilidade e controle total.
            </p>
            <p>
              Utilizamos câmeras de alta resolução, gravadores modernos e acesso remoto via celular ou computador, com suporte técnico local de confiança.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Camera className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Alta Qualidade de Imagem</h3>
              <p className="text-sm text-gray-700">Câmeras HD com visão noturna e amplo alcance.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Eye className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Acesso ao Vivo</h3>
              <p className="text-sm text-gray-700">Visualize em tempo real do celular, tablet ou computador.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Segurança 24h</h3>
              <p className="text-sm text-gray-700">Proteção contínua para empresas e residências.</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">O que dizem nossos clientes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “Instalação rápida e equipamentos de ótima qualidade. Consigo acompanhar tudo pelo celular!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Fernanda, Empresária</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “A equipe da Protect me deu todo o suporte que precisei. Agora tenho segurança real.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Rafael, Síndico</span>
              </blockquote>
            </div>
          </div>

          {/* Selo de segurança */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/favicon.png"
              alt="Selo de segurança"
              className="w-20 h-auto"
            />
          </div>

          {/* Botão WhatsApp */}
          <div className="text-center">
            <Link
              href="https://wa.me/558287709274?text=Olá! Tenho interesse no serviço de Monitoramento CFTV da Protect Tecnologia. Poderia me enviar mais informações?"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              <PhoneCall size={20} />
              Solicitar orçamento via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
