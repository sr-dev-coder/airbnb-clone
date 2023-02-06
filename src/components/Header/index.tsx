import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const Header = () => {
  return <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
    
    {/* Logo  */}
    <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
            src="/logo.png"
            fill 
            alt={''}      
            style={{objectFit:"contain", objectPosition: "left"}}
        />    
    </div>

    {/* Search Bar */}
    <div className="flex items-center border rounded-full"> 
        <input className="pl-5 bg-transparent outline-none flex-grow " type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
    </div>

  </header>
}