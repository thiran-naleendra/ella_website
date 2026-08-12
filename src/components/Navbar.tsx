import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, MessageCircle, Phone } from "lucide-react";
import logo from "../assets/logo.jpg";

const links = [
  ["/", "Home"], ["/airport-transfer", "Airport Transfer"], ["/hire-rates", "Hire Rates"],
  ["/safari", "Safari"], ["/rent-vehicles", "Rent Vehicles"], ["/about", "About"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <header>
    <div className="topbar"><span>✈ Airport transfers, rentals, and safari tours in Sri Lanka</span><div className="topbar-actions"><a href="tel:+94758110086"><Phone size={12}/> +94 75 811 0086</a><a href="https://wa.me/94758110086" target="_blank" rel="noreferrer"><MessageCircle size={12}/> Contact on WhatsApp</a></div></div>
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand"><img src={logo} alt="Radesha Tours"/><span><b>Radesha Tours</b><small>TRAVEL & TOURS</small></span></Link>
        <div className="desktop-nav">{links.map(([path,label])=><Link key={path} to={path} className={pathname===path?"active":""}>{label}</Link>)}</div>
        <div className="nav-actions"><Link to="/rent-vehicles" className="rent-btn"><Car size={15}/> Rent</Link><a className="wa-btn" href="https://wa.me/94758110086" aria-label="Contact Radesha Tours on WhatsApp"><MessageCircle size={15}/> WhatsApp</a></div>
        <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open&&<div className="mobile-nav">{links.map(([path,label])=><Link key={path} to={path} onClick={()=>setOpen(false)}>{label}</Link>)}</div>}
    </nav>
  </header>;
}
