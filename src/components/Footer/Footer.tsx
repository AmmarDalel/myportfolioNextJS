import { lastname, name, quickLinks, socialLinks, year } from "@/Data/data"
import { Heart } from "lucide-react"
import Logo from "../Logo"

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
         <Logo/>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
            <span>© {year} {name}  {lastname} . Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
