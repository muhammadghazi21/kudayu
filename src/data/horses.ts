// Data kuda-kuda pacu Indonesia (berdasarkan data sarga.co)
export interface Horse {
  name: string;
  slug: string;
  image: string;
  imageReal?: string;
  breed: string;
  age: number;
  wins: number;
  province: string;
  stable: string;
  specialty: string;
  description: string;
  featured?: boolean;
  stats: {
    speed: number;
    stamina: number;
    power: number;
  };
  achievements: string[];
  gallery?: string[];
}

export const horses: Horse[] = [
  {
    name: "Triple's",
    slug: "triples",
    image: "/kuda-1.png",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred INA",
    age: 5,
    wins: 18,
    province: "Jawa Tengah",
    stable: "Stable Nagari JATENG",
    specialty: "Jarak Jauh (2000m)",
    description: "Juara Kelas Terbuka 2000m di Piala Raja Hamengku Buwono X 2025 dan meraih trofi kehormatan langsung dari Sultan. Kuda andalan Jawa Tengah dengan stamina luar biasa di lintasan panjang.",
    featured: true,
    stats: { speed: 88, stamina: 97, power: 90 },
    achievements: [
      "Juara Kelas Terbuka 2000M – Piala Raja HB X 2025",
      "Juara Kelas 3 Tahun Derby – Kejurnas PORDASI Seri II",
      "Kuda Terbaik Jawa Tengah 2025"
    ],
    gallery: ["/kuda-1.png", "/kuda-2.png"]
  },
  {
    name: "War Kudeta",
    slug: "war-kudeta",
    image: "/kuda-2.png",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred",
    age: 4,
    wins: 15,
    province: "Jawa Barat",
    stable: "Stable Khalim JABAR",
    specialty: "Sprint Terbuka (1300m)",
    description: "Spesialis sprint terbuka dari Jawa Barat. Dua kali juara Kelas Terbuka Sprint berturut-turut di Piala Raja HB X 2025 dan Kejurnas PORDASI Seri II 2025.",
    featured: true,
    stats: { speed: 97, stamina: 83, power: 91 },
    achievements: [
      "Juara Kelas Terbuka Sprint – Piala Raja HB X 2025",
      "Juara Kelas Terbuka Sprint – Kejurnas PORDASI Seri II 2025",
      "Sprint Champion Jawa Barat"
    ],
    gallery: []
  },
  {
    name: "Kasmaran",
    slug: "kasmaran",
    image: "/kuda-3.jpg",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Sandel",
    age: 6,
    wins: 20,
    province: "DKI Jakarta",
    stable: "Stable Pacu Jakarta",
    specialty: "Kelas F (1600m)",
    description: "Kuda kawakan dari Jakarta dengan konsistensi luar biasa. Langganan Kelas F di setiap kejuaraan nasional dan tak pernah absen dari podium.",
    featured: true,
    stats: { speed: 83, stamina: 92, power: 85 },
    achievements: [
      "Juara Kelas F – Piala Raja HB X 2025",
      "Juara Kelas F – Kejurnas PORDASI Seri II 2025",
      "Juara Kelas F – Jateng Derby 2026"
    ],
    gallery: []
  },
  {
    name: "Dragon",
    slug: "dragon",
    image: "/kuda-4.jpg",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred",
    age: 4,
    wins: 12,
    province: "Jawa Timur",
    stable: "Stable Dragon JATIM",
    specialty: "Sprint & Kelas C",
    description: "Kuda eksplosif dari Jawa Timur, jagoan di kelas sprint dan kelas C. Gaya larinya yang agresif dan start cepat menjadi daya tarik tersendiri bagi penonton.",
    featured: false,
    stats: { speed: 94, stamina: 85, power: 92 },
    achievements: [
      "Juara Kelas C Sprint – Piala Raja HB X 2025",
      "Juara Kelas C – Jateng Derby 2026",
      "Top Sprint Jawa Timur 2025"
    ],
    gallery: []
  },
  {
    name: "Kana Eclipse",
    slug: "kana-eclipse",
    image: "/kuda-5.jpg",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred",
    age: 3,
    wins: 8,
    province: "Jawa Tengah",
    stable: "Stable Eclipse JATENG",
    specialty: "Kelas 3 Tahun Remaja",
    description: "Bintang muda Jawa Tengah, juara Kelas 3 Tahun Remaja Divisi I dua kali beruntun. Lahir dari stable Eclipse, masa depan cerah menanti kuda berbakat ini.",
    featured: false,
    stats: { speed: 89, stamina: 88, power: 86 },
    achievements: [
      "Juara Kelas 3 Tahun Remaja Div.I – Piala Raja HB X 2025",
      "Juara Kelas 3 Tahun Remaja Div.I – Jateng Derby 2026",
      "Rising Star Jawa Tengah 2025"
    ],
    gallery: []
  },
  {
    name: "Arceus Nagari",
    slug: "arceus-nagari",
    image: "/kuda-6.jpg",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred",
    age: 4,
    wins: 11,
    province: "DKI Jakarta",
    stable: "Stable Nagari Jakarta",
    specialty: "Kelas D (1400m)",
    description: "Kuda kelas D unggulan dari Jakarta. Konsisten di berbagai event nasional dengan gaya finishing yang kuat di lintasan 1400 meter.",
    featured: false,
    stats: { speed: 86, stamina: 89, power: 88 },
    achievements: [
      "Juara Kelas D – Piala Raja HB X 2025",
      "Juara Kelas D – Kejurnas PORDASI Seri II 2025",
      "Top Performer Jakarta 2025"
    ],
    gallery: []
  },
  {
    name: "Sunglow Nagari",
    slug: "sunglow-nagari",
    image: "/kuda-1.png",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred LN",
    age: 5,
    wins: 13,
    province: "Kalimantan Timur",
    stable: "Stable Nagari KALTIM",
    specialty: "Thoroughbred INA Jarak Jauh",
    description: "Andalan Kalimantan Timur di kelas Thoroughbred INA. Stamina panjang dan temperamen stabil di lintasan jarak jauh menjadi keunggulan utamanya.",
    featured: false,
    stats: { speed: 85, stamina: 93, power: 84 },
    achievements: [
      "Juara Kelas THB INA – Piala Raja HB X 2025",
      "Juara Kelas THB INA – Jateng Derby 2026",
      "Best THB Kalimantan Timur"
    ],
    gallery: []
  },
  {
    name: "Naga Sembilan",
    slug: "naga-sembilan",
    image: "/kuda-2.png",
    imageReal: "/kuda-asli-2.jpg",
    breed: "Thoroughbred INA",
    age: 6,
    wins: 16,
    province: "DKI Jakarta",
    stable: "Stable Naga Jakarta",
    specialty: "Jarak Jauh (2000m)",
    description: "Legenda lintasan panjang dari Jakarta. Kelas Terbuka 2000m adalah rumahnya — tidak ada rival yang mampu menandingi ketahanan dan pace konsistennya.",
    featured: false,
    stats: { speed: 87, stamina: 96, power: 89 },
    achievements: [
      "Juara Kelas Terbuka 2000M – Jateng Derby 2026",
      "Long Distance Champion Jakarta",
      "Best Overall – IHR Season 2025"
    ],
    gallery: []
  }
];

// Helper function untuk get horse by slug
export function getHorseBySlug(slug: string): Horse | undefined {
  return horses.find(horse => horse.slug === slug);
}

// Get featured horses
export function getFeaturedHorses(): Horse[] {
  return horses.filter(horse => horse.featured);
}

// Get recent winners
export function getTopWinners(limit: number = 5): Horse[] {
  return [...horses]
    .sort((a, b) => b.wins - a.wins)
    .slice(0, limit);
}
