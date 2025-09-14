"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ImmersiveFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: ["Interior Design", "Custom Millwork", "Luxury Finishes", "Project Management", "Consultation Services"],
    company: ["About Us", "Our Team", "Portfolio"],
    support: ["Contact Us", "Project Inquiry", "FAQ"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-container text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image src="/images/mas-logo-smw.jpg" alt="MAS Group" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900">MAS GROUP</h3>
                  <p className="text-xs text-orange-500 font-medium">DECORATION & MODERN FINISHES</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Transforming spaces into extraordinary experiences through meticulous craftsmanship and innovative
                design solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone size={16} className="mr-3 text-orange-500" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail size={16} className="mr-3 text-orange-500" />
                  <span className="text-gray-700">info@masgroup.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin size={16} className="mr-3 text-orange-500" />
                  <span className="text-gray-700">123 Design Street, Interior City</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-orange-500 mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-orange-500 mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold text-orange-500 mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-500">© {currentYear} MAS Group. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
