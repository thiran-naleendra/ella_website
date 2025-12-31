import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car } from "lucide-react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/airport-transfer", label: "Airport Transfer" },
    { path: "/hire", label: "Hire Rates" },
    { path: "/safari", label: "Safari" },
    { path: "/rent", label: "Rent Vehicles" },
    { path: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo */}
            <img
              src={logo}
              alt="Radesha Tours Logo"
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            />

            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-gray-900">
                Radesha Tours
              </span>
              <span className="text-xs text-cyan-600 font-semibold">
                Travel & Tours
              </span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-cyan-600 text-white"
                    : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-cyan-600 text-white"
                    : "text-gray-700 hover:bg-cyan-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
