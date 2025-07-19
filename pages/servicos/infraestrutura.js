import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PhoneCall, HardDrive, Wrench, Settings2 } from "lucide-react";

export default function Infraestrutura() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Infraestrutura de TI com Alta Performance e Organização Profissional
          </h1>

          {/* Imagem */}
          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/infraestrutura.png"
              alt="Ambiente de infraestrutura de TI"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Descrição geral */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Oferecemos soluções completas de infraestrutura de TI, com cabeamento estruturado, organização de racks, controle de acesso e suporte técnico especializado.
            </p>
            <p>
              Ideal para empresas que desejam desempenho, segurança e organização no ambiente tecnológico. Entregamos ambientes prontos para crescimento escalável e sem dores de cabeça.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <HardDrive className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Ambiente Organizado</h3>
              <p className="text-sm text-gray-700">Racks bem estruturados e padronizados, facilitando manutenção e controle.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Wrench className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Instalação Profissional</h3>
              <p className="text-sm text-gray-700">Equipe experiente, com ferramentas e técnicas adequadas para cada tipo de ambiente.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Settings2 className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Infraestrutura Pronta para Crescer</h3>
              <p className="text-sm text-gray-700">Projetos pensados para expansão, evitando retrabalho e gargalos no futuro.</p>
            </div>
          </div>

          {/* Prova social */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Clientes satisfeitos</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “A organização e o desempenho da nossa infraestrutura melhoraram 100% depois que a Protect entrou. Trabalho impecável!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Marcos, Diretor de TI</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “Serviço excelente, equipe muito técnica e cuidadosa. O rack ficou lindo e funcional!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Juliana, Administradora</span>
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
              href="https://wa.me/558287709274?text=Olá! Tenho interesse no serviço de Infraestrutura de TI da Protect Tecnologia. Pode me enviar mais informações?"
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
