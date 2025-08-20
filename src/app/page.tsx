'use client';
import { useState, useEffect } from 'react';

const App = () => {
  const [language, setLanguage] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Translation texts
  const translations = {
    fr: {
      home: 'Accueil',
      projects: 'Projets',
      participate: 'Participez',
      news: 'Actualités',
      contact: 'Contact',
      donate: 'Faire un don',
      volunteer: 'Devenir bénévole',
      joinMission: 'Rejoignez notre mission',
      heroTitle: 'Ensemble, rallumons l\'espoir – construisons un avenir digne pour nos communautés',
      whoWeAre: 'Qui sommes-nous ?',
      weAreText: 'CTLCO Foundation est une organisation congolaise à but non lucratif qui agit au cœur des communautés défavorisées. Depuis Kinshasa, Goma, Kolwezi et Lubumbashi, nous soutenons l\'éducation des enfants, la dignité des femmes, la santé des personnes âgées et le développement durable des familles vulnérables.',
      education: 'Éducation',
      health: 'Santé & Bien-être',
      activities: 'Activités parascolaires',
      community: 'Développement communautaire',
      testimonials: 'Témoignages',
      davidQuote: '"Grâce à la fondation, j\'ai pu retourner à l\'école et rêver à un avenir meilleur."',
      davidName: 'David, 13 ans',
      aishaQuote: '"J\'ai appris à créer un petit commerce qui nourrit ma famille."',
      aishaName: 'Maman Aisha, bénéficiaire',
      howToHelp: 'Comment aider ?',
      donateText: 'Faire un don',
      donateDesc: 'Paiement sécurisé (Mobile Money, PayPal, Carte bancaire)',
      volunteerText: 'Devenir bénévolе',
      volunteerDesc: 'Formulaire rapide',
      supportProject: 'Soutenir un projet',
      supportDesc: 'Choisir un projet précis',
      recentNews: 'Actualités récentes',
      news1: 'Distribution de kits scolaires à Goma – 250 élèves bénéficiaires',
      news2: 'Clubs de lecture lancés à Kolwezi – 3 écoles déjà impliquées',
      news3: 'Campagne de dépistage gratuit à Kinshasa – 120 femmes assistées',
      seeAllNews: 'Voir toutes nos actualités',
      locations: 'Villes d\'implantation',
      quickLinks: 'Liens rapides',
      social: 'Réseaux sociaux',
      newsletter: 'Recevez nos nouvelles et restez connectés à nos actions',
      subscribe: 'S\'abonner',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      impactStudents: 'enfants scolarisés',
      impactWomen: 'femmes accompagnées',
      impactElderly: 'personnes âgées soutenues',
      impactProjects: 'projets communautaires réalisés'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      participate: 'Participate',
      news: 'News',
      contact: 'Contact',
      donate: 'Donate',
      volunteer: 'Volunteer',
      joinMission: 'Join our mission',
      heroTitle: 'Together, reignite hope – build a dignified future for our communities',
      whoWeAre: 'Who we are?',
      weAreText: 'CTLCO Foundation is a Congolese non-profit organization acting at the heart of disadvantaged communities. From Kinshasa, Goma, Kolwezi and Lubumbashi, we support children\'s education, women\'s dignity, elderly health and sustainable development of vulnerable families.',
      education: 'Education',
      health: 'Health & Well-being',
      activities: 'Extracurricular activities',
      community: 'Community development',
      testimonials: 'Testimonials',
      davidQuote: '"Thanks to the foundation, I was able to return to school and dream of a better future."',
      davidName: 'David, 13 years old',
      aishaQuote: '"I learned how to create a small business that feeds my family."',
      aishaName: 'Mother Aisha, beneficiary',
      howToHelp: 'How to help?',
      donateText: 'Donate',
      donateDesc: 'Secure payment (Mobile Money, PayPal, Credit Card)',
      volunteerText: 'Volunteer',
      volunteerDesc: 'Quick form',
      supportProject: 'Support a project',
      supportDesc: 'Choose a specific project',
      recentNews: 'Recent news',
      news1: 'Distribution of school kits in Goma – 250 beneficiary students',
      news2: 'Reading clubs launched in Kolwezi – 3 schools already involved',
      news3: 'Free screening campaign in Kinshasa – 120 women assisted',
      seeAllNews: 'See all our news',
      locations: 'Locations',
      quickLinks: 'Quick links',
      social: 'Social media',
      newsletter: 'Receive our news and stay connected to our actions',
      subscribe: 'Subscribe',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      impactStudents: 'children educated',
      impactWomen: 'women supported',
      impactElderly: 'elderly people supported',
      impactProjects: 'community projects completed'
    }
  };

  const t = translations[language];

  const testimonials = [
    {
      quote: t.davidQuote,
      name: t.davidName,
      image: 'https://placehold.co/300x300/4f46e5/ffffff?text=David'
    },
    {
      quote: t.aishaQuote,
      name: t.aishaName,
      image: 'https://placehold.co/300x300/4f46e5/ffffff?text=Maman+Aisha'
    }
  ];

  const newsItems = [
    {
      title: t.news1,
      image: 'https://placehold.co/400x300/4f46e5/ffffff?text=School+Kits'
    },
    {
      title: t.news2,
      image: 'https://placehold.co/400x300/4f46e5/ffffff?text=Reading+Clubs'
    },
    {
      title: t.news3,
      image: 'https://placehold.co/400x300/4f46e5/ffffff?text=Health+Campaign'
    }
  ];

  const missions = [
    {
      icon: '🎓',
      title: t.education,
      description: 'Bourses, fournitures scolaires, soutien aux enseignants'
    },
    {
      icon: '❤️',
      title: t.health,
      description: 'Soins de base, assistance aux plus fragiles'
    },
    {
      icon: '🎶',
      title: t.activities,
      description: 'Clubs de lecture, sport, musique et arts'
    },
    {
      icon: '🌱',
      title: t.community,
      description: 'Infrastructures, sensibilisation, programmes économiques'
    }
  ];

  const locations = [
    'Kinshasa', 'Goma', 'Kolwezi', 'Lubumbashi'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CTLCO Foundation</h1>
                <p className="text-xs text-gray-600">Non-profit Organization</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">{t.home}</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">{t.projects}</a>
              <a href="#participate" className="text-gray-700 hover:text-purple-600 transition-colors">{t.participate}</a>
              <a href="#news" className="text-gray-700 hover:text-purple-600 transition-colors">{t.news}</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">{t.contact}</a>
            </nav>

            <div className="flex items-center space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
              
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">{t.home}</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-purple-600">{t.projects}</a>
                <a href="#participate" className="block px-3 py-2 text-gray-700 hover:text-purple-600">{t.participate}</a>
                <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-purple-600">{t.news}</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">{t.contact}</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with background image */}
      <section id="home" className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: `url('https://placehold.co/1920x1080/4f46e5/ffffff?text=Hero+Image')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.heroTitle}
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center">
                  <span className="mr-2">🎁</span>
                  {t.donate}
                </button>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  <span className="mr-2">🙌</span>
                  {t.volunteer}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center">
                  <span className="mr-2">❤️</span>
                  {t.joinMission}
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                  <img src="https://placehold.co/300x200/ffffff/4f46e5?text=Child+with+School+Supplies" alt="Child with school supplies" className="rounded-lg w-full" />
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm mt-8">
                  <img src="https://placehold.co/300x200/ffffff/4f46e5?text=Mother+with+Food+Kit" alt="Mother with food kit" className="rounded-lg w-full" />
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm col-span-2">
                  <img src="https://placehold.co/300x200/ffffff/4f46e5?text=Volunteer+in+Action" alt="Volunteer in action" className="rounded-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact numbers */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">500+</div>
                <div className="text-sm md:text-base text-white">{t.impactStudents}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">300+</div>
                <div className="text-sm md:text-base text-white">{t.impactWomen}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">200+</div>
                <div className="text-sm md:text-base text-white">{t.impactElderly}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">10+</div>
                <div className="text-sm md:text-base text-white">{t.impactProjects}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.whoWeAre}</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.weAreText}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="font-semibold text-gray-900">+500</div>
                  <div className="text-gray-600">enfants scolarisés</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">👩‍👧</div>
                  <div className="font-semibold text-gray-900">+300</div>
                  <div className="text-gray-600">femmes accompagnées</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">👴</div>
                  <div className="font-semibold text-gray-900">+200</div>
                  <div className="text-gray-600">personnes âgées soutenues</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">🏫</div>
                  <div className="font-semibold text-gray-900">+10</div>
                  <div className="text-gray-600">projets communautaires</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
                <img src="https://placehold.co/600x400/f8fafc/4f46e5?text=Our+Team+in+Action" alt="Our team in action" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Missions */}
      <section id="projects" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.whoWeAre}</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nos missions principales</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://placehold.co/1920x1080/4f46e5/ffffff?text=Background+Pattern" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials}</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-2 rounded-lg backdrop-blur-sm">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <blockquote className="text-xl md:text-2xl italic mb-6">"{testimonials[currentTestimonial].quote}"</blockquote>
                <div className="font-semibold text-yellow-400">{testimonials[currentTestimonial].name}</div>
              </div>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section id="participate" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.howToHelp}</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.donateText}</h3>
              <p className="text-gray-600 mb-6">{t.donateDesc}</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                {t.donate}
              </button>
            </div>
            
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🙌</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.volunteerText}</h3>
              <p className="text-gray-600 mb-6">{t.volunteerDesc}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {t.volunteer}
              </button>
            </div>
            
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.supportProject}</h3>
              <p className="text-gray-600 mb-6">{t.supportDesc}</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                {t.supportProject}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section id="news" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.recentNews}</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{news.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
              {t.seeAllNews}
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://placehold.co/1920x1080/4f46e5/ffffff?text=Map+Background" alt="Map background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.locations}</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {locations.map((location, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold">{location}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white bg-opacity-20 p-6 rounded-lg">
              <img src="https://placehold.co/800x400/ffffff/4f46e5?text=Interactive+Map+of+DRC" alt="Map of DRC" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">CTLCO Foundation</h3>
                  <p className="text-sm text-gray-400">Non-profit Organization</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Agissant au cœur des communautés défavorisées en République Démocratique du Congo.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📱</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📸</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">💼</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t.home}</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">{t.projects}</a></li>
                <li><a href="#participate" className="text-gray-400 hover:text-white transition-colors">{t.participate}</a></li>
                <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">{t.news}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.social}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.newsletter}</h4>
              <p className="text-gray-400 mb-4">Restez informé de nos actions et initiatives.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                  {t.subscribe}
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 CTLCO Foundation. {t.legal} | {t.privacy}
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed with ❤️ for a better Congo
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
