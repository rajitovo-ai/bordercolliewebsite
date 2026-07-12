import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../../shared/content/contentData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bc-cream/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bc-forest to-bc-forest-light flex items-center justify-center">
              <span className="text-bc-cream font-bold text-lg">BC</span>
            </div>
            <span className="font-bold text-xl text-gradient-forest hidden sm:block">Border Collie</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.slice(0, 8).map((item) => (
              <Link key={item.path} to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-bc-forest bg-bc-forest/10' : 'text-bc-text-light hover:text-bc-forest hover:bg-bc-forest/5'
                }`}>
                {item.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-bc-text-light hover:text-bc-forest transition-colors">Meer</button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-bc-earth/15 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navigation.slice(8).map((item) => (
                  <Link key={item.path} to={item.path}
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                      location.pathname === item.path ? 'text-bc-forest bg-bc-forest/10' : 'text-bc-text-light hover:text-bc-forest hover:bg-bc-forest/5'
                    }`}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-bc-text p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-bc-cream/98 backdrop-blur-md border-t border-bc-earth/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-bc-forest bg-bc-forest/10' : 'text-bc-text-light hover:text-bc-forest hover:bg-bc-forest/5'
                }`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
