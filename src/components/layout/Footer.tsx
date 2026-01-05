import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "../../assets/aspirentech-logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "SEO Service", path: "/services/seo-services" },
    { name: "Content Marketing", path: "/services/content-marketing" },
    { name: "Performance Marketing", path: "/services/performance-marketing" },
    { name: "Personal Branding", path: "/services/personal-branding" },
    { name: "Business automation", path: "/services/business-automation" },
  ];

  const products = [
    { name: "botzup", path: "/products/botzup" },
    { name: "Tapion", path: "/products/tapion" },
    { name: "Ecom", path: "/products/ecom" },
    { name: "Ziya.ai", path: "/products/ziya" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Aspirentech Business Solutions"
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              Leading Maartech Company and SaaS product development
              company, serving 7+ international and 250+ Indian clients since
              2019.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <div className="space-y-3">
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-white/70" />
                <div className="text-white/80">
                  <div className="font-medium">Krishnagiri Office</div>
                  <div className="text-sm">Tamil Nadu, India</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-white/70" />
                <div className="text-white/80">
                  <div className="font-medium">Chennai Office</div>
                  <div className="text-sm">Tamil Nadu, India</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/70" />
                <a
                  href="mailto:info@aspirentech.in"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@aspirentech.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/70" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +91 9750 35 9750
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} Aspirentech Business Solutions. All rights
              reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-white/70 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
