// components/WhatsAppButton.js
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/558287709274"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
