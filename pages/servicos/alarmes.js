import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PhoneCall, Bell, AlertTriangle, ShieldCheck } from "lucide-react";

export default function Alarmes() {
  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Alarmes e Sensores com Resposta Imediata
          </h1>

          <div className="mb-10 flex justify-center">
            <img
              src="/images/servicos/alarmes.jpg"
              alt="Sistema de alarme residencial"
              className="rounded-xl shadow-2xl w-full max-w-xl h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed mb-14">
            <p>
              Os sistemas de alarme da Protect garantem proteção ativa com sensores de movimento, barreiras infravermelho e notificações em tempo real.
            </p>
            <p>
              Com acionamento automático e suporte técnico completo, sua casa ou empresa fica segura mesmo quando você não está por perto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Bell className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Sensores Inteligentes</h3>
              <p className="text-sm text-gray-700">Detectam qualquer movimentação com alta precisão.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <AlertTriangle className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Alertas Imediatos</h3>
              <p className="text-sm text-gray-700">Disparo sonoro e notificação em tempo real no celular.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-blue-800 text-lg mb-2">Ambientes Protegidos</h3>
              <p className="text-sm text-gray-700">Ideal para residências, comércios e condomínios.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Clientes satisfeitos</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <blockquote className="bg-white p-4 rounded shadow">
                “Instalaram alarme e sensores em toda minha casa. Tudo muito limpo, rápido e eficiente!”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Amanda, Cliente Residencial</span>
              </blockquote>
              <blockquote className="bg-white p-4 rounded shadow">
                “Hoje durmo mais tranquilo. O sistema dispara e me avisa no celular imediatamente.”<br />
                <span className="block mt-2 font-semibold text-blue-700">— Gustavo, Empresário</span>
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
              href="https://wa.me/558287709274?text=Olá! Tenho interesse no serviço de Alarmes e Sensores da Protect Network. Pode me passar mais informações?"
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
