// ──────────────────────────────────────────────────────────────────
// Data galeri foto & video
// Edit file ini untuk menambah / mengubah item galeri.
// ──────────────────────────────────────────────────────────────────

export type GalleryItemType = 'image' | 'video';

export interface GalleryItem {
  /** 'image' untuk foto, 'video' untuk video/gif */
  type: GalleryItemType;
  /** Path ke file di /public, atau URL eksternal */
  src: string;
  /** Teks alt untuk aksesibilitas */
  alt: string;
  /** Label pendek yang tampil di overlay */
  label: string;
  /** Thumbnail terpisah (opsional, untuk video/gif) */
  thumbnail?: string;
}

export const galleryItems: GalleryItem[] = [
  // ── Kuda Pacu ───────────────────────────────────────────────────
  {
    type: 'image',
    src: '/kuda-1.png',
    alt: "Triple's — Juara Kelas Terbuka 2000M",
    label: "Triple's",
  },
  {
    type: 'image',
    src: '/kuda-2.png',
    alt: 'War Kudeta — Sprint Champion Jabar',
    label: 'War Kudeta',
  },
  {
    type: 'image',
    src: '/kuda-3.jpg',
    alt: 'Kasmaran — Kelas F Specialist',
    label: 'Kasmaran',
  },
  {
    type: 'image',
    src: '/kuda-4.jpg',
    alt: 'Dragon — Eksplosif Jawa Timur',
    label: 'Dragon',
  },
  {
    type: 'image',
    src: '/kuda-5.jpg',
    alt: 'Kana Eclipse — Rising Star Jateng',
    label: 'Kana Eclipse',
  },
  {
    type: 'image',
    src: '/kuda-6.jpg',
    alt: 'Arceus Nagari — Kelas D Unggulan',
    label: 'Arceus Nagari',
  },
  {
    type: 'image',
    src: '/kuda-asli-2.jpg',
    alt: 'Kuda Pacu — Foto Asli Lintasan',
    label: 'Foto Kuda Asli',
  },

  // ── Stadion & Arena ──────────────────────────────────────────────
  {
    type: 'image',
    src: '/stadion-1.png',
    alt: 'Lapangan Sultan Agung, Yogyakarta',
    label: 'Stadion Yogyakarta',
  },
  {
    type: 'image',
    src: '/stadion-2.png',
    alt: 'Arena Pacuan Jawa Barat',
    label: 'Stadion Jabar',
  },
  {
    type: 'image',
    src: '/stadion-3.png',
    alt: 'Lapangan Kenjeran, Jawa Timur',
    label: 'Stadion Jatim',
  },

  // ── Event Komunitas ──────────────────────────────────────────────
  {
    type: 'video',
    src: '/event-cosplay-race.jpg',
    alt: 'Cosplay Race Event 2026',
    label: 'Cosplay Race',
    thumbnail: '/event-cosplay-race.jpg',
  },
  {
    type: 'image',
    src: '/event-cosplay.jpg',
    alt: 'Cosplay Festival — Jakarta Convention',
    label: 'Cosplay Fest',
  },
  {
    type: 'image',
    src: '/event-dance.jpg',
    alt: 'Uma Dance Battle — Bali',
    label: 'Dance Battle',
  },
  {
    type: 'image',
    src: '/event-fans-gathering.jpg',
    alt: 'Fans Gathering — Surabaya',
    label: 'Fans Gathering',
  },

  // ── Komunitas ────────────────────────────────────────────────────
  {
    type: 'image',
    src: '/cs-1.jpg',
    alt: 'Komunitas Kudayu',
    label: 'Komunitas',
  },
  {
    type: 'image',
    src: '/Haru_Urara_29.jpg',
    alt: 'Haru Urara — Ikon Pacuan Kuda',
    label: 'Haru Urara',
  },
  {
    type: 'video',
    src: '/haru-urara-uraraharu.gif',
    alt: 'Haru Urara — Animasi Berlari',
    label: 'Haru Urara GIF',
    thumbnail: '/haru-urara-uraraharu.gif',
  },
  {
    type: 'image',
    src: '/kuda-1.png',
    alt: "Triple's — Trofi Kehormatan Sultan",
    label: "Triple's II",
  },
];
