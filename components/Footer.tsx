// components/Footer.tsx
"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Leaf 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand & Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-green-700">
              <Leaf className="h-7 w-7" />
              <span className="text-xl font-bold">AgriConnect</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              Empowering Ugandan farmers with real-time market prices, expert crop & livestock guides, and digital tools.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Made with love in Uganda
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/market-prices", label: "Market Prices" },
                { href: "/crop-management", label: "Crop Management" },
                { href: "/livestock-management", label: "Livestock Management" },
                { href: "/marketplace", label: "Marketplace" },
                { href: "/dashboard", label: "Dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                <a href="tel:+256700123456" className="hover:text-green-700">+256 700 123 456</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-600" />
                <a href="mailto:info@agriconnect.ug" className="hover:text-green-700">info@agriconnect.ug</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span>Kampala, Uganda</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://x.com/agriconnectug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors"
                  aria-label="Follow on X"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com/agriconnectug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors"
                  aria-label="Follow on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/256700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com/@agriconnectug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-green-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} AgriConnect Uganda. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Empowering <strong className="text-green-700">Ugandan farmers</strong> with digital tools
          </p>
        </div>
      </div>
    </footer>
  );
}