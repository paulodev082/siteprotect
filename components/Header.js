"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

const servicos = [
  { nome: "Monitoramento CFTV", href: "/servicos/monitoramento" },
  { nome: "Alarmes e Sensores", href: "/servicos/alarmes" },
  { nome: "Redes Corporativas", href: "/servicos/redes" },
  { nome: "Infraestrutura de TI", href: "/servicos/infraestrutura" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Protect Tecnologia"
            width={170}
            height={50}
            className="w-auto h-12 md:h-14"
            priority
          />
        </Link>

        {/* Botão hamburguer */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 items-center text-[16px] font-medium">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-primary font-semibold underline underline-offset-4" : "text-blue-800"
            } hover:text-primary transition`}
          >
            Início
          </Link>

          {/* Dropdown Serviços com hover estável */}
          <div
            className="relative"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <button
              className={`${
                isActive("/servicos")
                  ? "text-primary font-semibold underline underline-offset-4"
                  : "text-blue-800"
              } hover:text-primary transition`}
              aria-haspopup="true"
              aria-expanded={submenuOpen}
            >
              Serviços
            </button>

            <div
              className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 w-56 transition-all duration-200 ease-in-out
                ${submenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
              `}
            >
              <ul className="py-2">
                {servicos.map(({ nome, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/catalogo"
            className={`${
              isActive("/catalogo") ? "text-primary font-semibold underline underline-offset-4" : "text-blue-800"
            } hover:text-primary transition`}
          >
            Catálogo
          </Link>

          <a
            href="https://wa.me/558287709274"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-greenwhatsapp font-semibold hover:underline"
          >
            <PhoneCall size={18} />
            WhatsApp
          </a>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col p-4 space-y-3 text-blue-800 font-medium">
            <Link href="/" onClick={toggleMenu}>
              Início
            </Link>

            {/* Submenu Serviços com visual aprimorado */}
            <div className="w-full">
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="flex justify-between items-center w-full text-left px-2 py-2 rounded hover:bg-gray-100"
              >
                <span className="text-blue-800 font-medium">Serviços</span>
                {mobileSubmenuOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  mobileSubmenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="bg-gray-50 rounded-lg mt-2 p-3 space-y-2 border border-gray-200 shadow-sm">
                  {servicos.map(({ nome, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={toggleMenu}
                        className="block text-blue-700 px-2 py-1 rounded hover:bg-blue-100 hover:text-blue-900 transition"
                      >
                        {nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/catalogo" onClick={toggleMenu}>
              Catálogo
            </Link>

            <a
              href="https://wa.me/558287709274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-greenwhatsapp inline-flex items-center gap-2"
              onClick={toggleMenu}
            >
              <PhoneCall size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
