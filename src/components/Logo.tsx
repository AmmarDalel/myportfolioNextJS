import { abreviation, name } from '@/Data/data'
import { Link } from '@/i18n/navigation'
import React from 'react'

function Logo() {
  return (
     <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{abreviation}</span>
                </div>
                <span className="text-xl font-bold text-orange-500">{name}</span>
              </Link>
  )
}

export default Logo