export default function About() {
  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image Placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative h-80 w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-xl flex items-center justify-center">
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
                <p className="text-sm font-medium">Team-Bild</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Über unseren Betrieb
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mit über 15 Jahren Erfahrung im Handwerk sind wir Ihr
              verlässlicher Partner für alle Bau- und Renovierungsarbeiten.
              Unser Team aus erfahrenen Handwerkern steht für Qualität,
              Termintreue und faire Preise.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Von kleinen Reparaturen bis zur kompletten Sanierung – wir
              übernehmen Projekte jeder Größe mit derselben Sorgfalt und
              Professionalität. Kundenzufriedenheit steht für uns an erster
              Stelle.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  15+
                </div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Abgeschlossene Projekte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

