// pages/servicos/redes.js
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormOrcamento from "../../components/FormOrcamento";
import { Server, Wifi, ShieldCheck } from "lucide-react";

export default function Redes() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Redes Corporativas com Alta Performance e Segurança
          </h1>

          {/* Imagem */}
          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/redes.jpg"
              alt="Infraestrutura de redes corporativas"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Descrição geral */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Projetamos, instalamos e mantemos redes estruturadas de alta eficiência para empresas de todos os tamanhos. Ideal para escritórios, indústrias e ambientes corporativos exigentes.
            </p>
            <p>
              Com cabeamento certificado, equipamentos de ponta e suporte técnico local, sua rede funciona com máxima estabilidade, segurança e velocidade.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Server className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Infraestrutura Profissional</h3>
              <p className="text-sm text-gray-700">Cabos, switches, racks e certificação completa.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Wifi className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Wi-Fi Corporativo</h3>
              <p className="text-sm text-gray-700">Sinal forte em todos os ambientes com controle de acesso.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Segurança de Dados</h3>
              <p className="text-sm text-gray-700">Firewall, segmentação de rede e proteção contra ameaças.</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Depoimentos de clientes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “Após a instalação da rede estruturada, nossa produtividade aumentou. Equipamento de qualidade!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Daniel, Gerente de TI</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “O suporte da Protect é rápido e eficiente. A rede da nossa empresa nunca esteve tão estável.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Juliana, Diretora Administrativa</span>
              </blockquote>
            </div>
          </div>

          {/* Selo */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/favicon.png"
              alt="Selo de segurança"
              className="w-20 h-auto"
            />
          </div>

          {/* Formulário com botão único */}
          <FormOrcamento assunto="Redes Corporativas" />
        </div>
      </section>

      <Footer />
    </>
  );
}
