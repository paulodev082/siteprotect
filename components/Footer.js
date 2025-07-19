import Link from "next/link";
import { PhoneCall, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Sobre a empresa */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Protect Tecnologia</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Soluções em segurança eletrônica, redes estruturadas e suporte técnico.
            Protegendo o que é mais importante para você com tecnologia e confiança.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li className="flex items-center gap-2">
              <PhoneCall size={16} /> <span>(82) 9 8770-9274</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>protect-tecnologia@hotmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>Rio Largo - AL</span>
            </li>
          </ul>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><Link href="/" className="hover:underline">Início</Link></li>
            <li><Link href="/catalogo" className="hover:underline">Catálogo</Link></li>
            <li><Link href="/servicos/monitoramento" className="hover:underline">Monitoramento CFTV</Link></li>
            <li><Link href="/servicos/alarmes" className="hover:underline">Alarmes e Sensores</Link></li>
            <li><Link href="/servicos/redes" className="hover:underline">Redes Corporativas</Link></li>
            <li><Link href="/servicos/infraestrutura" className="hover:underline">Infraestrutura de TI</Link></li>
            <li>
              <Link
                href="https://wa.me/558287709274"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                Fale no WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        {/* Selos de certificação */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Certificações</h3>
          <div className="flex flex-wrap gap-4">
            <img
              src="/images/selos/selo-anatel.jpeg"
              alt="Selo ANATEL"
              className="h-10 w-auto bg-white p-1 rounded shadow"
            />
            <img
              src="/images/selos/selo-seguranca.jpg"
              alt="Selo de Segurança"
              className="h-10 w-auto bg-white p-1 rounded shadow"
            />
            <img
              src="/images/selos/Logomarca_Intelbras_verde.png"
              alt="Selo ANATEL"
              className="h-10 w-auto bg-white p-1 rounded shadow"
            />
             <img
              src="/images/selos/Mikrotik.jpg"
              alt="Selo ANATEL"
              className="h-10 w-auto bg-white p-1 rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Direitos e selo */}
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-gray-300">
        <div className="flex justify-center mb-2">
          <ShieldCheck className="text-greenwhatsapp" size={20} />
        </div>
        © {new Date().getFullYear()} Protect Tecnologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
