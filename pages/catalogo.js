import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import productsData from "../data/products.json";
import { ShoppingCart, Trash2, X } from "lucide-react";

export default function Catalogo() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cart, setCart] = useState([]);
  const [showVideo, setShowVideo] = useState(true);

  const categories = [...new Set(productsData.map((product) => product.category))];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((product) =>
          selectedCategories.includes(product.category)
        )
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

  const handleCartToggle = (product) => {
    const exists = cart.find((item) => item.name === product.name);
    if (exists) {
      setCart(cart.filter((item) => item.name !== product.name));
    } else {
      setCart([...cart, product]);
    }
  };

  const generateWhatsAppLink = () => {
    const message = cart.map((item) => `- ${item.name}`).join("%0A");
    return `https://wa.me/558287709274?text=Ol%C3%A1! Gostaria de um orçamento dos seguintes produtos:%0A${message}`;
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
            <ShoppingCart size={28} className="text-gray-700" /> Catálogo de Produtos
          </h1>
          {isMobile && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-blue-100 text-blue-900 px-4 py-2 rounded shadow text-sm font-medium"
            >
              {showFilters ? "Ocultar filtros" : "Filtrar produtos"}
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {(showFilters || !isMobile) && (
            <aside className="bg-white rounded-lg shadow-md p-4 md:col-span-1 space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">Filtrar por categoria</h2>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-2 border-b pb-1">Segurança</h3>
                {["Câmeras Intelbras", "Gravadores DVR", "Centrais de Alarme Intelbras", "Video porteiros"].map((category) => (
                  <div key={category} className="mb-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="form-checkbox text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-2 border-b pb-1">Redes</h3>
                {["Roteadores Intelbras", "Switches Intelbras", "Cabos de Rede CAT 5 e 6"].map((category) => (
                  <div key={category} className="mb-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="form-checkbox text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-2 border-b pb-1">Casa e Energia</h3>
                {["Casa Inteligente", "Energia Intelbras", "Nobreaks", "Fechaduras Digitais", "Motores para Portão"].map((category) => (
                  <div key={category} className="mb-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="form-checkbox text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-2 border-b pb-1">Acessórios</h3>
                {["Acessórios para CFTV"].map((category) => (
                  <div key={category} className="mb-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="form-checkbox text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  </div>
                ))}
              </div>
            </aside>
          )}

          <section
            id="products-grid"
            className={`${
              showFilters || !isMobile ? "md:col-span-3" : "col-span-full"
            } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
          >
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                Nenhum produto encontrado nessa categoria.
              </p>
            ) : (
              filteredProducts.map((product, index) => {
                const inCart = cart.find((item) => item.name === product.name);
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-full h-48 relative mb-4">
                      <Image
                        src={product.image || "/images/placeholder.jpg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-blue-900 font-semibold text-sm text-center mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-center text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <button
                      onClick={() => handleCartToggle(product)}
                      className={`block w-full text-sm text-center rounded py-2 transition-colors duration-300 ${
                        inCart
                          ? "bg-gray-100 text-gray-700 border border-green-500"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      {inCart ? (
                        <span className="flex justify-center gap-2 items-center">
                          Adicionado <Trash2 size={16} />
                        </span>
                      ) : (
                        "Adicionar ao orçamento"
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </section>
        </div>

        {cart.length > 0 && (
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg z-50"
          >
            Ver Orçamento ({cart.length})
          </a>
        )}
      </main>
    </>
  );
}
