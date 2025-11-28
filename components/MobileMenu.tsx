'use client'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  { label: 'About', href: '#', hasDropdown: true },
  { label: 'News', href: '#' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Our Team', href: '#', hasDropdown: true },
  { label: 'Make Enquiry', href: '#' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="mobile-nav-overlay fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`mobile-nav fixed inset-y-0 left-0 z-50 bg-white w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden shadow-2xl`}
      >
        <div className="inner p-8 pt-24 h-full overflow-y-auto">
          <ul className="nav space-y-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-primary text-lg font-medium uppercase tracking-wide hover:text-primary/70 transition-colors block py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

