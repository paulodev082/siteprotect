import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import productsData from "../data/products.json";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";

export default function Catalogo() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isMobile, setIsMobile] = useState(false);
  const [quantidades, setQuantidades] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const allCategories = [...new Set(productsData.map((p) => p.category))];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let produtosFiltrados = productsData;

    if (selectedCategories.length > 0) {
      produtosFiltrados = produtosFiltrados.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      produtosFiltrados = produtosFiltrados.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      );

      // Limpar categoria para busca funcionar de forma ampla
      setSelectedCategories([]);
    }

    setFilteredProducts(produtosFiltrados);
  }, [selectedCategories, searchTerm]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleButtonClick = (category) => {
    setSelectedCategories([category]);
  };

  const handleQuantidadeChange = (nome, valor) => {
    setQuantidades((prev) => ({
      ...prev,
      [nome]: valor < 1 ? 1 : valor,
    }));
  };

  const adicionarAoCarrinho = (produto) => {
    const quantidade = quantidades[produto.name] || 1;
    const existe = carrinho.find((item) => item.name === produto.name);

    if (!existe) {
      setCarrinho([...carrinho, { name: produto.name, quantidade }]);
    }
  };

  const removerDoCarrinho = (nome) => {
    setCarrinho(carrinho.filter((item) => item.name !== nome));
  };

  const mensagemWhatsApp = carrinho
    .map((item) => `- ${item.name} (quantidade: ${item.quantidade})`)
    .join("%0A");

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 flex items-center gap-2">
            <ShoppingCart size={28} className="text-gray-700" />
            Catálogo de Produtos
          </h1>
        </div>

        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Buscar produto ou categoria..."
          className="w-full border rounded px-4 py-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Botões de categorias (mobile) */}
        {isMobile && (
          <div className="overflow-x-auto whitespace-nowrap mb-6 space-x-2 flex">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border ${
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

        {/* Produtos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const quantidade = quantidades[product.name] || 1;
            return (
              <div
                key={product.name}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between border border-gray-100"
              >
                <div className="w-full h-40 bg-white rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                  <Image
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain max-h-32 transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h3 className="text-blue-800 font-semibold text-base text-center mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-center text-gray-500 mb-3">
                  {product.description}
                </p>

                <div className="flex justify-center items-center gap-2 mb-3">
                  <button
                    onClick={() =>
                      handleQuantidadeChange(product.name, quantidade - 1)
                    }
                    className="px-2 py-1 border rounded"
                  >
                    <Minus size={14} />
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
                    className="w-12 px-2 py-1 border text-center rounded"
                  />
                  <button
                    onClick={() =>
                      handleQuantidadeChange(product.name, quantidade + 1)
                    }
                    className="px-2 py-1 border rounded"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={() => adicionarAoCarrinho(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full text-sm"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            );
          })}
        </section>

        {/* Carrinho flutuante */}
        <div className="fixed bottom-20 right-4 z-50">
          <button
            onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
            className="bg-white border shadow-md rounded-full p-3 flex items-center gap-2"
          >
            <ShoppingCart size={20} className="text-blue-700" />
            <span className="text-sm font-medium">{carrinho.length}</span>
          </button>

          {mostrarCarrinho && carrinho.length > 0 && (
            <div className="bg-white border mt-2 rounded-lg shadow-md p-4 w-72 max-h-96 overflow-y-auto">
              <h3 className="font-semibold text-sm mb-2 text-blue-800">
                Carrinho de Orçamento
              </h3>
              {carrinho.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center mb-2 text-sm"
                >
                  <span>
                    {item.name} ({item.quantidade})
                  </span>
                  <button onClick={() => removerDoCarrinho(item.name)}>
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              ))}
              <a
                href={`https://wa.me/558287709274?text=Olá! Gostaria de fazer um orçamento com os seguintes produtos:%0A${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-full text-sm font-semibold"
              >
                Enviar orçamento no WhatsApp
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
