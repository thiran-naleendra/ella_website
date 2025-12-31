import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Explore Travel & Tours</h3>
            <p className="text-sm mb-4">
              Your trusted partner for unforgettable travel experiences. We provide top-notch services for all your transportation and adventure needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/airport-transfer" className="hover:text-cyan-400 transition-colors">Airport Transfer</Link></li>
              <li><Link to="/safari" className="hover:text-cyan-400 transition-colors">Safari</Link></li>
              <li><Link to="/rent" className="hover:text-cyan-400 transition-colors">Rent Vehicles</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 transition-colors">Car Rental</li>
              <li className="hover:text-cyan-400 transition-colors">Bike Rental</li>
              <li className="hover:text-cyan-400 transition-colors">Airport Pickup & Drop</li>
              <li className="hover:text-cyan-400 transition-colors">Safari Tours</li>
              <li className="hover:text-cyan-400 transition-colors">Custom Tours</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">+94758110086</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">info@radeshatours.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">123 Tourism Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WebX Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
