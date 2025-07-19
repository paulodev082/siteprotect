// components/Contato.js
export default function Contato() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Fale Conosco</h2>
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
          action="https://formsubmit.co/teuseu@email.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Seu nome" required className="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Seu email" required className="w-full border p-2 rounded" />
          <textarea name="message" placeholder="Sua mensagem" required className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
