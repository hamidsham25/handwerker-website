# Handwerker Website

Eine moderne, professionelle Landingpage für Handwerksbetriebe, erstellt mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 16** - React Framework mit App Router
- **TypeScript** - Typsicherheit
- **Tailwind CSS 4** - Utility-first CSS Framework
- **Deployment** - Optimiert für Vercel

## 📁 Projektstruktur

```
handwerker-website/
├── app/
│   ├── components/           # Alle React-Komponenten
│   │   ├── Navbar.tsx       # Hauptnavigation
│   │   ├── Hero.tsx         # Hero-Bereich mit Call-to-Action
│   │   ├── Services.tsx     # Leistungsübersicht
│   │   ├── About.tsx        # Über uns Sektion
│   │   ├── Stats.tsx        # Statistik-Karten
│   │   ├── Projects.tsx     # Projekt-Galerie
│   │   ├── Testimonials.tsx # Kundenstimmen
│   │   ├── CallToAction.tsx # Call-to-Action-Banner
│   │   └── Footer.tsx       # Footer mit Kontaktdaten
│   ├── layout.tsx           # Root Layout
│   ├── page.tsx             # Startseite (Montage aller Komponenten)
│   └── globals.css          # Globale Styles & Tailwind
├── public/                   # Statische Assets (z.B. Bilder, Logos)
└── package.json
```

## 🎨 Design-Anpassungen

### Farben ändern

Die Hauptfarbe ist **Blau** (`blue-600`). Um die Farbe zu ändern:

1. Öffne `app/components/*.tsx`
2. Ersetze `blue-600`, `blue-700`, `blue-50` etc. durch deine gewünschte Farbe
3. Beispiele:
   - Orange: `orange-600`, `orange-700`
   - Grün: `green-600`, `green-700`
   - Lila: `purple-600`, `purple-700`

### Texte anpassen

1. **Firmenname**: In `app/layout.tsx` (Metadata) und `app/components/Navbar.tsx`
2. **Hero-Headline**: `app/components/Hero.tsx` (Zeile ~10-12)
3. **Leistungen**: `app/components/Services.tsx` (Array ab Zeile 4)
4. **Über uns**: `app/components/About.tsx` (Zeile ~15-30)
5. **Kundentestimonial**: `app/components/Testimonials.tsx` (Array ab Zeile 3)
6. **Kontaktdaten**: `app/components/Footer.tsx` (Zeile ~60-90)

### Bilder hinzufügen

1. Bilder in `public/` speichern
2. In den Komponenten Image-Placeholder ersetzen:
   - `app/components/Hero.tsx` (Zeile ~30-45)
   - `app/components/About.tsx` (Zeile ~10-20)
   - `app/components/Projects.tsx` (Zeile ~40-60)

Beispiel:
```tsx
<Image
  src="/mein-bild.jpg"
  alt="Beschreibung"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Logo hinzufügen

1. Logo-Datei in `public/` speichern (z.B. `logo.svg` oder `logo.png`)
2. In `app/components/Navbar.tsx` (Zeile ~12-15):

```tsx
<Image
  src="/logo.svg"
  alt="Firmenname"
  width={150}
  height={50}
  className="h-12 w-auto"
/>
```

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Build

```bash
npm run build
npm start
```

## 📱 Responsive Design

Die Website ist vollständig responsiv:
- **Mobile**: 1 Spalte
- **Tablet**: 2 Spalten
- **Desktop**: 3 Spalten

Breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

## 🚀 Deployment auf Vercel

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. "New Project" → GitHub Repository auswählen
4. Vercel erkennt Next.js automatisch
5. "Deploy" klicken

Fertig! 🎉

## 📞 Support & Anpassungen

Alle Komponenten sind modular aufgebaut und einfach erweiterbar. Die Struktur basiert auf dem Handyman-Template und kann für verschiedene Handwerksbetriebe (Bodenleger, Fliesenleger, Elektriker, etc.) angepasst werden.

## 📄 License

Dieses Projekt ist für den privaten und kommerziellen Gebrauch frei verwendbar.
