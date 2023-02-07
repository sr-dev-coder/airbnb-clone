import Image from 'next/image'
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';

export const Header = () => {
  return (
    <header 
        className="sticky top-0 z-50 md:grid md:grid-cols-3 bg-white px-6 pt-3.5 md:px-20 md:py-3 border-b border-slate-100"
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
    <div className="flex items-center shadow-lg md:shadow-none border md:border-2 md:w-96 rounded-full"> 
        <input className="pl-5 h-14 md:h-10 bg-transparent outline-none flex-grow " type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="h-10 md:h-8 mr-2 md:mr-1 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
    </div>

    {/* Right Options */}
    <div className="flex items-center justify-end">
        <a href="#" className="mr-4">Airbnb your home</a>
        <div className="flex items-center border rounded-full cursor-pointer px-2 py-1">
            <Bars3Icon className="h-6 mr-2 text-slate-500" />
            <UserCircleIcon className="h-8 text-slate-500" />
        </div>
    </div>

  </header>)
}