// Data berita dan artikel pacuan kuda Indonesia (berdasarkan data sarga.co)
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: 'news' | 'analysis' | 'interview' | 'event';
  tags: string[];
  featured?: boolean;
}

export const news: NewsArticle[] = [
  {
    id: "triples-juara-piala-raja-hb-x",
    title: "Triple's Raih Trofi Kehormatan Sultan Hamengkubuwono X",
    slug: "triples-juara-kelas-terbuka-piala-raja-hb-x-2025",
    excerpt: "Triple's dari Jawa Tengah tampil dominan dan merebut gelar Kelas Terbuka 2000m sekaligus trofi kehormatan langsung dari Sultan Hamengkubuwono X.",
    content: `
      <p>Triple's dari Jawa Tengah mencatatkan namanya dalam sejarah pacuan kuda Indonesia setelah meraih kemenangan di Kelas Terbuka 2000m pada ajang IHR: Piala Raja Hamengku Buwono X 2025, Minggu 9 November 2025.</p>

      <p>Tampil di hadapan ribuan penonton yang memadati Lapangan Pacuan Kuda Sultan Agung, Triple's berhasil melewati lintasan 2000 meter dengan waktu 2:08.5 — meninggalkan para pesaing di belakangnya. Sebagai pemenang kelas prestisius ini, Triple's berhak membawa pulang trofi kehormatan dari Sultan Hamengkubuwono X.</p>

      <h3>Persaingan Ketat 18 Kelas</h3>
      <p>Piala Raja HB X 2025 merupakan ajang penutup musim pacuan tahun ini dengan 120 kuda terbaik dari 10 provinsi. Mereka bersaing memperebutkan total hadiah senilai Rp1 miliar yang terbagi dalam 18 kelas bergengsi.</p>

      <p>"Kami sangat bangga dengan hasil ini. Triple's benar-benar menampilkan performa terbaiknya di hari yang paling penting," ungkap joki Triple's usai balapan.</p>

      <h3>Bintang Baru Lintasan Tanah Air</h3>
      <p>Kemenangan ini kian memperkuat posisi Triple's sebagai salah satu kuda terbaik Indonesia untuk lintasan jarak jauh musim 2025. Mata kini tertuju pada Jateng Derby 2026 — akankah Triple's kembali mendominasi?</p>
    `,
    image: "/kuda-1.png",
    author: "Tim Redaksi Kudayu",
    date: "2025-11-10",
    category: "news",
    tags: ["Triple's", "Piala Raja HB X", "Kelas Terbuka", "Jawa Tengah"],
    featured: true
  },
  {
    id: "jateng-derby-2026-preview",
    title: "Jateng Derby 2026: Siapa yang Akan Kuasai Lintasan Yogyakarta?",
    slug: "jateng-derby-2026-preview",
    excerpt: "Dengan total hadiah Rp1 miliar dan 15+ kuda peserta dari seluruh Indonesia, Jateng Derby 2026 bersiap menjadi event terbesar musim semi ini.",
    content: `
      <p>Indonesia Horse Racing (IHR): Jateng Derby 2026 resmi dijadwalkan pada 15 Maret 2026 di Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta. Lebih dari sekadar ajang olahraga, Jateng Derby adalah simbol prestise dan keunggulan kompetitif pacuan kuda di tingkat regional.</p>

      <p>Tahun ini, 15 kuda unggulan dari berbagai provinsi dipastikan akan berpartisipasi, mulai dari Kelas 2 Tahun Perdana hingga Kelas Terbuka 2000 meter. Total hadiah sebesar Rp1 miliar menjadi daya tarik tersendiri bagi para pemilik kuda dan stable terbaik Indonesia.</p>

      <h3>Kandidat Favorit</h3>
      <p>Naga Sembilan dari Jakarta menjadi kandidat kuat di Kelas Terbuka 2000M, sementara Dragon (Jawa Timur) diprediksi mendominasi di kelas sprint. Kana Eclipse dari Jawa Tengah — tuan rumah — diharapkan tampil gemilang di hadapan pendukung setianya.</p>

      <h3>Persaingan Antar Provinsi</h3>
      <p>Jateng Derby 2026 semakin menegaskan posisi Jawa Tengah sebagai salah satu pusat pacuan kuda Indonesia. Dengan dukungan penuh dari pemerintah daerah dan sponsor nasional, event ini diprediksi menarik lebih dari 20.000 penonton.</p>
    `,
    image: "/stadion-1.png",
    author: "Budi Santoso",
    date: "2026-02-20",
    category: "event",
    tags: ["Jateng Derby", "2026", "Preview", "IHR"],
    featured: true
  },
  {
    id: "kejurnas-pordasi-59-seri-ii-recap",
    title: "Kejurnas PORDASI Seri II 2025: Jabar Mendominasi, Sejarah Juara Umum Lahir",
    slug: "kejurnas-pordasi-59-seri-ii-2025-recap",
    excerpt: "152 kuda dari 12 provinsi bersaing di Kejurnas ke-59 Seri II. Kontingen Jawa Barat mendominasi dan lahirlah juara umum peraih Piala Presiden.",
    content: `
      <p>Kejuaraan Nasional Pacuan Kuda PORDASI ke-59 Seri II 2025 resmi digelar pada Minggu, 19 Oktober 2025, di Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta. Ajang bergengsi ini menampilkan dua kelas utama: Kelas A Super Sprint dan Kelas A Star of Stars.</p>

      <p>Sebanyak 152 kuda pacu terbaik dari 12 provinsi bersaing memperebutkan total hadiah senilai Rp600 juta. Disaksikan puluhan ribu penonton, seri kedua Kejurnas ini mencatat sejarah baru dengan lahirnya juara umum yang berhasil membawa pulang Piala Presiden Republik Indonesia.</p>

      <h3>Dominasi Jawa Barat</h3>
      <p>Kontingen Jawa Barat tampil paling konsisten sepanjang event. Mulai dari Yuwaraja di Kelas C 1600M, War Kudeta di Kelas Terbuka Sprint, hingga Rajadewi dan Aurora of Khalim di kelas-kelas remaja — semuanya menorehkan kemenangan gemilang.</p>

      <h3>Kelas A Star of Stars — Puncak Kompetisi</h3>
      <p>Kelas paling bergengsi malam itu dilangsungkan di bawah sorotan lampu stadion yang megah. Persaingan ketat terjadi hingga detik-detik terakhir sebelum pemenang akhirnya ditentukan dalam margin yang sangat tipis.</p>
    `,
    image: "/stadion-3.png",
    author: "Rina Wulandari",
    date: "2025-10-20",
    category: "news",
    tags: ["Kejurnas", "PORDASI", "Seri II", "2025"],
    featured: true
  },
  {
    id: "war-kudeta-sprint-double",
    title: "War Kudeta: Raja Sprint yang Tak Terbendung",
    slug: "war-kudeta-sprint-double-champion",
    excerpt: "Dua kali juara Kelas Terbuka Sprint di dua event berbeda — War Kudeta dari Jawa Barat membuktikan dirinya sebagai raja sprint Indonesia.",
    content: `
      <p>Jarang ada kuda yang mampu mempertahankan gelar di dua event besar berturut-turut. War Kudeta dari Jawa Barat melakukannya dengan gaya — juara Kelas Terbuka Sprint di Kejurnas PORDASI Seri II 2025 dan kembali meraih gelar serupa di Piala Raja Hamengku Buwono X 2025.</p>

      <p>Kecepatan eksplosif War Kudeta di 1300 meter menjadi spesialisasinya. Dengan waktu start tercepat di antara semua pesaing dan akselerasi akhir yang luar biasa, tidak ada yang mampu menyentuhnya di lintasan sprint.</p>

      <h3>Formula Kesuksesan</h3>
      <p>"War Kudeta adalah kuda istimewa. Dia tahu kapan harus menyimpan tenaga dan kapan harus meledak," kata pelatihnya. Program latihan intensif selama lima bulan terakhir terbukti membuahkan hasil yang luar biasa.</p>

      <h3>Ancaman di Jateng Derby 2026</h3>
      <p>Dengan performa seperti ini, War Kudeta menjadi ancaman serius di Jateng Derby 2026. Kelas Terbuka Sprint akan menjadi ajang pembuktian apakah dia bisa meraih hat-trick gelar sprint tingkat nasional.</p>
    `,
    image: "/kuda-2.png",
    author: "Agus Priyatno",
    date: "2025-11-15",
    category: "analysis",
    tags: ["War Kudeta", "Sprint", "Jawa Barat", "Champion"],
    featured: false
  },
  {
    id: "kasmaran-konsistensi-kelas-f",
    title: "Kasmaran: Konsistensi yang Tak Pernah Pudar",
    slug: "kasmaran-konsistensi-kelas-f",
    excerpt: "Tiga kali juara Kelas F di tiga event besar berbeda — Kasmaran adalah simbol konsistensi dan ketangguhan dalam pacuan kuda Indonesia.",
    content: `
      <p>Di dunia pacuan kuda, konsistensi sering kali lebih berharga dari sekadar kecepatan sesaat. Kasmaran dari Jakarta adalah bukti nyata hal tersebut. Tiga kali juara Kelas F di tiga event besar berturut-turut: Piala Raja HB X 2025, Kejurnas PORDASI Seri II 2025, dan Jateng Derby 2026.</p>

      <p>Kuda berumur 6 tahun ini memiliki pengalaman bertarung di berbagai kondisi lintasan dan cuaca. Veteran lapangan yang tak pernah menyerah meskipun menghadapi tekanan dari kuda-kuda yang lebih muda.</p>

      <h3>Rahasia Konsistensi</h3>
      <p>"Kasmaran memiliki mental juara yang luar biasa. Dia tidak pernah terpengaruh oleh tekanan kompetisi," jelas pemiliknya. Diet khusus dan program pemulihan yang ketat menjadi kunci untuk menjaga performanya tetap optimal di setiap event.</p>

      <h3>Warisan untuk Generasi Berikutnya</h3>
      <p>Dengan usianya yang tidak muda lagi, setiap balapan Kasmaran kini dinikmati seolah sebagai kenangan berharga. Namun selama dia masih bisa berlari, Kasmaran dipastikan tetap menjadi peserta setia di setiap kejuaraan nasional.</p>
    `,
    image: "/kuda-3.jpg",
    author: "Dewi Kusuma",
    date: "2025-12-01",
    category: "interview",
    tags: ["Kasmaran", "Kelas F", "Jakarta", "Konsistensi"],
    featured: false
  },
  {
    id: "sarga-co-pacuan-kuda-indonesia",
    title: "SARGA.CO: Memimpin Ekosistem Pacuan Kuda 360° Indonesia",
    slug: "sarga-co-ekosistem-pacuan-kuda-360-indonesia",
    excerpt: "Dari 212.750 penonton langsung hingga 1 juta lebih penonton live stream — SARGA.CO membangun ekosistem pacuan kuda profesional di Indonesia.",
    content: `
      <p>PT. Kuda Pacu Indonesia melalui SARGA.CO terus memperkuat posisinya sebagai pionir pacuan kuda 360° di Indonesia. Tidak hanya menyelenggarakan event, SARGA.CO membangun ekosistem menyeluruh demi melestarikan tradisi pacuan kuda dan mewujudkan masa depan yang lebih baik bagi industri ini.</p>

      <p>Angka bicara: 212.750 penonton hadir langsung, 1.404 kuda pacu terdaftar, 1.009.818 penonton live stream, dan 217 liputan media online. Ini bukan sekadar angka — ini adalah cerminan betapa besar antusiasme masyarakat Indonesia terhadap olahraga pacuan kuda.</p>

      <h3>Visi Global dari Lintasan Lokal</h3>
      <p>Tagline "Race to the World Stage" bukan sekadar slogan. SARGA.CO berambisi membawa nama pacuan kuda Indonesia ke kancah internasional. Dengan standar penyelenggaraan kelas dunia, liputan media nasional (Metro TV, Vidio), dan sponsor-sponsor besar, langkah itu perlahan terwujud.</p>

      <h3>Dampak Sosial dan Budaya</h3>
      <p>Lebih dari kompetisi, IHR (Indonesia's Horse Racing) yang dikelola SARGA.CO telah menjadi ajang pertemuan budaya antar provinsi. Kuda-kuda dari Jawa, Kalimantan, Sulawesi, hingga Nusa Tenggara bersaing bersama — merayakan keberagaman dalam satu semangat yang sama.</p>
    `,
    image: "/stadion-2.png",
    author: "Tim Redaksi Kudayu",
    date: "2025-11-28",
    category: "analysis",
    tags: ["SARGA.CO", "IHR", "Indonesia", "Ekosistem"],
    featured: false
  }
];

// Helper functions
export function getFeaturedNews(): NewsArticle[] {
  return news.filter(article => article.featured);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return news.filter(article => article.category === category);
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return news.find(article => article.slug === slug);
}

export function getRecentNews(limit: number = 5): NewsArticle[] {
  return [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
