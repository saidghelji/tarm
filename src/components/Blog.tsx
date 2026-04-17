import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Votre Maison a-t-elle Besoin d'un Coup de Neuf ? Voici les Signes à Ne Pas Ignorer",
    excerpt: "Votre maison vous semble fatiguée ? Certaines zones vous dérangent depuis des mois ? Ces petits détails du quotidien sont souvent le signal d'un besoin de rénovation.",
    image: "/assets/images/article fr 1.jpg",
    date: "15 Mai 2025",
    category: "Rénovation",
    content: `
      <h2>Les 5 signes qui ne trompent pas</h2>
      <p>Votre maison vous semble fatiguée ? Certaines zones vous dérangent depuis des mois ? Ces petits détails du quotidien sont souvent le signal d'un besoin de rénovation. Que ce soit pour améliorer votre confort ou préserver la valeur de votre bien, il est parfois temps de passer à l'action.</p>

      <h3>1. Fissures et peinture écaillée</h3>
      <p>Des murs qui se fissurent ou une peinture qui s'effrite ? Ces signes traduisent souvent un problème d'humidité ou un vieillissement des matériaux. Ignorer cela peut aggraver la situation.</p>

      <h3>2. Humidité ou moisissures</h3>
      <p>Une odeur persistante d'humidité, des taches noires autour des fenêtres ou au plafond ? L'humidité est l'ennemi n°1 de votre confort et de votre santé. Une bonne rénovation peut régler ce problème à la source.</p>
      <h3>3. Isolation thermique défaillante</h3>
      <p>Vous avez toujours trop chaud en été et trop froid en hiver ? Une mauvaise isolation augmente vos factures et nuit à votre qualité de vie. Il est temps de repenser l'isolation de votre logement.</p>

      <h3>4. Un espace mal agencé</h3>
      <p>Des pièces encombrées ou mal éclairées peuvent vite devenir oppressantes. En réorganisant les volumes et en repensant la lumière naturelle, votre intérieur peut paraître deux fois plus grand.</p>

      <h3>5. Envie de changement</h3>
      <p>Parfois, ce n'est pas une question de necessity but d'envie : une nouvelle cuisine, une salle de bain plus moderne, un style plus épuré… Votre maison doit refléter votre mode de vie.</p>

      <h2>Conclusion</h2>
      <p>Ne laissez pas ces signes s'accumuler. Une rénovation bien pensée peut transformer votre quotidien et donner une nouvelle vie à votre bien. Nos experts en aménagement et rénovation sont là pour vous conseiller, étape par étape.</p>

      <p><strong>Besoin d'un diagnostic gratuit ?</strong> Contactez-nous dès maintenant et découvrez ce que votre maison peut devenir.</p>
    `
  },
  {
    id: 2,
    title: "واش دارك ولات قديمة شوية ؟ هادو علامات كيبانو لي خاصك دير ترميم",
    excerpt: "كتدوز كل نهار من قدّام الحيط مشقق ولا الباب مافيهش السوندا؟ راه كاينين إشارات باينين كيقولو ليك: \"يلا، حان الوقت تبدل!\" سواء باش تحس براسك مرتاح فدارك ولا باش تزيد فثمنها، هاد التغييرات قادرة تقلب الموازين.",
    image: "/assets/images/article ar 1.jpg",
    date: "2 Avril 2025",
    category: "تجديد",
    isRTL: true,
    content: `
      <div dir="rtl" style="text-align: right;">
        <h2>المقدمة :</h2>
        <p>كتدوز كل نهار من قدّام الحيط مشقق ولا الباب مافيهش السوندا؟ راه كاينين إشارات باينين كيقولو ليك: "يلا، حان الوقت تبدل!" سواء باش تحس براسك مرتاح فدارك ولا باش تزيد فثمنها، هاد التغييرات قادرة تقلب الموازين.</p>

        <h2>5 علامات كتبين بلي خاصك دير الترميم:</h2>

        <h3>1. الحيطان مشققين والسباغة كتطيح</h3>
        <p>إلا لاحظتي الحيط فيه تصدعات أو السباغة ولاّت كتبرد، راه هادشي ماشي غير منظر. يمكن تكون الرطوبة أو المواد تاهوما تهرسو. خاص تدخل قبل ما يزيدو يتفاقمو الأمور.</p>

        <h3>2. الرطوبة والمويس</h3>
        <p>كتشم ريحة خايبة؟ ولا شفت بقع كحلة فالسقف ولا حدا الشراجم؟ هادي الرطوبة، وهادشي خطر على الصحة وعلى البناية ديالك. الترميم كيساعدك تحيد المشكل من الأصل.</p>

        <h3>3. ما كاين لا عزل لا والو</h3>
        <p>فالصيف كتغلي، فالشتا كتقرقب؟ راه العزل الحراري ضعيف، وكيخلي الفاتورة ديال الضو والماء طالعين. الوقت مناسب باش دير عزل جديد وتعيش مرتاح.</p>

        <h3>4. الدار ما مبرمجة مزيان</h3>
        <p>إلا كنت كتحس بأن الدار مكتخدملكش مزيان، كاينة الحل. غير شوية ديال التنظيم وتغيير الإضاءة الطبيعية يقدرو يبدلو كلشي.</p>

        <h3>5. بغيتي غير تبدّل الجو</h3>
        <p>ممكن تكون غير بغيتي جو جديد: كوزينة موديرن، دوش فخم، ولا صالون بلون عصري... الدار خاصها تعكس الشخصية ديالك.</p>

        <h2>الخاتمة :</h2>
        <p>ما تبقاش غير كتتفرج، دير الخطوة الأولى. ترميم بسيط يقدّر يبدل حياتك فدارك. عندنا فريق ديال المهنيين كيرافقوك من A حتى Z.</p>

        <h2>نداء للعمل :</h2>
        <p>بغيت تشوف شنو تقدر تبدّل؟ تواصل معانا اليوم وخد استشارة مجانية ديال الخبراء ديالنا.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "Votre Local Pro ou Commerce Donne une Mauvaise Première Impression ? Voici Comment Y Remédier Rapidement",
    excerpt: "L'image de votre local pro est cruciale. Un espace mal entretenu peut nuire à votre activité. Découvrez comment l'améliorer rapidement.",
    image: "/assets/images/article fr 2.jpg",
    date: "18 Mars 2025",
    category: "Astuces",
    content: `
      <h2>Introduction :</h2>
      <p>Que vous soyez propriétaire d’un café, d’un restaurant, d’un bureau ou d’un entrepôt, l’image que renvoie votre espace est cruciale. Un lieu mal entretenu ou mal pensé peut faire fuir les clients ou nuire à la productivité de vos équipes. Heureusement, quelques travaux d’aménagement peuvent transformer l’ambiance — et vos résultats.</p>

      <h2>Les points clés à revoir dans votre espace professionnel :</h2>

      <h3>1. La façade et l’entrée</h3>
      <p>C’est la première chose que voit le client. Une devanture vieillotte ou une porte abîmée donne une mauvaise image. Une rénovation simple peut moderniser votre enseigne et la rendre plus accueillante.</p>

      <h3>2. L’éclairage et l’ambiance</h3>
      <p>Un éclairage trop froid ou trop sombre peut changer l’expérience client. Optez pour une ambiance lumineuse et bien pensée, surtout dans les cafés et les restaurants.</p>

      <h3>3. L'agencement intérieur</h3>
      <p>Un mauvais agencement peut ralentir le service ou gêner la circulation. Repenser l’espace, c’est gagner en fluidité, confort… et en chiffre d’affaires.</p>

      <h3>4. L'isolation et le confort</h3>
      <p>Dans les bureaux ou entrepôts, le confort thermique et sonore est indispensable. Un lieu trop chaud, trop froid ou bruyant nuit à la productivité.</p>

      <h3>5. Les petits détails qui font pro</h3>
      <p>Peinture propre, mobilier cohérent, signalétique claire… Ce sont les détails qui rassurent les clients et partenaires.</p>

      <h2>Conclusion :</h2>
      <p>Votre espace professionnel est le reflet de votre sérieux. Investir dans son aménagement, c’est investir dans votre réputation, votre efficacité et vos résultats.</p>

      <h2>Call to Action :</h2>
      <p>Vous pensez que votre commerce mérite mieux ? Contactez-nous pour une étude gratuite et des solutions concrètes adaptées à votre activité.</p>
    `
  },
  {
    id: 4,
    title: "واش الكافي ديالك ولا البيرو ما كيبانش مزيان للزبناء؟ ها كيفاش تبدلو وتحسنو بسرعة!",
    excerpt: "إلا عندك مقهى، مطعم، مكتب ولا مخزن، الشكل ديال البلاصة عندو دور كبير فالتأثير على الزبناء. المكان اللي ما فيهش تنظيم ولا باين قديم، كيخلي الناس يشكّو فالمستوى ديالك. ولكن، غير شوية ديال الترميم و التنظيم يقدّرو يبدلو كلشي!",
    image: "/assets/images/article ar 2.jpg",
    date: "5 Février 2025",
    category: "نصائح",
    isRTL: true,
    content: `
      <div dir="rtl" style="text-align: right;">
        <h2>المقدمة :</h2>
        <p>إلا عندك مقهى، مطعم، مكتب ولا مخزن، الشكل ديال البلاصة عندو دور كبير فالتأثير على الزبناء. المكان اللي ما فيهش تنظيم ولا باين قديم، كيخلي الناس يشكّو فالمستوى ديالك. ولكن، غير شوية ديال الترميم و التنظيم يقدّرو يبدلو كلشي!</p>

        <h2>شنو خاصك تراجع باش تحسن البلاصة ديالك :</h2>

        <h3>1. الواجهة والباب</h3>
        <p>الناس كيشوفو أول حاجة من برا. إلا كانت الواجهة باينة قديمة ولا الباب مكسر، راه كيطيحو الثقة. تجديد بسيط فالوجهة كيعطي بزاف.</p>

        <h3>2. الضو والجو</h3>
        <p>الضو يلعب دور كبير. فالمطاعم والمقاهي، الجو كيصنع التجربة. ضو دافي، إضاءة مدروسة، تعطي الراحة للزبناء.</p>

        <h3>3. التنظيم الداخلي</h3>
        <p>التنظيم كيعني كلشي. كاشير خدام مرتاح، الزبون كيتحرك بسهولة. زيد تهلا فالديكور باش تبان الخدمة برو.</p>

        <h3>4. العزل والراحة</h3>
        <p>فالمكاتب ولا فالمخازن، العزل الحراري والصوتي ضروري. خدمتك كتولي أسرع وفريقك مرتاح.</p>

        <h3>5. التفاصيل لي كتعطي تقة</h3>
        <p>حيط نقية، سباغة زوينة، فرش عصري… هاد الحوايج كتبين بلي انتا مهني وكتفكر فالصورة ديال مشروعك.</p>

        <h2>الخاتمة :</h2>
        <p>أي بزناس خاصو يهلا فالصورة ديال البلاصة. التجديد ماشي مصروف، هو استثمار فالثقة والربح ديالك.</p>

        <h2>نداء للعمل :</h2>
        <p>بغيت تعرف شنو خاصك تبدل؟ عيط لينا اليوم وخد استشارة مجانية ديال الخبراء ديالنا.</p>
      </div>
    `
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  // Add effect to handle body scroll lock
  useEffect(() => {
    if (selectedPost !== null) {
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
  }, [selectedPost]);

  const handleModalClose = () => {
    setSelectedPost(null);
  };

  // Handle opening a blog post modal
  const openBlogModal = (postId: number) => {
    setSelectedPost(postId);
  };

  // Handle clicking outside the modal to close it
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  // Find the selected post
  const getSelectedPost = () => {
    if (selectedPost === null) return null;
    return blogPosts.find(post => post.id === selectedPost);
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Notre <span className="text-amber-700">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Découvrez nos derniers articles, conseils et tendances en matière d'aménagement et de décoration intérieure.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute top-4 ${post.isRTL ? 'right-4' : 'left-4'} bg-amber-700 text-white text-sm px-3 py-1 rounded-full`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                {/* Increased mb from mb-2 to mb-4 */}
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <h3 className={`text-xl font-bold mb-2 ${post.isRTL ? 'text-right' : ''}`} dir={post.isRTL ? 'rtl' : 'ltr'}>
                  {post.title}
                </h3>
                <p className={`text-gray-600 mb-4 ${post.isRTL ? 'text-right' : ''}`} dir={post.isRTL ? 'rtl' : 'ltr'}>
                  {post.excerpt}
                </p>
                <button
                  className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 hover:scale-105 transition-transform duration-300 block mx-auto"
                  onClick={() => openBlogModal(post.id)}
                >
                  {post.isRTL ? 'قراءة المزيد' : 'Lire la suite'}
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Blog Post Modal */}
      {selectedPost !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOutsideClick}>
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 pt-12 relative overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center z-20"
              onClick={handleModalClose}
            >
              ×
            </button>

            {/* Blog Post Content */}
            <div className="flex flex-col items-center w-full">
              {/* Post Header */}
              <div className="w-full mb-6 relative"> {/* Added relative positioning */}
                 {/* Category Span - placed above the title, aligned left */}
                <span className="bg-amber-700 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block"> {/* Added mb-4 and inline-block */}
                  {getSelectedPost()?.category}
                </span>
                {/* Removed the flex container that held category/date */}
                {/* Removed Date Span */}
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-4 ${getSelectedPost()?.isRTL ? 'text-right' : ''}`}
                  dir={getSelectedPost()?.isRTL ? 'rtl' : 'ltr'}
                >
                  {getSelectedPost()?.title}
                </h2>
                <img
                  src={getSelectedPost()?.image}
                  alt={getSelectedPost()?.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              </div>

              {/* Post Content */}
              <div
                className={`prose prose-lg max-w-none w-full ${getSelectedPost()?.isRTL ? 'text-right' : ''}`}
                dir={getSelectedPost()?.isRTL ? 'rtl' : 'ltr'}
                dangerouslySetInnerHTML={{ __html: getSelectedPost()?.content || '' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
