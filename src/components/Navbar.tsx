import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { abreviation, name , NavElements} from '@/Data/data'
import Logo from './Logo'
function Navbar() {
  
  return (
       <header className="px-4 lg:px-8 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
         <Logo/>

         <div className="hidden md:flex items-center space-x-8">
          {NavElements.map((e, index) => (
            <Link key={index} href={`#${e.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
              {e}
            </Link>
          ))}
        </div>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full hidden md:inline-flex">
            {"Let's Talk"}
          </button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </header>
  )
}

export default Navbar