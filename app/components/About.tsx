'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('Team');
  const [imageError, setImageError] = useState(false);

  const tabs = [
    { id: 'Team', label: 'Team' },
    { id: 'Technologie', label: 'Technologie' },
    { id: 'Geschichte', label: 'Geschichte' },
  ];

  const tabContent = {
    Team: {
      title: 'Team',
      description:
        'Unser erfahrenes Team besteht aus qualifizierten Handwerkern mit jahrzehntelanger Expertise. Jeder Mitarbeiter bringt spezialisiertes Wissen und Leidenschaft für sein Handwerk mit. Von Meistern bis zu jungen Gesellen – wir kombinieren Tradition mit modernen Techniken für herausragende Ergebnisse.',
      image: '/images/team-image.jpg',
      imageAlt: 'Unser Team',
    },
    Technologie: {
      title: 'Technologie',
      description:
        'Wir setzen auf modernste Technologien und innovative Werkzeuge, um Präzision und Effizienz zu gewährleisten. Von digitaler Planungssoftware bis zu hochmodernen Maschinen – wir verbinden handwerkliches Können mit technischem Fortschritt für optimale Projektergebnisse.',
      image: '/images/technologie-image.jpg',
      imageAlt: 'Unsere Technologie',
    },
    Geschichte: {
      title: 'Geschichte',
      description:
        'Seit über 15 Jahren sind wir erfolgreich im Handwerk tätig. Aus einer kleinen Werkstatt entstanden, haben wir uns zu einem vertrauenswürdigen Partner für Bau- und Renovierungsprojekte entwickelt. Unsere Geschichte zeichnet sich durch Qualität, Zuverlässigkeit und langfristige Kundenbeziehungen aus.',
      image: '/images/geschichte-image.jpg',
      imageAlt: 'Unsere Geschichte',
    },
  };

  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading and Image */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Über Uns
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <div className="relative h-96 w-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl overflow-hidden">
              {!imageError && (
                <img
                  key={activeTab}
                  src={tabContent[activeTab as keyof typeof tabContent].image}
                  alt={tabContent[activeTab as keyof typeof tabContent].imageAlt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onLoad={() => setImageError(false)}
                  onError={() => setImageError(true)}
                />
              )}
              {/* Platzhalter wenn Bild nicht geladen werden kann */}
              {imageError && (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-center text-gray-500">
                    <svg
                      className="mx-auto h-24 w-24 text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="text-sm font-medium">{tabContent[activeTab as keyof typeof tabContent].imageAlt}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Tabbed Content */}
          <div className="order-1 md:order-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setImageError(false);
                  }}
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-gray-900 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

