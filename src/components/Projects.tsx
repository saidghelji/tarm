import React, { useState, useEffect } from 'react';

const Projects: React.FC = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(null);

  // Add effect to handle body scroll lock
  useEffect(() => {
    if (selectedSpeciality) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSpeciality]);

  const handleModalClose = () => {
    setSelectedSpeciality(null);
    setCurrentSlide(0); // Reset slide index when modal is closed
  };
  
  // Handle opening a speciality modal
  const openSpecialityModal = (speciality: string) => {
    setCurrentSlide(0); // Reset slide index when opening a new modal
    setSelectedSpeciality(speciality);
  };

  // Handle click outside modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  const specialities = [
    {
      id: 1,
      title: "Projets Résidentiels",
      description: "Nous sommes des leaders lorsqu'il s'agit de qualité, de finesse, de flexibilité et de capacité de construction et de rénovation aux secteurs privé et public.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Projets Commerciaux",
      description: "Vous souhaitez aménager ou construire votre local commercial ? Faites confiance à TARM ! Nous prenons tout en charge, de A à Z. Grâce à notre expérience et notre professionnalisme, nous sommes fiers d’être devenus une référence en construction et rénovation commerciale.",
      image: "https://images.pexels.com/photos/22718136/pexels-photo-22718136/free-photo-of-empty-conference-room-with-a-table-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Projets Industriels",
      description: "Depuis sa création, TARM s’est spécialisé dans la construction et la rénovation d’entrepôts industriels ainsi que de structures d’usine, en apportant des solutions robustes et adaptées aux besoins du secteur industriel.",
      image: "https://images.pexels.com/photos/1087083/pexels-photo-1087083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Image slider state for Projets Résidentiels
  const residentialImages = [
    "/media/residential1.jpg",
    "/media/residential2.jpg",
    "/media/residential3.jpg",
    "/media/residential4.jpg",
  ];
  
  // Image slider state for Projets Commerciaux
  const commercialImages = [
    "/media/Downpic.cc-1888363432.jpg", // Replacing 1927483685 with available image
    "/media/Downpic.cc-2176483137.jpg",
    "/media/Downpic.cc-2298021031.jpg",
    "/media/Downpic.cc-2503111867.jpg",
    "/media/Downpic.cc-1593954439.jpg",
  ];
  
  // Image slider state for Projets Industriels
  const industrialImages = [
    "/media/warehouse.jpg",
    "/media/warehouse 2.jpg",
    "/media/warehouse 3.jpg",
  ];
  
  // Shared slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slider navigation functions
  const nextSlide = () => {
    let images;
    if (selectedSpeciality === "Projets Commerciaux") {
      images = commercialImages;
    } else if (selectedSpeciality === "Projets Industriels") {
      images = industrialImages;
    } else {
      images = residentialImages;
    }
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    let images;
    if (selectedSpeciality === "Projets Commerciaux") {
      images = commercialImages;
    } else if (selectedSpeciality === "Projets Industriels") {
      images = industrialImages;
    } else {
      images = residentialImages;
    }
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="specialites" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Nos <span className="text-amber-700">Spécialités</span>
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Découvrez nos domaines d'expertise qui témoignent de notre savoir-faire et de notre engagement envers l'excellence.
          </p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((speciality) => (
            <div key={speciality.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={speciality.image} 
                alt={speciality.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{speciality.title}</h3>
                <p className="text-gray-600 mb-4">{speciality.description}</p>
                <button 
                  className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 hover:scale-105 transition-transform duration-300 block mx-auto"
                  onClick={() => openSpecialityModal(speciality.title)}
                >
                  En Savoir Plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {selectedSpeciality && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOutsideClick}>
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 pt-12 relative overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {/* Close Button with more space */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center z-20"
              onClick={handleModalClose}
              style={{transition: 'color 0.2s'}}
            >
              ×
            </button>
            
            {/* Image Slider - simple arrows, orange color */}
            <div className="flex flex-col items-center w-full mb-8">
              <div className="relative w-full flex justify-center items-center">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center" style={{width: '420px', height: '260px'}}>
                  <img
                    src={
                      selectedSpeciality === "Projets Commerciaux" 
                        ? commercialImages[currentSlide]
                        : selectedSpeciality === "Projets Industriels"
                          ? industrialImages[currentSlide]
                          : residentialImages[currentSlide]
                    }
                    alt={`Projet ${
                      selectedSpeciality === "Projets Commerciaux" 
                        ? "commercial" 
                        : selectedSpeciality === "Projets Industriels"
                          ? "industriel"
                          : "résidentiel"
                    } ${currentSlide + 1}`}
                    className="object-cover rounded-2xl transition-all duration-300 w-full h-full"
                  />
                </div>
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow border border-gray-200 hover:bg-amber-700 hover:text-white text-amber-700 transition-colors"
                  onClick={prevSlide}
                  aria-label="Précédent"
                  type="button"
                  style={{outline: 'none', marginLeft: '-32px'}}
                >
                  <span className="text-2xl font-bold">&#8592;</span>
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow border border-gray-200 hover:bg-amber-700 hover:text-white text-amber-700 transition-colors"
                  onClick={nextSlide}
                  aria-label="Suivant"
                  type="button"
                  style={{outline: 'none', marginRight: '-32px'}}
                >
                  <span className="text-2xl font-bold">&#8594;</span>
                </button>
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 justify-center">
                {(() => {
                  let images;
                  if (selectedSpeciality === "Projets Commerciaux") {
                    images = commercialImages;
                  } else if (selectedSpeciality === "Projets Industriels") {
                    images = industrialImages;
                  } else {
                    images = residentialImages;
                  }
                  return images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`border-2 ${idx === currentSlide ? 'border-amber-700' : 'border-transparent'} rounded-lg p-0.5 transition-all`}
                      style={{outline: 'none'}}
                    >
                      <img
                        src={img}
                        alt={`Miniature ${idx + 1}`}
                        className={`w-16 h-10 object-cover rounded-md ${idx === currentSlide ? 'ring-2 ring-amber-700' : ''}`}
                      />
                    </button>
                  ));
                })()}
              </div>
            </div>
            
            {/* Residential Projects Content */}
            {selectedSpeciality === "Projets Résidentiels" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Nos Principaux Services pour votre Projet Résidentiel</h2>
                
                <p className="mb-6 text-gray-600">
                  Votre maison doit refléter votre style, vos goûts et vos préférences en matière de design. C’est pourquoi, chez TARM, nous concevons des habitations sur mesure, pensées spécifiquement pour chaque client. Le résultat : une maison unique, à votre image, qui deviendra un véritable héritage pour les années à venir.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Plomberie</h3>
                      <p className="text-gray-600">Installation et Réparation des installations de Plomberie Résidentielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Électrique</h3>
                      <p className="text-gray-600">Installation et Réparation des installations Électriques Résidentielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Chauffage Central</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Chauffage Central Résidentielles.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Climatisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Climatisation Résidentielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Drains & Canalisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Canalisations et Systèmes de Drainage Résidentielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Panneau Solaire</h3>
                      <p className="text-gray-600">Installation et Maintenance des Panneaux Solaires pour Projets Résidentielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Construction Piscine</h3>
                      <p className="text-gray-600">Installation et Maintenance de Piscine Hors Terre et Creusée pour Projets Résidentielles.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Commercial Projects Content */}
            {selectedSpeciality === "Projets Commerciaux" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Nos Principaux Services pour votre Projet Commercial</h2>
                
                <p className="mb-6 text-gray-600">
                  TARM s’engage à offrir à votre entreprise des services de construction et de rénovation commerciale de la plus haute qualité, partout au Royaume du Maroc.</p>

                 <p className="mb-6 text-gray-600">
                  Notre équipe diversifiée d’experts, parfaitement formée et certifiée, accompagne des entreprises comme la vôtre dans la conception de bâtiments remarquables, parfaitement adaptés à vos besoins. Forts de plus de 19 ans d’expérience dans le secteur de la construction et de la rénovation commerciale, nous mettons à votre service des idées innovantes et des solutions clés en main pour garantir le succès de votre projet dès le départ. Nous intervenons auprès d’une large gamme d’entreprises, qu’elles soient grandes ou petites.</p>

                  <p className="mb-6 text-gray-600">
                  Voici quelques types de bâtiments que notre équipe est en mesure de construire ou de rénover :</p>

                <div className="p-6 bg-gray-50 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Types de bâtiments que nous construisons et rénovons :</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Cliniques et cabinets médicales</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Concessionnaires automobiles</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Restaurants de toutes Sortes</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Centre Commercial et Boutique</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Centres de remise en forme</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Hôpitaux et Banques</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Écoles et Universités</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Stations-Service</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Lave-Autos</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Bibliothèques</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Centres de Congrès</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Stades</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Nos services pour projets commerciaux :</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Plomberie</h3>
                      <p className="text-gray-600">Installation et Réparation des installations de Plomberie Commerciales.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Électrique</h3>
                      <p className="text-gray-600">Installation et Réparation des installations Électriques Commerciales.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Chauffage Central</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Chauffage Central Commerciaux.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Climatisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Climatisation Commerciaux.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Drains & Canalisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Canalisations et Systèmes de Drainage Commerciaux.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Panneau Solaire</h3>
                      <p className="text-gray-600">Installation et Maintenance des Panneaux Solaires pour Projets Commerciaux.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Construction Piscine</h3>
                      <p className="text-gray-600">Installation et Maintenance de Piscine pour Projets Commerciaux.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Industrial Projects Content */}
            {selectedSpeciality === "Projets Industriels" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Nos Principaux Services pour votre Projet Industriel</h2>
                
                <p className="mb-6 text-gray-600">
                  TARM s'est forgé une solide réputation grâce à son professionnalisme et son expertise en matière de construction et de rénovation de projets industriels.
                </p>
                
                <p className="mb-6 text-gray-600">
                  Depuis notre création, nous avons mené à bien la construction et la rénovation de nombreux entrepôts industriels, structures d'usines et supermarchés. La diversité et l'envergure de ces projets témoignent de notre capacité à répondre aux exigences spécifiques d'un secteur en constante évolution.
                </p>
                
                <p className="mb-6 text-gray-600">
                  Notre équipe possède une vaste expérience dans l'estimation, l'appel d'offres, la gestion de chantier et la réalisation de projets industriels spécialisés, notamment dans les domaines suivants :
                </p>
                
                <div className="p-6 bg-gray-50 rounded-lg mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Supermarchés</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Salles d'exposition et showrooms</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Entrepôts industriels</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 text-xl">✓</span>
                      <p>Usines de fabrication</p>
                    </div>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-600">
                  En tant qu'entreprise spécialisée dans la construction et la rénovation industrielle, TARM est prête à prendre en charge des projets de toute envergure. Nous adaptons chaque intervention aux besoins précis de votre activité afin de créer des bâtiments à la fois fonctionnels, durables et esthétiques.
                </p>
                
                <p className="mb-6 text-gray-600">
                  N'hésitez pas à nous contacter pour discuter de votre projet ou obtenir davantage d'informations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Plomberie</h3>
                      <p className="text-gray-600">Installation et Réparation des installations de Plomberie Industrielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Électrique</h3>
                      <p className="text-gray-600">Installation et Réparation des installations Électriques Industrielles.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Chauffage Central</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Chauffage Central Industriels.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Installation Climatisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Systèmes de Climatisation Industriels.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Drains & Canalisation</h3>
                      <p className="text-gray-600">Installation et Réparation des Canalisations et Systèmes de Drainage Industriels.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Panneau Solaire</h3>
                      <p className="text-gray-600">Installation et Maintenance des Panneaux Solaires pour Projets Industriels.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Construction Piscine</h3>
                      <p className="text-gray-600">Installation et Maintenance de Piscine pour Projets Industriels.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;