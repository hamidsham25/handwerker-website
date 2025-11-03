'use client';

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wenn Sie ein Projekt im Kopf haben. Holen Sie sich ein Angebot
            </h2>
            <div className="w-24 h-1 bg-orange-500 mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Professionelle Handwerksarbeiten für Ihr Zuhause. Von der
              Planung bis zur Umsetzung – wir verwirklichen Ihre Ideen mit
              handwerklichem Geschick und höchster Qualität.
            </p>
          </div>

          {/* Right Form */}
          <div>
            <form className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Nachricht"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                  >
                    Nachricht senden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

