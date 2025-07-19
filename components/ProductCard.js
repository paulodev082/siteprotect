// components/ProductCard.js
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full">
      <div>
        <div className="relative w-full h-40 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h3 className="text-md font-bold text-center text-blue-900">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-700 mt-2 text-center">
            {product.description}
          </p>
        )}
      </div>
      <div className="mt-4">
        <WhatsAppButton productName={product.name} />
      </div>
    </div>
  );
}
