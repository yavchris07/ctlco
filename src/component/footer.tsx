import { useTranslation } from "@/lib/translation-context";
import React from "react";

const Footer = () => {
  const { t } = useTranslation();
  return (
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
            <p className="text-gray-400 mb-4">
              Agissant au cœur des communautés défavorisées en République
              Démocratique du Congo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📱
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📸
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                💼
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("projects")}
                </a>
              </li>
              <li>
                <a
                  href="#participate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("participate")}
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("news")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('social')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('newsletter')}</h4>
            <p className="text-gray-400 mb-4">
              Restez informé de nos actions et initiatives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none bg-gray-200"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 CTLCO Foundation. {t("legal")} | {t("privacy")}
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
