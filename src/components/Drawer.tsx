import { Drawer as DrawerMT } from '@/components/material-ui';
import { useUtils } from '@/hooks/utils';
import { NavBar } from './NavBar';

export function Drawer() {
  const { isOpen, onToggle } = useUtils();
  return (
    <DrawerMT open={isOpen} onClose={onToggle} size={1000} className='p-4 bg-[#112126ff] text-white flex flex-col items-center' placement='left' placeholder="">
      <div className="mb-6 flex items-center ml-auto">
        <div onClick={() => onToggle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className='mt-8 h-[50%]'>
        <NavBar drawer={true} />
      </div>
      <div className='w-full mt-auto flex flex-col items-center gap-4'>
        <img className='w-2/4' src="/assets/logo.png" alt="logo" />
        <p className='font-bardon-stamp text-[0.5rem]'>© Todos os direitos reservados</p>
      </div>
    </DrawerMT>
  )
}