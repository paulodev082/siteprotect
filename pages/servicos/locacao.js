// pages/servicos/locacao.js
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormOrcamento from "../../components/FormOrcamento";
import { Video, Wifi, Wrench } from "lucide-react";

export default function Locacao() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Locação de Equipamentos e Estrutura para Eventos
          </h1>

          {/* Imagem */}
          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/locacao.jpg"
              alt="Locação para eventos"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Descrição geral */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              A Protect oferece infraestrutura tecnológica completa para eventos de pequeno, médio e grande porte. Garantimos segurança, conectividade e suporte técnico durante toda a operação.
            </p>
            <p>
              Ideal para shows, feiras, congressos, formaturas e eventos corporativos. Cuidamos de tudo: câmeras, Wi-Fi, cabeamento, switches, roteadores e até trailer técnico com vigilância.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Video className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">CFTV Profissional</h3>
              <p className="text-sm text-gray-700">Câmeras com gravação local e visualização ao vivo do evento.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Wifi className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Wi-Fi para Público e Staff</h3>
              <p className="text-sm text-gray-700">Rede dedicada com roteadores e sinal de alta qualidade.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Wrench className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Infraestrutura Completa</h3>
              <p className="text-sm text-gray-700">Trailer técnico, cabeamento, switches e suporte total.</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">O que dizem nossos clientes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “Fechamos o evento com muito mais tranquilidade. A equipe cuidou de tudo com excelência.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Tatiane, Produtora</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “Qualidade de internet e segurança de alto nível. Recomendo a todos os organizadores.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Leonardo, Organizador</span>
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
          <FormOrcamento assunto="Locação para Eventos" />
        </div>
      </section>

      <Footer />
    </>
  );
}
