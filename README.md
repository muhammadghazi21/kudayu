# 🐴 Kudayu - Website Pacuan Kuda Indonesia

Website informasi dan hiburan seputar dunia pacuan kuda, terinspirasi dari hype Umamusume dan komunitas pacuan kuda Jepang.

## 🚀 Tech Stack

- **Framework**: Astro 4.x (Ultra-fast, SEO-friendly)
- **Hosting**: Cloudflare Pages (Gratis, CDN global)
- **Styling**: CSS Modern + Custom Properties
- **Content**: Markdown files
- **Images**: WebP/AVIF optimized via Astro Assets

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## 🌐 Deploy ke Cloudflare Pages

1. Push ke GitHub repository
2. Connect repository di Cloudflare Pages dashboard
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy otomatis setiap kali push!

## 📁 Struktur Folder

```
src/
├── components/     # Komponen reusable
├── layouts/        # Layout templates
├── pages/          # Halaman website
├── data/           # Data kuda, races, news
├── styles/         # Global styles
└── assets/         # Gambar dan media
```

## ✨ Fitur

- ⚡ Super cepat (Lighthouse score 95+)
- 📱 Responsive design
- 🖼️ Optimasi gambar otomatis
- 🔍 SEO-friendly
- 🎨 Design modern dan menarik
- 📰 Sistem berita dinamis
- 🏇 Database kuda lengkap
- 🎥 Embed video races

## 🎯 Pages

- `/` - Homepage dengan hero & featured horses
- `/horses` - Daftar semua kuda
- `/horses/[slug]` - Detail profil kuda
- `/races` - Jadwal & hasil race
- `/news` - Berita terbaru
- `/gallery` - Galeri foto & video

---

Made with ❤️ for Indonesian horse racing fans
