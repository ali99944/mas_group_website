"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Phone, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function ImmersiveNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "about", label: "About", icon: User, href: "/about" },
    { id: "services", label: "Services", icon: Award, href: "/services" },
    { id: "projects", label: "Projects", icon: Briefcase, href: "/projects" },
    { id: "contact", label: "Contact", icon: Phone, href: "/contact" },
  ]



  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50  transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <Image src="/images/mas-logo-smw.jpg" alt="MAS Group" width={40} height={40} className="mr-3" />
              <div>
                <h1 className="font-heading font-bold text-lg text-foreground">MAS GROUP</h1>
                <p className="text-xs text-primary font-medium">DECORATION & MODERN FINISHES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-accent text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center w-full px-4 py-3 text-left font-medium transition-colors duration-200 hover:bg-muted hover:text-accent text-foreground"
                  >
                    <Icon size={20} className="mr-3" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
