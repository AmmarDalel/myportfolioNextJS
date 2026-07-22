import React from "react";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";
import { NavElements } from "@/Data/data";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className='px-4 lg:px-8 py-4'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto'>
        <Logo />

        <div className='hidden md:flex items-center space-x-8'>
          {NavElements.map((element) => (
            <Link
              key={element.key}
              href={`/#${element.href}`}
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t(element.key)}
            </Link>
          ))}
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <LanguageSwitcher />
          <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full'>
            <a href='mailto:ammardalel07@gmail.com'>{t("letsTalk")}</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-3 md:hidden'>
          <LanguageSwitcher />
          <Button variant='ghost'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
