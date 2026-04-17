import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Fatima El Mansouri",
    position: "Propriétaire d'une Villa à Marrakech",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "J'ai fait appel à Aménagement & Rénovation pour la rénovation complète de ma villa à Marrakech. Le résultat est tout simplement magnifique ! L'équipe a su transformer mes idées en réalité, tout en respectant mon budget et les délais. La qualité des finitions est exceptionnelle et le design est exactement ce que je souhaitais. Je recommande vivement leurs services à tous ceux qui cherchent l'excellence.",
    language: "fr"
  },
  {
    id: 2,
    name: "محمد العلوي",
    position: "صاحب مطعم في الدار البيضاء",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "تعاملت مع شركة التصميم والتجديد لتجديد مطعمي بالكامل. كانت النتيجة مذهلة وفاقت توقعاتي. الفريق محترف للغاية ويهتم بأدق التفاصيل. تم تحويل المساحة العادية إلى مكان فريد يجذب العديد من العملاء. أشكرهم على عملهم الممتاز وسأتعامل معهم مرة أخرى في المستقبل.",
    language: "ar"
  },
  {
    id: 3,
    name: "Nadia Benjelloun",
    position: "Directrice d'une Agence de Communication à Rabat",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "Notre bureau avait besoin d'une transformation radicale pour refléter l'image créative de notre agence. Aménagement & Rénovation a relevé ce défi avec brio. L'espace est maintenant fonctionnel, esthétique et inspirant pour toute l'équipe. Leur approche professionnelle et leur attention aux détails ont fait toute la différence. Nous avons reçu de nombreux compliments de nos clients sur notre nouvel espace de travail.",
    language: "fr"
  },
  {
    id: 4,
    name: "عبد الله الناصري",
    position: "مالك شركة عقارية في طنجة",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "لقد تعاونت مع شركة التصميم والتجديد في العديد من المشاريع العقارية. خبرتهم في التصميم وقدرتهم على احترام الميزانية والمواعيد النهائية تجعلهم شريكًا موثوقًا به. فريقهم مبدع ومحترف ويقدم دائمًا حلولًا مبتكرة تتجاوز التوقعات. سأستمر في التعامل معهم في مشاريعي المستقبلية.",
    language: "ar"
  },
  {
    id: 5,
    name: "Leila Tazi",
    position: "Propriétaire d'un Riad à Fès",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "La rénovation de mon riad traditionnel à Fès était un projet complexe qui nécessitait à la fois respect du patrimoine et modernité. Aménagement & Rénovation a parfaitement compris mes attentes et a réalisé un travail exceptionnel. Ils ont su préserver l'authenticité du lieu tout en y apportant le confort moderne. Le résultat est spectaculaire et mes clients sont enchantés. Un grand merci à toute l'équipe !",
    language: "fr"
  },
  {
    id: 6,
    name: "يوسف المرابط",
    position: "صاحب فندق في أكادير",
    image: "/media/testimonials/profile.png",
    rating: 4,
    text: "قامت شركة التصميم والتجديد بتجديد فندقنا بالكامل في أكادير. كان المشروع كبيرًا ومعقدًا، لكن الفريق تعامل معه باحترافية عالية. أحببت كيف قدموا أفكارًا إبداعية تناسب الطابع المحلي مع لمسة عصرية. التكلفة كانت معقولة مقارنة بجودة العمل المقدم. أوصي بهم لأي شخص يبحث عن خدمات تصميم وتجديد عالية الجودة.",
    language: "ar"
  },
  {
    id: 7,
    name: "Sophie Dubois",
    position: "Expatriée Française à Casablanca",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "Récemment installée au Maroc, je cherchais une entreprise fiable pour aménager mon appartement à Casablanca. Aménagement & Rénovation m'a été recommandée par des amis et je ne regrette pas mon choix ! Leur équipe a été à l'écoute de mes besoins et a su créer un espace qui me correspond parfaitement. Le mélange de design contemporain et de touches marocaines est exactement ce que je souhaitais. Merci pour votre professionnalisme !",
    language: "fr"
  },
  {
    id: 8,
    name: "كريم الفاسي",
    position: "صاحب مجمع تجاري في مراكش",
    image: "/media/testimonials/profile.png",
    rating: 5,
    text: "تعاملت مع شركة التصميم والتجديد لتصميم وتنفيذ مجمعي التجاري الجديد في مراكش. كان التحدي كبيرًا نظرًا لحجم المشروع، لكن النتيجة كانت مبهرة. أعجبني التزامهم بالمواعيد النهائية والميزانية المتفق عليها. الجودة والاهتمام بالتفاصيل واضحة في كل جانب من جوانب المشروع. أنصح بشدة بخدماتهم لأي مشروع تجاري.",
    language: "ar"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ce Que Disent <span className="text-amber-700">Nos Clients</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-arabic text-gray-700">
            <span className="text-amber-700">آراء</span> عملائنا
          </h3>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-2">
            Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à notre expertise.
          </p>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg font-arabic mb-8">
            اكتشف شهادات عملائنا الراضين الذين وثقوا في خبرتنا
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${testimonials[currentIndex].language === 'ar' ? 'md:flex-row-reverse text-right' : ''}`}>
              <div className="shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-amber-100 shadow-md"
                />
              </div>
              <div>
                <div className={`flex mb-2 ${testimonials[currentIndex].language === 'ar' ? 'justify-end' : ''}`}>
                  {testimonials[currentIndex].language === 'ar' ? (
                    <>
                      {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-gray-300" />
                      ))}
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                      ))}
                    </>
                  ) : (
                    <>
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                      ))}
                      {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-gray-300" />
                      ))}
                    </>
                  )}
                </div>
                <div className={`relative ${testimonials[currentIndex].language === 'ar' ? 'font-arabic' : ''}`}>
                  <p className={`text-gray-600 mb-6 italic leading-relaxed ${testimonials[currentIndex].language === 'ar' ? 'text-xl' : ''}`}>
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
                <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={24} className="text-amber-700" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={24} className="text-amber-700" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-700" : "bg-gray-300 hover:bg-amber-400"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;