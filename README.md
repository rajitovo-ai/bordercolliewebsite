# Border Collie Website

Premium, professionele Border Collie website met 3D interactieve modellen (showlijn vs werklijn), wetenschappelijk onderbouwde informatie, en drie design versies.

## Structuur

```
/website/
├── versie1-donker-luxe/      # Donker thema, gouden accenten
├── versie2-licht-natuurlijk/ # Licht, natuurlijke tinten (coming soon)
├── versie3-bold-modern/      # Bold, grote typografie (coming soon)
└── shared/                   # Gedeelde content data & 3D componenten
    ├── content/              # Alle website content als structured data
    └── components/
        ├── 3d/               # Three.js 3D modellen (3 benaderingen)
        └── interactive/      # Quiz, timeline, comparison table
```

## Tech Stack

- Vite + React
- Three.js (@react-three/fiber + @react-three/drei)
- TailwindCSS
- React Router
- Framer Motion
- Lucide Icons

## Development

```bash
cd versie1-donker-luxe
npm install
npm run dev
```

## Content

Alle content is in het Nederlands, gebaseerd op 32 research bestanden met 242 bronnen.

## 3D Modellen

Drie benaderingen van Border Collie 3D modellen:
1. **Realistische 3D** — Gedetailleerd met vacht-textuur
2. **Stylized low-poly** — Met animatie (ademen, kwispelen)
3. **3D met hotspots** — Interactieve info-punten op lichaamsdelen
