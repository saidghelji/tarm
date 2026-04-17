import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/assets/images/4.png" 
                alt="Logo" 
                className="h-20" 
              />
            </div>
            <p className="text-gray-400 mb-6">
              TARM vous accompagne dans l’aménagement et la rénovation de vos espaces de vie et de travail, avec une exigence de qualité et un savoir-faire reconnu au Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577107204029" className="bg-gray-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/tarmmaroc/" className="bg-gray-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Liens Rapides</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-700"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-400 hover:text-amber-500 transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#specialites" className="text-gray-400 hover:text-amber-500 transition-colors">Spécialités</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-amber-500 transition-colors">À Propos</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Nos Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-700"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Design d'Intérieur</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Rénovation Complète</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Aménagement Résidentiel</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Travaux de Maçonnerie</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Aménagement Commercial</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Finition & Décoration</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-700"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et offres spéciales.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-amber-700 p-2 rounded-r hover:bg-amber-800 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              Nous respectons votre vie privée. Vos informations ne seront jamais partagées.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TARM. Tous droits réservés.
            </p>
            <div className="flex items-center">
              <button 
                onClick={scrollToTop}
                className="bg-amber-700 p-2 rounded-full hover:bg-amber-800 transition-colors"
                aria-label="Retour en haut"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;