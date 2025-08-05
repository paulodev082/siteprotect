// pages/servicos/infraestrutura.js
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormOrcamento from "../../components/FormOrcamento";
import { ServerCog, Cable, ShieldCheck } from "lucide-react";

export default function Infraestrutura() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Infraestrutura de TI para Empresas Conectadas e Produtivas
          </h1>

          {/* Imagem */}
          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/infraestrutura.png"
              alt="Infraestrutura de TI corporativa"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Descrição geral */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Planejamos e executamos toda a infraestrutura de TI da sua empresa com foco em desempenho, estabilidade e escalabilidade. Desde a estrutura física até a configuração de servidores e sistemas.
            </p>
            <p>
              Conte com nossa experiência para transformar o ambiente tecnológico do seu negócio com cabeamento organizado, redes seguras e suporte técnico profissional.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <ServerCog className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Servidores e Rack</h3>
              <p className="text-sm text-gray-700">Instalação e configuração profissional de servidores e salas técnicas.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Cable className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Cabeamento Estruturado</h3>
              <p className="text-sm text-gray-700">Organização, desempenho e certificação de toda a rede física.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Segurança e Backup</h3>
              <p className="text-sm text-gray-700">Firewall, antivírus, políticas de acesso e backup inteligente.</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">O que dizem nossos clientes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “Organizaram todo o cabeamento e estrutura de rede da empresa. Agora temos mais velocidade e controle.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Leandro, Coordenador de TI</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “Excelente serviço! Trouxeram soluções modernas que facilitaram muito nosso trabalho.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Priscila, Gerente Operacional</span>
              </blockquote>
            </div>
          </div>

          {/* Selo visual */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/favicon.png"
              alt="Selo de segurança"
              className="w-20 h-auto"
            />
          </div>

          {/* Formulário */}
          <FormOrcamento assunto="Infraestrutura de TI" />
        </div>
      </section>

      <Footer />
    </>
  );
}
