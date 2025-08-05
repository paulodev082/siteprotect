import { useState } from "react";

export default function FormOrcamento() {
  const [formData, setFormData] = useState({
    empresa: "",
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Impedir letras no telefone e aplicar formatação
    if (name === "telefone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, [name]: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { empresa, nome, telefone, email, mensagem } = formData;

    if (telefone.length < 10 || telefone.length > 11) {
      alert("Informe um número de telefone válido com DDD (10 ou 11 dígitos).");
      return;
    }

    const msg = `Olá! Gostaria de um orçamento:\n
*Empresa:* ${empresa}
*Nome:* ${nome}
*Telefone:* ${telefone}
*Email:* ${email}
*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/558287709274?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-blue-50 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">
          Solicite seu orçamento
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="nome"
            placeholder="Nome do responsável"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="tel"
            name="telefone"
            placeholder="(DDD) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            pattern="\d{10,11}"
            title="Informe o número com DDD. Ex: 82999999999"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <textarea
            name="mensagem"
            placeholder="Descreva o que você precisa..."
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition"
          >
            Enviar orçamento via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
