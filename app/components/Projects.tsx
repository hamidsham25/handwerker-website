'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Komplette Hausrenovierung',
      category: 'Renovierung',
      image: '/images/project-1.jpg',
    },
    {
      title: 'Architektur Planung',
      category: 'Planung',
      image: '/images/project-2.jpg',
    },
    {
      title: 'Baustellen Überwachung',
      category: 'Bauaufsicht',
      image: '/images/project-3.jpg',
    },
    {
      title: 'Architektur Planung',
      category: 'Planung',
      image: '/images/project-4.jpg',
    },
    {
      title: 'Komplette Hausrenovierung',
      category: 'Renovierung',
      image: '/images/project-5.jpg',
    },
    {
      title: 'Architektur Planung',
      category: 'Planung',
      image: '/images/project-6.jpg',
    },
  ];

  return (
    <section id="projekte" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Projects
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-0.5 bg-orange-500"></div>
          </div>
        </div>

        {/* Projects Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="relative w-full bg-gradient-to-br from-gray-200 to-gray-300" style={{ paddingBottom: '75%' }}>
                {/* Placeholder/Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-2"
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
                  </div>
                </div>

                {/* Hover Overlay - Dark background with text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <div className="px-4 py-2">
                    <p className="text-white text-sm font-medium">
                      {project.title}
                    </p>
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
