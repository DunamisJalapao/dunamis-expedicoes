import {
  Sheet,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useUtils } from "@/hooks/utils";
import { NavBar } from "./NavBar";

export function Drawer() {
  const { isOpen, onToggle } = useUtils();
  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetContent
        side="left"
        className="w-[1000px] max-w-[90vw] p-4 sm:p-6 md:p-8 bg-[#112126ff] text-white flex flex-col items-center border-0 [&>button]:hidden"
      >
        <div className="mb-6 sm:mb-8 flex items-center ml-auto">
          <SheetClose asChild>
            <div
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 sm:h-8 sm:w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </SheetClose>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 h-[50%] w-full">
          <NavBar drawer={true} />
        </div>
        <div className="w-full mt-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <img
            className="w-1/2 sm:w-2/5 md:w-1/3 max-w-xs"
            src="/assets/logo.webp"
            alt="Dunamis Expedições Logo"
          />
          <p className="font-bardon-stamp text-xs sm:text-sm md:text-base text-center">
            © Todos os direitos reservados
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
