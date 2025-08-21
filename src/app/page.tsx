"use client";
import Footer from "@/component/footer";
import NavBar from "@/component/nav-bar";
import { useTranslation } from "@/lib/translation-context";
import Image from "next/image";
import { useState, useEffect } from "react";
import bg2 from "../../public/images/2.jpg";
import map from "../../public/images/map.jpg";
import logo from "../../public/ctlco.png";
import fr from "../../public/images/1.jpg";
import r from "../../public/images/b1.jpg";

const App = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("davidQuote"),
      name: t("davidName"),
      image: "https://placehold.co/300x300/4f46e5/ffffff?text=David",
    },
    {
      quote: t("aishaQuote"),
      name: t("aishaName"),
      image: "https://placehold.co/300x300/4f46e5/ffffff?text=Maman+Aisha",
    },
  ];

  const newsItems = [
    {
      title: t("news1"),
      image: bg2,
    },
    {
      title: t("news2"),
      image: "../../public/images/2.jpg",
    },
    {
      title: t("news3"),
      image: "../../public/images/2.jpg",
    },
  ];

  const missions = [
    {
      icon: "🎓",
      title: t("education"),
      description: "Bourses, fournitures scolaires, soutien aux enseignants",
    },
    {
      icon: "❤️",
      title: t("health"),
      description: "Soins de base, assistance aux plus fragiles",
    },
    {
      icon: "🎶",
      title: t("activities"),
      description: "Clubs de lecture, sport, musique et arts",
    },
    {
      icon: "🌱",
      title: t("community"),
      description: "Infrastructures, sensibilisation, programmes économiques",
    },
  ];

  const locations = ["Kinshasa", "Goma", "Kolwezi", "Lubumbashi"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero Section with background image */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-cente"
        // style={{
        //   backgroundImage: "url(/images/1.jpg)",
        // }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <Image src={r} alt="photo-team" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t("heroTitle")}
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center">
                  <span className="mr-2">🎁</span>
                  {t("donate")}
                </button>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  <span className="mr-2">🙌</span>
                  {t("volunteer")}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center">
                  <span className="mr-2">❤️</span>
                  {t("joinMission")}
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                  <Image
                    src={fr}
                    alt="Child with school supplies"
                    className="rounded-lg w-full"
                    //  unoptimized
                  />
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm mt-8">
                  <Image
                    src={fr}
                    alt="Mother with food kit"
                    className="rounded-lg w-full"
                    //  unoptimized
                  />
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm col-span-2">
                  <Image
                    src={bg2}
                    alt="Volunteer in action"
                    className="rounded-lg w-full"
                    // fill
                    //  unoptimized
                  />
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
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  500+
                </div>
                <div className="text-sm md:text-base text-white">
                  {t("impactStudents")}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  300+
                </div>
                <div className="text-sm md:text-base text-white">
                  {t("impactWomen")}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  200+
                </div>
                <div className="text-sm md:text-base text-white">
                  {t("impactElderly")}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  10+
                </div>
                <div className="text-sm md:text-base text-white">
                  {t("impactProjects")}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("whoWeAre")}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("weAreText")}
              </p>
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
                <Image
                  src={logo}
                  alt="Our team in action"
                  className="rounded-lg w-full"
                  // fill
                  //  unoptimized
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("whoWeAre")}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos missions principales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {mission.title}
                </h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={bg2}
            alt="Background"
            className="w-full h-full object-cover"
            // fill
            //  unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("testimonials")}
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-2 rounded-lg backdrop-blur-sm">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  // className="w-full max-w-md mx-auto rounded-lg"
                  width={600}
                  height={200}
                  unoptimized
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-transparent bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <blockquote className="text-xl md:text-2xl italic mb-6 text-white">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </blockquote>
                <div className="font-semibold text-yellow-400">
                  {testimonials[currentTestimonial].name}
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial
                        ? "bg-yellow-400"
                        : "bg-white bg-opacity-50"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("howToHelp")}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t("donateText")}
              </h3>
              <p className="text-gray-600 mb-6">{t("donateDesc")}</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                {t("donate")}
              </button>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🙌</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t("volunteerText")}
              </h3>
              <p className="text-gray-600 mb-6">{t("volunteerDesc")}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {t("volunteer")}
              </button>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t("supportProject")}
              </h3>
              <p className="text-gray-600 mb-6">{t("supportDesc")}</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                {t("supportProject")}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("recentNews")}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={bg2}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    // fill
                    //    unoptimized
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{news.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
              {t("seeAllNews")}
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={bg2}
            alt="Map background"
            className="w-full h-full object-cover"
            // fill
            //  unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("locations")}
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {locations.map((location, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold text-black">{location}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white bg-opacity-20 p-6 rounded-lg">
              <Image
                src={map}
                alt="Map of DRC"
                className="w-full rounded-lg"
                // fill
                //  unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
