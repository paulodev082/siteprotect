import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Empresas que confiam na Protect
        </h3>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {clientes.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-20 px-4">
                <img
                  src={src}
                  alt={`Cliente ${index + 1}`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Setas visíveis só no desktop */}
        <div className="hidden md:flex justify-between mt-4">
          <div className="swiper-button-prev text-blue-600 hover:text-blue-800 cursor-pointer text-2xl" />
          <div className="swiper-button-next text-blue-600 hover:text-blue-800 cursor-pointer text-2xl" />
        </div>
      </div>
    </section>
  );
}
