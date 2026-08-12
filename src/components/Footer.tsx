import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Footer(){return <footer className="footer"><div className="container footer-grid">
  <div><div className="footer-brand"><img src={logo} alt="Radesha Tours Ella logo" width="38" height="38"/><span><b>Radesha Tours</b><small>TRAVEL & TOURS</small></span></div><p>Private airport transfers, vehicle rentals, safari tours, and custom Sri Lanka travel routes with easy WhatsApp booking.</p><div className="footer-pills"><span><Clock/>Daily support</span><span><Shield/>Private travel</span></div></div>
  <div><h4>Quick Links</h4><Link to="/">Home</Link><Link to="/airport-transfer">Airport Transfer</Link><Link to="/hire-rates">Hire Rates</Link><Link to="/safari">Safari</Link><Link to="/rent-vehicles">Rent Vehicles</Link><Link to="/about">About</Link></div>
  <div><h4>Services</h4><Link to="/airport-transfer/colombo-airport-to-ella">Colombo Airport to Ella</Link><Link to="/car-rental-ella">Car rental in Ella</Link><Link to="/scooter-rental-ella">Scooter rental in Ella</Link><Link to="/safari/yala-national-park">Yala safari tours</Link></div>
  <div><h4>Contact</h4><a href="tel:+94758110086"><Phone/>+94 75 811 0086</a><a href="mailto:info@radeshatours.com"><Mail/>info@radeshatours.com</a><span className="icon-line"><MapPin/>Ella, airport routes, and island-wide tours</span></div>
</div><div className="container copyright"><span>© 2026 Radesha Tours. All rights reserved.</span><span>Website by WebX Tech Solutions.</span></div></footer>}
