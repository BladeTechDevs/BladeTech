import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageCircle,
  Code,
  Smartphone,
  Settings,
  BarChart3,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Automatización n8n", icon: Settings },
    { name: "Desarrollo Web", icon: Code },
    { name: "Apps Móviles", icon: Smartphone },
    { name: "Análisis de Datos", icon: BarChart3 },
  ];

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <img
                  src="/src/img/logo_b_corregido.svg"
                  className="w-10 h-10"
                  alt=""
                />
              </div>
              <span className="text-xl font-bold">Blade Tech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatizamos procesos y desarrollamos software escalable para
              impulsar tu empresa hacia el futuro digital.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#084182] transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>

              {/* Twitter (X) */}
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.a>

              {/* Instagram - Versión con fondo completo */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FEDA75]  to-[#ef1c7b]"></div>
                <Instagram className="w-5 h-5 text-white relative z-10" />
              </motion.a>

              {/* TikTok - Ícono correcto */}
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Servicios</span>
            <ul className="space-y-2">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Enlaces Rápidos</span>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informacion de contacto*/}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">holabladetech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+52 (777) 4457253</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Morelos, Mexico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Blade Tech. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              {/* Política de Privacidad */}
              {/* pendiente */}
              {/* Desactivar cuando se integre la politica de privacidad */}
            </span>
            <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              {/* Términos de Servicio */}
              {/* pendiente */}
              {/* Desactivar cuando se integre los términos de servicio */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
