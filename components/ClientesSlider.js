// components/ClientesSlider.js
export default function ClientesSlider() {
  const clientes = [
    "/images/clientes/cliente1.jpeg",
    "/images/clientes/cliente2.jpeg",
    "/images/clientes/cliente3.png",
    "/images/clientes/cliente4.png",
    "/images/clientes/cliente5.png",
    "/images/clientes/cliente6.png",
    "/images/clientes/cliente7.png",
    "/images/clientes/cliente8.png",
  ];

  // Repete as logos 3x para garantir continuidade sem corte
  const logos = [...clientes, ...clientes, ...clientes];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          Empresas que confiam na Protect
        </h3>

        <div className="slider-container">
          <div className="slider-track">
            {logos.map((src, index) => (
              <div key={index} className="logo-slide">
                <img
                  src={src}
                  alt={`Logo cliente ${index + 1}`}
                  className="h-full w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          overflow: hidden;
          width: 100%;
          height: 80px;
        }

        .slider-track {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }

        .logo-slide {
          flex: 0 0 auto;
          width: 160px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .logo-slide {
            width: 120px;
            padding: 0 10px;
          }

          .slider-track {
            animation: scroll 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
