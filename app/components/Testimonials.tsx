export default function Testimonials() {
  const testimonials = [
    {
      name: 'Thomas Müller',
      source: 'Kunde von Facebook',
      text: 'Ausgezeichnete Arbeit von Anfang bis Ende. Termintreu, sauber und zu fairen Preisen. Unser Badezimmer ist jetzt ein wahres Schmuckstück! Sehr empfehlenswert.',
    },
    {
      name: 'Sarah Weber',
      source: 'Kunde von Google',
      text: 'Die komplette Haussanierung verlief reibungslos. Professionelles Team, gute Beratung und ein Ergebnis, das alle Erwartungen übertroffen hat. Vielen Dank!',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Testimonials
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-0.5 bg-orange-500"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

