import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function ButtonWhats() {
  return (
    <Link
      href={"https://api.whatsapp.com/send?phone=556392437096"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#25D366] rounded-full fixed right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 border-2 sm:border-4 border-white shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse-border hover:shadow-3xl"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl sm:text-4xl md:text-5xl" />
    </Link>
  );
}
