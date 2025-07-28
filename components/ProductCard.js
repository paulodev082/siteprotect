import React, { useState } from "react";

export default function ProductCard({ produto }) {
  const [quantidade, setQuantidade] = useState(1);

  const mensagem = `Olá! Gostaria de fazer um orçamento para o produto: *${produto.name}* (quantidade: ${quantidade})`;

  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition bg-white">
      <img
        src={produto.image}
        alt={produto.name}
        className="w-full h-40 object-contain mb-4 rounded-md"
      />
      <h2 className="text-lg font-semibold text-center">{produto.name}</h2>
      <p className="text-sm text-gray-600 text-center mb-2">{produto.description}</p>

      <div className="flex items-center gap-2 my-2">
        <label htmlFor={`qtd-${produto.name}`}>Qtd:</label>
        <input
          id={`qtd-${produto.name}`}
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className="w-16 px-2 py-1 border rounded text-sm"
        />
      </div>

      <a
        href={`https://wa.me/558287709274?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
      >
        Pedir no WhatsApp
      </a>
    </div>
  );
}
