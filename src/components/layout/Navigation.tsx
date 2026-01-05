import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { PopupModal } from "react-calendly";
import logo from "../../assets/aspirentech-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const services = [
    { name: "SEO Services", path: "/services/seo-services" },
    { name: "Personal Branding", path: "/services/personal-branding" },
    { name: "Web and App Development", path: "/services/web-app-development" },
    { name: "Content Marketing", path: "/services/content-marketing" },
    { name: "Performance Marketing", path: "/services/performance-marketing" },
    { name: "Ads to Appointment System", path: "/services/ads-to-appointment" },
    { name: "Social Media Marketing", path: "/services/social-media-marketing" },
    { name: "Business Automation", path: "/services/business-automation" },
  ];

  const products = [
    { name: "botzup", path: "/products/botzup" },
    { name: "Tapion", path: "/products/tapion" },
    { name: "Ecom", path: "/products/ecom" },
    { name: "Ziya.ai", path: "/products/ziya" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-hover"
        : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Aspirentech Business Solutions"
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "text-primary" : ""
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "text-primary" : ""
                }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-hover border p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="p-3 rounded-lg hover:bg-secondary transition-colors duration-200 text-sm font-medium block"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-hover border p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="grid grid-cols-1 gap-4">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="p-4 rounded-lg hover:bg-secondary transition-colors duration-200 block"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              className={`nav-link ${location.pathname === "/blog" ? "text-primary" : ""
                }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "text-primary" : ""
                }`}
            >
              Contact
            </Link>

            {/* CTA Calendly Button */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-hero text-sm px-6 py-2"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-white z-[9999] flex flex-col items-start justify-start pt-20 space-y-6 overflow-y-auto p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-700 text-3xl"
          >
            ✕
          </button>

          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-primary">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-primary">
            About Us
          </Link>

          <div className="space-y-2">
            <div className="text-lg font-semibold">Services</div>
            <div className="flex flex-col pl-4 space-y-1">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base hover:text-primary"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-lg font-semibold">Products</div>
            <div className="flex flex-col pl-4 space-y-1">
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base hover:text-primary"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-primary">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-primary">
            Contact
          </Link>

          <button
            onClick={() => {
              setIsCalendlyOpen(true);
              setIsOpen(false);
            }}
            className="btn-hero px-6 py-3 text-lg"
          >
            Get Started
          </button>
        </div>
      )}

      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </nav>
  );
};

export default Navigation;
