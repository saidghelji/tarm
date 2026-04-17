import React from 'react';
import { Award, Users, CalendarDays, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            À Propos <span className="text-amber-700">de Nous</span>
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Découvrez notre histoire, notre vision et notre équipe d'experts en aménagement et rénovation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <img 
              src="/assets/images/3.png" 
              alt="Notre équipe" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p>Années d'expérience</p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-serif">Notre Histoire et Notre Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fondée en 2013, TARM est une entreprise marocaine spécialisée dans l’aménagement et la rénovation d’espaces résidentiels et professionnels. Née de l’alliance entre créativité, savoir-faire technique et sens du détail, TARM transforme les intérieurs comme les extérieurs pour les rendre à la fois fonctionnels, esthétiques et durables.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 10 ans, nous accompagnons nos clients à chaque étape de leurs projets : de la conception à la réalisation, avec une approche personnalisée et un engagement constant envers la qualité.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Notre vision est simple : faire de chaque espace un lieu où il fait bon vivre, travailler ou accueillir. Chez TARM, nous croyons qu’un bon agencement peut améliorer le quotidien, renforcer une image de marque ou valoriser un bien immobilier.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Award size={36} className="text-amber-700 mb-2" />
                <span className="text-3xl font-bold">20+</span>
                <span className="text-gray-600 text-center">Projets réalisés avec succès</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Users size={36} className="text-amber-700 mb-2" />
                <span className="text-3xl font-bold">15+</span>
                <span className="text-gray-600 text-center">Professionnels</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <CalendarDays size={36} className="text-amber-700 mb-2" />
                <span className="text-3xl font-bold">10+</span>
                <span className="text-gray-600 text-center">Années d'Expérience</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <MapPin size={36} className="text-amber-700 mb-2" />
                <span className="text-3xl font-bold">5+</span>
                <span className="text-gray-600 text-center">Villes Couvertes</span>
              </div>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-xl font-bold mb-4">Nos Valeurs</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span><strong>Savoir-faire :</strong> Une expertise technique au service de la qualité.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span><strong>Créativité :</strong> Des solutions sur mesure, adaptées à chaque espace.
</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span><strong>Engagement :</strong> Respect des délais, du budget et des attentes.
</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span><strong>Fiabilité :</strong> Un accompagnement clair, transparent et professionnel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span><strong>Durabilité  :</strong> Une attention particulière portée à l’impact environnemental.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;