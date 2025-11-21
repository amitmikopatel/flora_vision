import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.totalQuantity);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plants Type", href: "#", dropdown: true },
    { name: "More", href: "/more" },
    { name: "Contact", href: "/contact" },
  ];

  const plantOptions = [
    { name: "Trendy Plants", href: "/trendy" },
    { name: "Top Selling Plants", href: "/topselling" },
    { name: "O2 Plants", href: "/o2plants" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f0f]/95 backdrop-blur-md border-b border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Leaf className="w-8 h-8 text-emerald-400 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full group-hover:bg-emerald-400/40 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">FloraVision.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDesktopDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDesktopDropdownOpen(false)}
              >
                {!link.dropdown && (
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <>
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                      <span>Plants Type</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown */}
                    {desktopDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-44 bg-[#0f2a16] border border-emerald-700/50 rounded-lg shadow-lg z-50">
                        {plantOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.href}
                            className="block px-4 py-2 text-gray-300 hover:bg-emerald-600/20 hover:text-emerald-400 transition-colors duration-300"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItems}
                </span>
              )}
            </button>
            <button className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1f0f] border-t border-emerald-800/30 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.name !== "Plants Type" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-emerald-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <div key="plants" className="text-gray-300">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex justify-between items-center py-2 hover:text-emerald-400"
                  >
                    Plants Type
                    <ChevronDown
                      className={`w-4 h-4 transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-2">
                      {plantOptions.map((opt) => (
                        <Link
                          key={opt.name}
                          to={opt.href}
                          className="block text-gray-300 hover:text-emerald-400 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {opt.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
