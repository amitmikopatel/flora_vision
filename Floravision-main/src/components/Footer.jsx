import React from 'react';
import { Leaf, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Care Guide', href: '#care' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-linear-to-b from-[#0a1f0f] to-[#051008] border-t border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Leaf className="w-8 h-8 text-emerald-400 transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full group-hover:bg-emerald-400/40 transition-all duration-300" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">FloraVision.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "From lush indoor green to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">123 Green Street, Plant City, PC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">hello@earthsexhale.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for plant care tips and exclusive offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-emerald-950/30 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 rounded-lg"
              />
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Follow us on social media</p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-emerald-950/30 p-2 rounded-lg border border-emerald-500/30 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-950/50 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-emerald-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
               FloraVision ©  All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
