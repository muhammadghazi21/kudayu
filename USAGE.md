# Panduan Penggunaan Kudayu

## 📁 Struktur Project

```
kudayu/
├── src/
│   ├── components/      # Komponen reusable
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HorseCard.astro
│   │   ├── VideoEmbed.astro
│   │   └── Gallery.astro
│   ├── layouts/         # Layout templates
│   │   └── Layout.astro
│   ├── pages/           # Halaman website (auto-routing)
│   │   ├── index.astro            # Homepage
│   │   ├── horses/
│   │   │   ├── index.astro        # Daftar kuda
│   │   │   └── [slug].astro       # Detail kuda
│   │   ├── races.astro            # Jadwal & hasil
│   │   ├── news.astro             # Berita
│   │   └── gallery.astro          # Galeri
│   ├── data/            # Data files (TypeScript)
│   │   ├── horses.ts    # Database kuda
│   │   ├── races.ts     # Database races
│   │   └── news.ts      # Database berita
│   └── styles/
│       └── global.css   # Global styling
├── public/              # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🔧 Update Data

### Menambah Kuda Baru

Edit `src/data/horses.ts`:

```typescript
{
  name: "Nama Kuda",
  slug: "nama-kuda",  // URL-friendly
  image: "https://...",
  breed: "Thoroughbred",
  age: 4,
  wins: 10,
  description: "Deskripsi singkat...",
  featured: false,  // true untuk featured
  stats: {
    speed: 90,
    stamina: 85,
    power: 88
  },
  achievements: [
    "Juara ...",
    "Winner ..."
  ]
}
```

### Menambah Race

Edit `src/data/races.ts`:

```typescript
{
  id: "unique-race-id",
  name: "Nama Race",
  date: "2026-05-31",  // Format: YYYY-MM-DD
  location: "Lokasi",
  distance: "2400m",
  grade: "G1",  // G1, G2, G3, Listed, Open
  prize: "¥300,000,000",
  status: "upcoming",  // upcoming, ongoing, finished
  participants: ["Kuda 1", "Kuda 2"],
  image: "https://...",
  description: "Deskripsi race..."
}
```

### Menambah Berita

Edit `src/data/news.ts`:

```typescript
{
  id: "unique-id",
  title: "Judul Berita",
  slug: "judul-berita",
  excerpt: "Ringkasan singkat...",
  content: `<p>Konten HTML...</p>`,
  image: "https://...",
  author: "Nama Penulis",
  date: "2026-02-12",
  category: "news",  // news, analysis, interview, event
  tags: ["Tag1", "Tag2"],
  featured: false
}
```

## 🎨 Kustomisasi

### Warna Theme

Edit `src/styles/global.css`:

```css
:root {
  --primary: #D4161C;     /* Warna utama */
  --secondary: #FFD700;   /* Warna sekunder */
  --accent: #FF6B35;      /* Warna aksen */
  /* ... */
}
```

### Logo & Branding

Edit `src/components/Header.astro` dan `Footer.astro` untuk mengubah logo emoji 🐴 dengan logo custom Anda.

## 🖼️ Optimasi Gambar

### Format Terbaik
- Gunakan `.webp` atau `.avif` untuk ukuran kecil
- Compress gambar sebelum upload
- Recommended size: 1920x1080 untuk hero, 800x600 untuk cards

### Rekomendasi Tools
- [Squoosh](https://squoosh.app) - Online image compressor
- [TinyPNG](https://tinypng.com) - PNG/JPEG compression

## 📱 Responsive Design

Semua komponen sudah responsive! Breakpoints:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large: > 1024px

## 🔍 SEO

### Update Meta Tags

Edit setiap page di bagian frontmatter:

```astro
<Layout 
  title="Your Title" 
  description="Your description"
  image="/og-image.jpg"
/>
```

### Sitemap
Auto-generated oleh Astro! Cek di `/sitemap-index.xml` setelah build.

## 🚀 Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:4321)

# Production
npm run build        # Build untuk production
npm run preview      # Preview production build

# Astro commands
npm run astro        # Astro CLI
```

## 🐛 Troubleshooting

### Build Error
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Image Not Loading
- Pastikan URL gambar valid
- Check CORS jika external images
- Gunakan absolute URLs untuk external images

### Styling Issues
- Clear browser cache
- Check browser console untuk errors
- Verify CSS selectors

## 📞 Support

Ada pertanyaan? Cek dokumentasi:
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

---

Happy coding! 🐴✨
