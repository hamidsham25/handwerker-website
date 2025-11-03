export default function Hero() {
  return (
    <section
      id="start"
      className="relative pt-0 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/handwerker-hero-img.png")',
        filter: 'brightness(1.2)',
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Professionelle Handwerkskunst aus Leidenschaft
            </h1>
            <div className="w-24 h-1 bg-orange-500 mb-8"></div>
          </div>

          {/* Right Spacer - Bild wird als Hintergrund angezeigt */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}

