// components/FormOrcamento.js

export default function FormOrcamento({ assunto }) {
  return (
    <div className="bg-blue-50 p-8 rounded-xl shadow-lg mb-16">
      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Solicite seu orçamento</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const nomeEmpresa = form.nomeEmpresa.value;
          const responsavel = form.responsavel.value;
          const telefone = form.telefone.value;
          const email = form.email.value;
          const mensagem = form.mensagem.value;
          const text = `Olá! Gostaria de um orçamento para ${assunto}.\n\nEmpresa: ${nomeEmpresa}\nResponsável: ${responsavel}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`;
          const url = `https://wa.me/558287709274?text=${encodeURIComponent(text)}`;
          window.open(url, "_blank");
        }}
        className="grid gap-4 md:grid-cols-2"
      >
        <input name="nomeEmpresa" placeholder="Nome da empresa" required className="p-3 rounded border" />
        <input name="responsavel" placeholder="Nome do responsável" required className="p-3 rounded border" />
        <input name="telefone" placeholder="Telefone / WhatsApp" required className="p-3 rounded border" />
        <input name="email" placeholder="Email" type="email" required className="p-3 rounded border" />
        <textarea name="mensagem" placeholder="Descreva o que você precisa..." required rows="4" className="p-3 rounded border md:col-span-2" />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition md:col-span-2"
        >
          Enviar orçamento via WhatsApp
        </button>
      </form>
    </div>
  );
}
