import React from 'react';
import { Paintbrush, Building, Home, BellOff as WallOff, Puzzle, CheckCircle } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: "Design d'Intérieur",
    description: "Conception d'espaces fonctionnels et esthétiques qui reflètent votre style et répondent à vos besoins.",
    icon: <Paintbrush size={40} className="text-amber-700" />,
    color: "bg-amber-50",
  },
  {
    id: 2,
    title: "Rénovation Complète",
    description: "Transformation totale de votre espace, de la démolition à la finition, avec une attention particulière aux détails.",
    icon: <Building size={40} className="text-amber-700" />,
    color: "bg-gray-50",
  },
  {
    id: 3,
    title: "Aménagement Résidentiel",
    description: "Solutions personnalisées pour maximiser l'espace et le confort de votre maison ou appartement.",
    icon: <Home size={40} className="text-amber-700" />,
    color: "bg-amber-50",
  },
  {
    id: 4,
    title: "Travaux de Maçonnerie",
    description: "Construction et rénovation de murs, cloisons et autres éléments structurels avec des matériaux de qualité.",
    icon: <WallOff size={40} className="text-amber-700" />,
    color: "bg-gray-50",
  },
  {
    id: 5,
    title: "Aménagement Commercial",
    description: "Création d'espaces commerciaux attractifs qui renforcent votre marque et améliorent l'expérience client.",
    icon: <Puzzle size={40} className="text-amber-700" />,
    color: "bg-amber-50",
  },
  {
    id: 6,
    title: "Finition & Décoration",
    description: "Touches finales qui transforment un simple espace en un environnement élégant et personnalisé.",
    icon: <CheckCircle size={40} className="text-amber-700" />,
    color: "bg-gray-50",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Nos <span className="text-amber-700">Services</span>
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Nous proposons une gamme complète de services d'aménagement et de rénovation pour transformer vos espaces résidentiels et commerciaux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className={`${service.color} p-8 rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 group`}>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="#devis" 
            className="inline-block px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;