'use client'

import { useState } from 'react'
import MobileMenu from './MobileMenu'

const navigationItems = [
  { label: 'About', href: '#', hasDropdown: true },
  { label: 'News', href: '#' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Our Team', href: '#', hasDropdown: true },
  { label: 'Make Enquiry', href: '#' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className="header-wrapper absolute top-0 left-0 right-0 z-[199] p-5 overflow-hidden transition-all duration-500 border-b border-transparent bg-transparent">
        <header className="header bg-white flex items-center justify-between relative z-[200] border border-white/20 transition-all duration-500" style={{ padding: '1.25vw 2.43056vw' }}>
          <div className="flex items-center justify-between w-full">
            {/* Navigation Links - Desktop Only */}
            <div className="header-links hidden lg:block" style={{ marginLeft: '4.16667vw' }}>
              <nav>
                <ul className="flex items-center">
                  {navigationItems.map((item, index) => (
                    <li
                      key={index}
                      className="inline-block"
                      style={{ marginRight: index < navigationItems.length - 1 ? '1.38889vw' : '0' }}
                    >
                      <a
                        href={item.href}
                        className="text-[#221F20] hover:text-[#cda075] transition-colors duration-200"
                        style={{ fontSize: 'clamp(0.875rem, 0.97222vw, 1.31944vw)', lineHeight: '1.4' }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Layout: Contact Button on Left, Hamburger on Right */}
            <div className="flex items-center justify-between w-full lg:hidden">
              {/* Contact Button - Mobile Left */}
              <div className="header-buttons-mobile">
                <a
                  href="#contact"
                  className="bg-white border border-[#221F20] text-[#221F20] px-4 py-2 rounded-none hover:bg-[#221F20] hover:text-white transition-all duration-300 flex items-center gap-2 text-xs font-medium uppercase tracking-wide"
                >
                  Contact us
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <title>Arrow Right</title>
                    <path
                      d="M19 8L1 8M19 8L12.25 15M19 8L12.25 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Hamburger Menu - Mobile Right */}
              <nav>
                <button
                  onClick={toggleMobileMenu}
                  className="mobile-menu-button p-2 relative w-10 h-10 flex flex-col justify-center items-center bg-[#f9f4ee] rounded-none"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span
                    className={`block w-5 h-0.5 bg-[#221F20] transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#221F20] mt-1.5 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#221F20] mt-1.5 transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></span>
                </button>
              </nav>
            </div>

            {/* Contact Button - Desktop Only */}
            <div className="header-buttons hidden lg:block">
              <ul className="list-none p-0 m-0">
                <li>
                  <a
                    href="#contact"
                    className="bg-white border border-[#221F20] text-[#221F20] px-6 py-3 rounded-none hover:bg-[#221F20] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                  >
                Contact Us
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <title>Arrow Right</title>
                  <path
                    d="M19 8L1 8M19 8L12.25 15M19 8L12.25 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

