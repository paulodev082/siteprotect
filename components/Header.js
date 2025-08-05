import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/2-removebg-preview.png"
            alt="Logo Protect Network"
            width={180}
            height={60}
            className="h-[60px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/catalogo" className="hover:underline">Catálogo</Link>

          {/* Dropdown de serviços */}
          <div className="relative group">
            <span className="cursor-pointer hover:underline">Serviços</span>
            <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 rounded-lg py-2 w-56 z-50">
              <Link href="/servicos/monitoramento" className="block px-4 py-2 hover:bg-gray-100">Monitoramento CFTV</Link>
              <Link href="/servicos/alarmes" className="block px-4 py-2 hover:bg-gray-100">Alarmes e Sensores</Link>
              <Link href="/servicos/redes" className="block px-4 py-2 hover:bg-gray-100">Redes Corporativas</Link>
              <Link href="/servicos/infraestrutura" className="block px-4 py-2 hover:bg-gray-100">Infraestrutura de TI</Link>
              <Link href="/servicos/locacao" className="block px-4 py-2 hover:bg-gray-100">Locação para Eventos</Link>
            </div>
          </div>

          <Link
            href="https://wa.me/558287709274"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white transition"
          >
            WhatsApp
          </Link>
        </nav>

        {/* Menu mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800 px-6 pb-6 pt-2 text-sm font-medium space-y-2">
          <Link href="/" onClick={closeMenu} className="block py-2 border-b border-blue-700">Início</Link>
          <Link href="/catalogo" onClick={closeMenu} className="block py-2 border-b border-blue-700">Catálogo</Link>

          <div>
            <span className="block py-2 font-semibold">Serviços</span>
            <Link href="/servicos/monitoramento" onClick={closeMenu} className="block pl-4 py-1 text-gray-100">Monitoramento CFTV</Link>
            <Link href="/servicos/alarmes" onClick={closeMenu} className="block pl-4 py-1 text-gray-100">Alarmes e Sensores</Link>
            <Link href="/servicos/redes" onClick={closeMenu} className="block pl-4 py-1 text-gray-100">Redes Corporativas</Link>
            <Link href="/servicos/infraestrutura" onClick={closeMenu} className="block pl-4 py-1 text-gray-100">Infraestrutura de TI</Link>
            <Link href="/servicos/locacao" onClick={closeMenu} className="block pl-4 py-1 text-gray-100">Locação para Eventos</Link>
          </div>

          <Link
            href="https://wa.me/558287709274"
            onClick={closeMenu}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white transition mt-2"
          >
            Fale no WhatsApp
          </Link>
        </nav>
      )}
    </header>
  );
}
