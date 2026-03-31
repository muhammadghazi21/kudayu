# 🚀 Deploy ke GitHub Pages (Gratis)

## Langkah-langkah

### 1. Sesuaikan `astro.config.mjs`

Buka file `astro.config.mjs` dan ganti `YOUR_USERNAME` dengan username GitHub kamu:

```js
site: 'https://YOUR_USERNAME.github.io',
base: '/kudayu',
```

Contoh jika username GitHub kamu `ghazi`:
```js
site: 'https://ghazi.github.io',
base: '/kudayu',
```

### 2. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: Kudayu website"
git remote add origin https://github.com/YOUR_USERNAME/kudayu.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages

1. Buka repo di GitHub → **Settings**
2. Scroll ke bagian **Pages** (sidebar kiri)
3. Di **Source**, pilih **GitHub Actions**
4. Simpan

### 4. Deploy Otomatis ✅

Setiap kali kamu push ke branch `main`, GitHub Actions akan otomatis build dan deploy.
Website akan tersedia di:

```
https://YOUR_USERNAME.github.io/kudayu
```

Build biasanya selesai dalam **1-2 menit**. Pantau progresnya di tab **Actions** di repo GitHub.

---

## Deploy ke Cloudflare Pages (Alternatif)

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pilih **Pages** dari sidebar
3. Klik **Create a project**
4. Pilih **Connect to Git**
5. Authorize GitHub dan pilih repository `kudayu`

### 3. Build Configuration

Gunakan setting berikut:

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: (leave blank)
```

### 4. Environment Variables (Optional)

Jika ada, tambahkan di **Settings > Environment variables**

### 5. Deploy!

Klik **Save and Deploy**. Website akan live dalam 1-2 menit!

## Custom Domain (Optional)

1. Di Cloudflare Pages, pilih project Anda
2. Klik **Custom domains**
3. Tambahkan domain Anda (contoh: kudayu.com)
4. Update DNS records sesuai instruksi

## Auto Deploy

Setiap push ke branch `main` akan otomatis trigger deploy baru! 🎉

## Performance Tips

✅ Sudah dioptimasi:
- Static site generation (SSG)
- Image optimization via Astro
- Code splitting otomatis
- CSS minification
- Cloudflare CDN global

## Monitoring

Check build logs dan analytics di Cloudflare Dashboard.

---

**URL Demo:** https://kudayu.pages.dev
**Build Time:** ~30-60 detik
**Deploy Time:** ~30 detik
