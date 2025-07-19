// components/Diferenciais.js
export default function Diferenciais() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Por que escolher a Protect?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Atendimento Rápido</h3>
            <p>Suporte técnico eficiente e ágil para emergências e instalações.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Profissionais Qualificados</h3>
            <p>Equipe técnica treinada e especializada em segurança e infraestrutura.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Soluções Inovadoras</h3>
            <p>Trabalhamos com as melhores tecnologias para sua segurança.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
