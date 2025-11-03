export default function Projects() {
  const projects = [
    {
      title: 'Komplette Hausrenovierung',
      category: 'Renovierung',
      image: 'Haus-Renovierung',
    },
    {
      title: 'Moderne Küche',
      category: 'Innenausbau',
      image: 'Moderne-Küche',
    },
    {
      title: 'Bad-Sanierung',
      category: 'Sanitär',
      image: 'Bad-Sanierung',
    },
    {
      title: 'Terrasse & Garten',
      category: 'Außenbereich',
      image: 'Terrasse-Garten',
    },
    {
      title: 'Dachsanierung',
      category: 'Bau',
      image: 'Dachsanierung',
    },
    {
      title: 'Büro-Ausbau',
      category: 'Innenausbau',
      image: 'Büro-Ausbau',
    },
  ];

  return (
    <section id="projekte" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eine kleine Auswahl unserer erfolgreich abgeschlossenen
            Handwerksprojekte.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs font-medium">{project.image}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-orange-500 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

