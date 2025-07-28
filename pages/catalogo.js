import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import productsData from "../data/products.json";
import { ShoppingCart, X } from "lucide-react";

export default function Catalogo() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [quantidades, setQuantidades] = useState({});

  const allCategories = [...new Set(productsData.map((p) => p.category))];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((p) => selectedCategories.includes(p.category))
      );
    }
  }, [selectedCategories]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleButtonClick = (category) => {
    setSelectedCategories([category]);
    setShowFilters(false);
  };

  const handleQuantidadeChange = (nome, valor) => {
    setQuantidades((prev) => ({
      ...prev,
      [nome]: valor < 1 ? 1 : valor,
    }));
  };

  return (
    <>
      <Header />

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-[960px] aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full p-1 hover:bg-opacity-90 z-10"
              aria-label="Fechar vídeo"
            >
              <X size={20} />
            </button>
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/AxtOgHTA86g?autoplay=1"
                title="Casa Inteligente Sem Mistério"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 flex items-center gap-2">
            <ShoppingCart size={28} className="text-gray-700" />
            Catálogo de Produtos
          </h1>
        </div>

        {isMobile && (
          <div className="overflow-x-auto whitespace-nowrap mb-6 space-x-2 flex">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-all duration-300 shadow-sm font-medium hover:scale-105 ${
                  selectedCategories.includes(category)
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-700 border-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-4 gap-6">
          {!isMobile && (
            <aside className="bg-white rounded-lg shadow-md p-4 md:col-span-1 space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Filtrar por categoria
              </h2>
              {[
                {
                  label: "Segurança",
                  items: [
                    "Câmeras Intelbras",
                    "Gravadores DVR",
                    "Centrais de Alarme Intelbras",
                    "Video porteiros",
                  ],
                },
                {
                  label: "Redes",
                  items: [
                    "Roteadores Intelbras",
                    "Switches Intelbras",
                    "Cabos de Rede CAT 5 e 6",
                  ],
                },
                {
                  label: "Casa e Energia",
                  items: [
                    "Casa Inteligente",
                    "Energia Intelbras",
                    "Nobreaks",
                    "Fechaduras Digitais",
                    "Motores para Portão",
                  ],
                },
                {
                  label: "Acessórios",
                  items: ["Acessórios para CFTV"],
                },
              ].map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-bold text-gray-700 mb-2 border-b pb-1">
                    {group.label}
                  </h3>
                  {group.items.map((category) => (
                    <div key={category} className="mb-1">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                          className="form-checkbox text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </aside>
          )}

          <section
            className={`${
              !isMobile ? "md:col-span-3" : "col-span-full"
            } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
          >
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                Nenhum produto encontrado nessa categoria.
              </p>
            ) : (
              filteredProducts.map((product, index) => {
                const quantidade = quantidades[product.name] || 1;
                const mensagem = `Olá! Gostaria de fazer um orçamento para o produto: *${product.name}* (quantidade: ${quantidade})`;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden p-4 hover:shadow-xl transition duration-300 flex flex-col justify-between border border-gray-100 hover:scale-[1.01]"
                  >
                    <div className="w-full h-40 bg-white rounded-lg overflow-hidden mb-3 flex items-center justify-center group">
                      <Image
                        src={product.image || "/images/placeholder.jpg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain max-h-32 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-blue-800 font-semibold text-base text-center mb-1 leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-xs text-center text-gray-500 mb-3">
                      {product.description}
                    </p>

                    <div className="flex justify-center items-center gap-2 mb-3">
                      <label className="text-xs font-medium">Qtd:</label>
                      <div className="flex items-center border rounded overflow-hidden">
                        <button
                          onClick={() => handleQuantidadeChange(product.name, quantidade - 1)}
                          className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantidade}
                          onChange={(e) =>
                            handleQuantidadeChange(
                              product.name,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-12 px-2 py-1 text-sm text-center border-l border-r"
                        />
                        <button
                          onClick={() => handleQuantidadeChange(product.name, quantidade + 1)}
                          className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/558287709274?text=${encodeURIComponent(mensagem)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition text-sm shadow"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326a7.6 7.6 0 0 0-11.552 9.133l-1.043 3.804 3.9-1.024a7.6 7.6 0 0 0 8.695-11.913Zm-2.087 9.64c-.314.89-.885.977-1.618.943a5.913 5.913 0 0 1-2.618-.918 10.353 10.353 0 0 1-1.63-1.255 7.3 7.3 0 0 1-1.3-1.786c-.352-.688-.71-1.61.071-2.25.352-.29.63-.654.933-1.004.303-.35.655-.413 1.042-.136.493.356 1.004.7 1.473 1.084.267.218.408.5.192.806a5.67 5.67 0 0 1-.621.702c-.146.15-.17.267-.059.432.366.572.797 1.057 1.38 1.42.162.096.287.098.428-.02.378-.32.757-.64 1.133-.963.188-.163.377-.186.582-.07.513.287 1.005.594 1.5.893.21.128.312.314.21.546Z" />
                      </svg>
                      Pedir no WhatsApp
                    </a>
                  </div>
                );
              })
            )}
          </section>
        </div>
      </main>
    </>
  );
}
