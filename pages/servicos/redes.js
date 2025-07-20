import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PhoneCall, Server, Network, Settings2 } from "lucide-react";

export default function Redes() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Redes Corporativas com Alta Performance
          </h1>

          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/redes.jpg"
              alt="Cabeamento estruturado e redes"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Projetamos e organizamos redes corporativas seguras, rápidas e bem estruturadas para o funcionamento ideal do seu negócio.
            </p>
            <p>
              Nossa equipe executa cabeamento estruturado, organização de racks, switches gerenciáveis e suporte técnico de ponta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Network className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Conectividade Estável</h3>
              <p className="text-sm text-gray-700">Redes confiáveis com roteadores e switches de alto desempenho.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Server className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Cabeamento Profissional</h3>
              <p className="text-sm text-gray-700">Organização de racks e identificação padrão para manutenção.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Settings2 className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Ambientes Otimizados</h3>
              <p className="text-sm text-gray-700">Projetos pensados para crescimento escalável da empresa.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Feedback dos clientes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “A equipe organizou toda a infraestrutura de rede da loja. Agora tudo funciona rápido e sem queda!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Daniel, Comerciante</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “Atendimento técnico excelente! Tudo muito bem feito, limpo e organizado.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Renata, Gerente de TI</span>
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="/images/favicon.png"
              alt="Selo de segurança"
              className="w-20 h-auto"
            />
          </div>

          <div className="text-center">
            <Link
              href="https://wa.me/558287709274?text=Olá! Tenho interesse no serviço de Redes Corporativas da Protect Network. Pode me passar mais informações?"
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
