import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function ButtonWhats() {
  return (
    <Link href={'https://api.whatsapp.com/send?phone=556392437096'} target="_blank" className="flex items-center justify-center p-3 bg-[#25D366] rounded-full fixed right-8 bottom-8 border-4 border-white shadow-2xl hover:scale-110 duration-100 z-50 animate-pulse-border ">
      <FaWhatsapp className="text-white text-5xl" />
    </Link >
  )
}