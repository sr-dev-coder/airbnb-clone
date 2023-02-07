import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const Header = () => {
  return (
    <header 
        className="sticky top-0 z-50 md:grid md:grid-cols-3 bg-white shadow-md px-6 pt-3.5"
    >
    
    {/* Logo  */}
    <div className="relative md:flex items-center h-10 cursor-pointer my-auto hidden">
        <Image 
            src="/logo.png"
            fill 
            alt={''}      
            style={{objectFit:"contain", objectPosition: "left"}}
        />    
    </div>

    {/* Search Bar */}
    <div className="flex items-center shadow-lg border rounded-full"> 
        <input className="pl-5 h-14  bg-transparent outline-none flex-grow " type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="h-10 mr-2 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
    </div>

  </header>)
}