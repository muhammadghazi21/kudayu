// ──────────────────────────────────────────────────────────────────
// Data event komunitas Kudayu
// Edit file ini untuk menambah / mengubah / menghapus event.
// ──────────────────────────────────────────────────────────────────

export type EventStatus = 'upcoming' | 'ongoing' | 'finished';
export type EventMode   = 'offline' | 'online' | 'hybrid';

export interface ScheduleItem  { day?: string; time: string; activity: string; location?: string }
export interface PrizeItem     { rank: string; reward: string }
export interface ContactItem   { platform: string; value: string }
export interface FaqItem       { q: string; a: string }

export interface EventDetails {
  /** Paragraf panjang yang tampil di halaman detail */
  longDesc: string;
  /** Rundown / susunan acara */
  schedule?: ScheduleItem[];
  /** Tanggal buka pendaftaran */
  regOpen?: string;
  /** Deadline pendaftaran */
  regClose?: string;
  /** URL / link formulir pendaftaran */
  regLink?: string;
  /** Syarat & ketentuan peserta */
  requirements?: string[];
  /** Rincian hadiah per peringkat */
  prizes?: PrizeItem[];
  /** Nama penyelenggara / panitia */
  organizer?: string;
  /** Kontak panitia */
  contact?: ContactItem[];
  /** FAQ khusus event ini */
  faq?: FaqItem[];
}

export interface CommunityEvent {
  /** URL slug unik, dipakai di /community/[slug] */
  slug: string;
  title: string;
  /** Nama kategori pendek, tampil sebagai badge */
  category: string;
  /** Warna HEX untuk badge kategori di halaman komunitas */
  categoryColor: string;
  /** CSS class untuk badge di halaman beranda (tag-cosplay-race, tag-cosplay, dll.) */
  tagClass: string;
  status: EventStatus;
  mode: EventMode;
  /** Tanggal atau rentang tanggal dalam format bebas, misal "Maret 2026" */
  date: string;
  location: string;
  /** Path ke gambar di /public, atau URL eksternal */
  image: string;
  /** Deskripsi singkat event (untuk kartu di listing) */
  desc: string;
  /** Total hadiah / prize pool ringkas (opsional) */
  prize?: string;
  /** Informasi lengkap untuk halaman detail */
  details: EventDetails;
}

export const communityEvents: CommunityEvent[] = [
  // ── Offline & Hybrid ──────────────────────────────────────────
  {
    slug: 'cosplay-race-2026',
    title: 'Cosplay Race 2026',
    category: 'Cosplay Race',
    categoryColor: '#DC143C',
    tagClass: 'tag-cosplay-race',
    status: 'upcoming',
    mode: 'offline',
    date: 'Maret 2026',
    location: 'Lapangan Sultan Agung, Yogyakarta',
    image: '/event-cosplay-race.jpg',
    desc: 'Kompetisi cosplay sambil berlomba di lintasan pacuan kuda sungguhan. Padukan kostum terbaik karakter Uma Musume dengan semangat pacuan kuda Indonesia.',
    prize: 'Total Rp 15.000.000',
    details: {
      longDesc: `Cosplay Race 2026 adalah event paling unik dari komunitas Kudayu — kamu akan tampil dalam kostum karakter Uma Musume favoritmu, kemudian bersaing di lintasan pacuan kuda sesungguhnya bersama peserta lain.\n\nEvent ini diselenggarakan bekerja sama dengan pengelola Lapangan Sultan Agung, Yogyakarta, dan dihadiri oleh komunitas cosplay, penggemar pacuan kuda, serta atlet joki muda dari berbagai daerah.\n\nPemenang dinilai berdasarkan dua hal: penampilan kostum (40%) dan waktu lari di lintasan 100 meter (60%). Kamu tidak perlu pelari cepat — kostum yang memukau bisa memberi nilai tambah yang signifikan!`,
      schedule: [
        { day: 'Sabtu, 7 Maret 2026', time: '07.00', activity: 'Registrasi & pengecekan kostum peserta',                  location: 'Pintu Masuk Lapangan' },
        { day: 'Sabtu, 7 Maret 2026', time: '08.30', activity: 'Pembukaan resmi oleh MC & tim Kudayu',                     location: 'Panggung Utama' },
        { day: 'Sabtu, 7 Maret 2026', time: '09.00', activity: 'Sesi penilaian kostum (juri berjalan keliling peserta)',   location: 'Area Peserta' },
        { day: 'Sabtu, 7 Maret 2026', time: '10.00', activity: 'Babak kualifikasi lomba lari — Gelombang 1 & 2',           location: 'Lintasan Utama' },
        { day: 'Sabtu, 7 Maret 2026', time: '11.30', activity: 'Istirahat makan siang & bazar merchandise',                location: 'Area Bazar' },
        { day: 'Sabtu, 7 Maret 2026', time: '13.00', activity: 'Babak semifinal',                                          location: 'Lintasan Utama' },
        { day: 'Sabtu, 7 Maret 2026', time: '14.30', activity: 'Babak final — top 10 peserta',                             location: 'Lintasan Utama' },
        { day: 'Sabtu, 7 Maret 2026', time: '15.30', activity: 'Penilaian akhir kostum oleh juri tamu',                    location: 'Area Peserta' },
        { day: 'Sabtu, 7 Maret 2026', time: '16.00', activity: 'Pengumuman & penyerahan hadiah',                           location: 'Panggung Utama' },
        { day: 'Sabtu, 7 Maret 2026', time: '16.30', activity: 'Sesi foto bersama & penutupan',                            location: 'Panggung Utama' },
      ],
      regOpen:  '1 Januari 2026',
      regClose: '15 Maret 2026',
      regLink:  'https://kudayu.id/daftar/cosplay-race-2026',
      requirements: [
        'Terbuka untuk seluruh WNI, usia minimal 15 tahun',
        'Wajib mengenakan kostum karakter Uma Musume (original series atau fan-made)',
        'Kostum tidak boleh mengandung unsur SARA atau konten sensitif',
        'Peserta hadir paling lambat pukul 07.30 WIB untuk absensi',
        'Sepatu olahraga wajib digunakan untuk keamanan saat lari',
        'Biaya pendaftaran: Rp 75.000 / orang (termasuk snack & sertifikat)',
        'Kuota terbatas: 150 peserta (first come first served)',
      ],
      prizes: [
        { rank: 'Juara 1',          reward: 'Rp 7.000.000 + Trofi + Merchandise Bundle' },
        { rank: 'Juara 2',          reward: 'Rp 4.500.000 + Trofi + Merchandise Bundle' },
        { rank: 'Juara 3',          reward: 'Rp 2.500.000 + Trofi + Merchandise' },
        { rank: 'Best Costume',     reward: 'Rp 1.000.000 + Merchandise Eksklusif' },
        { rank: 'Finalis (4–10)',    reward: 'Merchandise + Sertifikat' },
      ],
      organizer: 'Panitia Kudayu Community × Lapangan Sultan Agung Yogyakarta',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'WhatsApp', value: '+62 812-3456-7890 (Admin Event)' },
        { platform: 'Email',     value: 'event@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah boleh membawa tim / supporter?', a: 'Boleh. Supporter tidak dikenakan biaya masuk, namun tidak dapat ikut lomba.' },
        { q: 'Apakah kostum harus dibuat sendiri?', a: 'Tidak harus. Kostum beli atau sewa tetap diperbolehkan selama memenuhi standar tampilan.' },
        { q: 'Apa yang terjadi jika hujan?', a: 'Event akan ditunda ke hari berikutnya sesuai pemberitahuan resmi di Instagram @kudayu.id.' },
      ],
    },
  },
  {
    slug: 'uma-cosplay-festival',
    title: 'Uma Cosplay Festival',
    category: 'Cosplay',
    categoryColor: '#9B59B6',
    tagClass: 'tag-cosplay',
    status: 'upcoming',
    mode: 'offline',
    date: 'April 2026',
    location: 'Jakarta Convention Center',
    image: '/event-cosplay.jpg',
    desc: 'Pamerkan kostum karakter Uma Musume favoritmu dan bersaing memperebutkan gelar Best Costume. Ratusan cosplayer dari seluruh Indonesia hadir.',
    prize: 'Total Rp 20.000.000',
    details: {
      longDesc: `Uma Cosplay Festival adalah pesta cosplay terbesar bertema Uma Musume di Indonesia. Diselenggarakan di Jakarta Convention Center, event ini menggabungkan kompetisi kostum, pameran fanart, bazaar doujin, dan pertunjukan panggung dalam satu venue selama dua hari penuh.\n\nPeserta dapat mendaftarkan diri ke kategori Solo, Duo, atau Grup (maks 5 orang). Penilaian mencakup keakuratan kostum, craftsmanship, penampilan di atas panggung, dan interaksi dengan penonton.\n\nAcara ini juga menghadirkan tamu kehormatan dari komunitas cosplay Jepang dan ilustrator fanart ternama Indonesia.`,
      schedule: [
        { day: 'Hari 1 — Sabtu, 4 April 2026',  time: '09.00', activity: 'Pembukaan gedung & registrasi peserta',              location: 'Lobi Hall A' },
        { day: 'Hari 1 — Sabtu, 4 April 2026',  time: '10.00', activity: 'Pameran fanart & bazar dibuka untuk umum',           location: 'Hall B & C' },
        { day: 'Hari 1 — Sabtu, 4 April 2026',  time: '11.00', activity: 'Sesi penilaian craftsmanship',                      location: 'Area Backstage' },
        { day: 'Hari 1 — Sabtu, 4 April 2026',  time: '14.00', activity: 'Penampilan panggung — kategori Solo',               location: 'Panggung Utama' },
        { day: 'Hari 1 — Sabtu, 4 April 2026',  time: '17.00', activity: 'Pengumuman nominasi Hari 1',                        location: 'Panggung Utama' },
        { day: 'Hari 2 — Minggu, 5 April 2026', time: '10.00', activity: 'Penampilan panggung — kategori Duo & Grup',         location: 'Panggung Utama' },
        { day: 'Hari 2 — Minggu, 5 April 2026', time: '13.00', activity: 'Meet & greet dengan tamu kehormatan',               location: 'Ruang VIP JCC' },
        { day: 'Hari 2 — Minggu, 5 April 2026', time: '15.00', activity: 'Babak final & penilaian akhir juri',                location: 'Panggung Utama' },
        { day: 'Hari 2 — Minggu, 5 April 2026', time: '17.00', activity: 'Pengumuman pemenang & penyerahan hadiah',           location: 'Panggung Utama' },
      ],
      regOpen:  '1 Februari 2026',
      regClose: '25 Maret 2026',
      regLink:  'https://kudayu.id/daftar/uma-cosplay-festival',
      requirements: [
        'Terbuka untuk semua umur (peserta di bawah 17 tahun wajib didampingi wali)',
        'Kategori: Solo (1 orang), Duo (2 orang), Grup (3–5 orang)',
        'Kostum harus berbasis karakter dari seri Uma Musume Pretty Derby',
        'Tidak diperbolehkan menggunakan properti berbahaya (benda tajam, api, dll.)',
        'Biaya pendaftaran: Solo Rp 100.000 · Duo Rp 175.000 · Grup Rp 250.000',
        'Tiket penonton: Rp 50.000/hari atau Rp 85.000/2 hari',
      ],
      prizes: [
        { rank: 'Best in Show',    reward: 'Rp 10.000.000 + Trofi Grand Champion' },
        { rank: 'Best Solo',       reward: 'Rp 5.000.000 + Trofi' },
        { rank: 'Best Duo',        reward: 'Rp 3.000.000 + Trofi' },
        { rank: 'Best Grup',       reward: 'Rp 3.000.000 + Trofi' },
        { rank: 'Best Newcomer',   reward: 'Rp 1.000.000 + Merchandise Bundle' },
        { rank: 'Peoples Choice',  reward: 'Merchandise Eksklusif' },
      ],
      organizer: 'Kudayu Community × AnimeID × JCC Event Management',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Email',     value: 'cosplayfest@kudayu.id' },
        { platform: 'Telegram',  value: 't.me/kudayu_community' },
      ],
      faq: [
        { q: 'Bolehkah peserta ikut lebih dari satu kategori?', a: 'Tidak. Peserta hanya bisa mendaftar di satu kategori (Solo, Duo, atau Grup).' },
        { q: 'Apakah kostum wajib buatan sendiri?', a: 'Tidak wajib. Kostum beli tetap dinilai, namun craftsmanship hand-made mendapat nilai bonus dari juri.' },
        { q: 'Apakah ada area parkir?', a: 'Ya, parkir tersedia di area JCC. Biaya parkir ditanggung peserta/penonton.' },
      ],
    },
  },
  {
    slug: 'uma-dance-battle',
    title: 'Uma Dance Battle',
    category: 'Dance',
    categoryColor: '#2980B9',
    tagClass: 'tag-dance',
    status: 'upcoming',
    mode: 'offline',
    date: 'Mei 2026',
    location: 'GOR Ngurah Rai, Bali',
    image: '/event-dance.jpg',
    desc: 'Battle dance bertema Uma Musume — koreografi seru, energi penuh, dan penampilan spesial dari komunitas dance Indonesia.',
    prize: 'Total Rp 10.000.000',
    details: {
      longDesc: `Uma Dance Battle mengadu kemampuan dance cover dari seluruh penjuru Indonesia dengan tema lagu-lagu populer Uma Musume Pretty Derby. Berlokasi di GOR Ngurah Rai, Bali, event ini menjadi ajang tahunan yang paling ditunggu oleh komunitas dance cover Indonesia.\n\nPeserta dapat mendaftar sebagai solo dancer atau tim (2–8 orang). Penampilan dinilai berdasarkan sinkronisasi, ekspresi, kelengkapan formasi, dan kreativitas interpretasi. Semua genre dance diterima selama menggunakan lagu dari Uma Musume.\n\nSelain kompetisi, tersedia exhibition performance dari komunitas dance tamu dari Malaysia dan Filipina.`,
      schedule: [
        { day: 'Sabtu, 2 Mei 2026', time: '08.00', activity: 'Registrasi peserta & technical rehearsal', location: 'Lobi GOR Ngurah Rai' },
        { day: 'Sabtu, 2 Mei 2026', time: '09.30', activity: 'Pembukaan & penampilan tamu kehormatan',  location: 'Panggung Utama' },
        { day: 'Sabtu, 2 Mei 2026', time: '10.00', activity: 'Babak kualifikasi — solo dancer',         location: 'Lantai Tengah GOR' },
        { day: 'Sabtu, 2 Mei 2026', time: '12.00', activity: 'Istirahat & makan siang',                 location: 'Area Kantin GOR' },
        { day: 'Sabtu, 2 Mei 2026', time: '13.00', activity: 'Babak kualifikasi — tim',                 location: 'Lantai Tengah GOR' },
        { day: 'Sabtu, 2 Mei 2026', time: '15.00', activity: 'Exhibition performance — komunitas luar negeri', location: 'Panggung Utama' },
        { day: 'Sabtu, 2 Mei 2026', time: '16.00', activity: 'Babak final (top 5 solo + top 5 tim)',   location: 'Panggung Utama' },
        { day: 'Sabtu, 2 Mei 2026', time: '17.30', activity: 'Pengumuman pemenang & foto bersama',     location: 'Panggung Utama' },
      ],
      regOpen:  '1 Maret 2026',
      regClose: '30 April 2026',
      regLink:  'https://kudayu.id/daftar/uma-dance-battle',
      requirements: [
        'Terbuka untuk semua usia dan tingkat kemampuan',
        'Kategori: Solo (1 orang) atau Tim (2–8 orang)',
        'Lagu yang digunakan harus dari OST Uma Musume Pretty Derby (boleh remix/mashup)',
        'Durasi penampilan: Solo maks 2 menit · Tim maks 4 menit',
        'Biaya pendaftaran: Solo Rp 50.000 · Tim Rp 150.000',
        'Wajib mengirim video pre-qualify via Google Form sebelum deadline',
      ],
      prizes: [
        { rank: 'Juara Solo 1',   reward: 'Rp 3.000.000 + Trofi + Merchandise' },
        { rank: 'Juara Solo 2',   reward: 'Rp 1.500.000 + Trofi' },
        { rank: 'Juara Tim 1',    reward: 'Rp 4.000.000 + Trofi + Merchandise' },
        { rank: 'Juara Tim 2',    reward: 'Rp 2.500.000 + Trofi' },
        { rank: 'Most Energetic', reward: 'Merchandise Eksklusif' },
      ],
      organizer: 'Kudayu Community × Bali Dance Cover Community',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'WhatsApp', value: '+62 813-9876-5432 (Koordinator Dance)' },
        { platform: 'Email',     value: 'dance@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah kostum Uma Musume wajib dipakai saat tampil?', a: 'Tidak wajib, tapi sangat dianjurkan. Penampilan dengan kostum mendapat nilai presentasi lebih tinggi.' },
        { q: 'Bolehkah menggunakan prop (kipas, payung, dll.)?', a: 'Boleh, selama tidak membahayakan diri sendiri atau penonton.' },
        { q: 'Apakah ada batas usia bawah?', a: 'Tidak ada batas usia; peserta di bawah 12 tahun wajib didampingi orang tua/wali.' },
      ],
    },
  },
  {
    slug: 'fans-gathering-nasional',
    title: 'Fans Gathering Nasional',
    category: 'Fans Gathering',
    categoryColor: '#27AE60',
    tagClass: 'tag-fans',
    status: 'upcoming',
    mode: 'hybrid',
    date: 'Juni 2026',
    location: 'Surabaya & Online',
    image: '/event-fans-gathering.jpg',
    desc: 'Pertemuan akbar para penggemar Uma Musume dan pacuan kuda Indonesia. Meet-up, games, lelang merchandise eksklusif, dan surprise guest istimewa.',
    details: {
      longDesc: `Fans Gathering Nasional 2026 adalah momen paling spesial di kalender Kudayu Community. Event hybrid ini menggabungkan pertemuan fisik di Surabaya dengan siaran live online, sehingga penggemar dari seluruh Indonesia dan mancanegara dapat hadir bersama.\n\nDi venue fisik, peserta akan menikmati games berhadiah, lelang merchandise edisi terbatas, sesi Q&A dengan panitia, serta sesi foto bersama karakter cutout dan display merchandise resmi.\n\nUntuk peserta online, tersedia sesi live streaming di YouTube & Discord dengan kuis berhadiah real-time, voting karakter favorit, dan giveaway eksklusif.`,
      schedule: [
        { day: 'Sabtu, 6 Juni 2026', time: '13.00', activity: 'Registrasi & welcome drinks',                          location: 'Aula Venue Surabaya (offline) / Discord (online)' },
        { day: 'Sabtu, 6 Juni 2026', time: '14.00', activity: 'Live streaming dimulai — penonton online bergabung',   location: 'YouTube & Discord Kudayu' },
        { day: 'Sabtu, 6 Juni 2026', time: '14.15', activity: 'Pembukaan resmi & perkenalan tim Kudayu',              location: 'Panggung Utama / Live Stream' },
        { day: 'Sabtu, 6 Juni 2026', time: '14.30', activity: 'Games & kuis berhadiah (offline + online bersamaan)', location: 'Seluruh Venue & Discord' },
        { day: 'Sabtu, 6 Juni 2026', time: '15.30', activity: 'Lelang merchandise eksklusif',                        location: 'Area Pameran Venue' },
        { day: 'Sabtu, 6 Juni 2026', time: '16.30', activity: 'Pengumuman roadmap Kudayu 2026 Semester 2',           location: 'Panggung Utama / Live Stream' },
        { day: 'Sabtu, 6 Juni 2026', time: '17.00', activity: 'Surprise guest & sesi Q&A',                          location: 'Panggung Utama / Live Stream' },
        { day: 'Sabtu, 6 Juni 2026', time: '17.45', activity: 'Giveaway penutup (online) & foto bersama (offline)',  location: 'Venue & Discord' },
        { day: 'Sabtu, 6 Juni 2026', time: '18.00', activity: 'Penutupan acara',                                     location: 'Panggung Utama / Live Stream' },
      ],
      regOpen:  '1 April 2026',
      regClose: '31 Mei 2026',
      regLink:  'https://kudayu.id/daftar/fans-gathering-2026',
      requirements: [
        'Hadir offline (Surabaya): Tiket Rp 60.000 — termasuk snack, goody bag & lanyard eksklusif',
        'Hadir online: Gratis, daftar via link untuk mendapatkan akses streaming & ikut kuis berhadiah',
        'Kuota offline: 300 orang (first come first served)',
        'Hadir tepat waktu — pendaftaran ulang ditutup pukul 13.45 WIB',
        'Pakaian bebas sopan; cosplay sangat disambut',
      ],
      prizes: [
        { rank: 'Kuis & Games',   reward: 'Merchandise Kudayu edisi terbatas' },
        { rank: 'Voting Karakter', reward: 'Merchandise winner karakter terpilih' },
        { rank: 'Online Giveaway', reward: '3× pemenang × Bundle merchandise senilai Rp 500.000' },
      ],
      organizer: 'Kudayu Community Team',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Discord',   value: 'discord.gg/kudayu' },
        { platform: 'Email',     value: 'gathering@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah bisa hadir secara online gratis?', a: 'Ya! Daftar via link pendaftaran untuk mendapatkan akses streaming + link kuis berhadiah.' },
        { q: 'Apakah merchandise lelang bisa dikirim ke luar Surabaya?', a: 'Bisa, dengan biaya ongkir ditanggung pembeli. Pembayaran via transfer setelah lelang berakhir.' },
      ],
    },
  },
  {
    slug: 'kompetisi-foto-kuda-pacuan',
    title: 'Kompetisi Foto Kuda Pacuan',
    category: 'Foto Kompetisi',
    categoryColor: '#E67E22',
    tagClass: 'tag-foto',
    status: 'upcoming',
    mode: 'offline',
    date: 'Juli 2026',
    location: 'Berbagai sirkuit pacuan, seluruh Indonesia',
    image: '/stadion-1.png',
    desc: 'Abadikan momen terbaik dari arena pacuan kuda Indonesia. Kategori: Aksi Balapan, Portrait Kuda, Ekspresi Joki, dan Suasana Stadion.',
    prize: 'Total Rp 25.000.000',
    details: {
      longDesc: `Kompetisi Foto Kuda Pacuan mengajak para fotografer mengabadikan keindahan dan dinamika pacuan kuda Indonesia langsung dari arena perlombaan.\n\nPeserta mendapatkan akses ke area khusus fotografer di berbagai sirkuit pacuan rekanan Kudayu di Jawa Tengah, Jawa Barat, dan Jawa Timur sepanjang bulan Juli 2026. Foto terbaik dinilai oleh juri fotografer profesional dan editor majalah olahraga nasional.\n\nKarya pemenang dipajang di pameran foto fisik di Jakarta dan diterbitkan dalam buku foto edisi terbatas Kudayu.`,
      schedule: [
        { day: 'Juli 2026 — Periode Pemotretan',  time: '1–10 Jul',  activity: 'Sirkuit Semarang & Solo',          location: 'Jawa Tengah' },
        { day: 'Juli 2026 — Periode Pemotretan',  time: '11–20 Jul', activity: 'Sirkuit Bandung & Cimahi',         location: 'Jawa Barat' },
        { day: 'Juli 2026 — Periode Pemotretan',  time: '21–31 Jul', activity: 'Sirkuit Surabaya & Malang',        location: 'Jawa Timur' },
        { day: 'Agustus 2026 — Pasca Kompetisi',  time: '1–15 Agt',  activity: 'Pengumpulan & seleksi foto juri', location: 'Online — Panel Juri' },
        { day: 'Agustus 2026 — Pasca Kompetisi',  time: '20 Agt',    activity: 'Pengumuman pemenang',              location: 'Instagram & Website Kudayu' },
        { day: 'September 2026',                  time: 'Sep 2026',  activity: 'Pameran foto & peluncuran buku foto', location: 'Jakarta (venue akan diumumkan)' },
      ],
      regOpen:  '1 Mei 2026',
      regClose: '25 Juni 2026',
      regLink:  'https://kudayu.id/daftar/foto-kuda-pacuan',
      requirements: [
        'Terbuka untuk fotografer pemula hingga profesional',
        'Kamera minimal DSLR atau mirrorless crop sensor (smartphone tidak diterima)',
        'Setiap peserta dapat mengajukan maks 10 foto per kategori',
        'Foto tidak boleh menggunakan filter drastis yang mengubah realisme gambar',
        'Metadata EXIF foto harus utuh dan dapat diverifikasi',
        'Biaya pendaftaran: Rp 150.000 (akses semua sirkuit + rompi peserta)',
        'Kategori: Aksi Balapan · Portrait Kuda · Ekspresi Joki · Suasana Stadion',
      ],
      prizes: [
        { rank: 'Grand Prize (Foto Terbaik Keseluruhan)', reward: 'Rp 10.000.000 + Publikasi National Geographic Indonesia' },
        { rank: 'Juara 1 tiap kategori',                 reward: 'Rp 3.000.000 + Trofi' },
        { rank: 'Juara 2 tiap kategori',                 reward: 'Rp 1.500.000' },
        { rank: 'Juara 3 tiap kategori',                 reward: 'Rp 750.000' },
        { rank: 'Foto Publik Pilihan',                   reward: 'Rp 500.000 + Feature di sosmed Kudayu' },
      ],
      organizer: 'Kudayu Community × Komunitas Fotografi Indonesia (KFI)',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Email',     value: 'foto@kudayu.id' },
        { platform: 'WhatsApp', value: '+62 815-1234-5678 (Koordinator Foto)' },
      ],
      faq: [
        { q: 'Apakah bisa mendaftar dari luar Jawa?', a: 'Bisa, namun venue pemotretan hanya tersedia di area sirkuit Jawa. Akomodasi tidak disediakan panitia.' },
        { q: 'Berapa maksimal foto yang bisa dikirim?', a: 'Maksimal 10 foto per kategori. Peserta boleh ikut semua 4 kategori (maks 40 foto total).' },
      ],
    },
  },
  {
    slug: 'kuda-pacu-street-festival',
    title: 'Kuda Pacu Street Festival',
    category: 'Festival',
    categoryColor: '#C0392B',
    tagClass: 'tag-festival',
    status: 'upcoming',
    mode: 'offline',
    date: 'Agustus 2026',
    location: 'Alun-Alun Kota Yogyakarta',
    image: '/stadion-2.png',
    desc: 'Festival jalanan bertema pacuan kuda — pameran seni, pertunjukan musik, bazar merchandise, dan sesi meet & greet dengan joki dan pelatih ternama.',
    details: {
      longDesc: `Kuda Pacu Street Festival adalah perayaan budaya pacuan kuda Indonesia yang mengambil alih Alun-Alun Kota Yogyakarta selama dua hari. Gratis untuk umum, festival ini menggabungkan seni, musik, kuliner, dan komunitas dalam satu ruang publik yang meriah.\n\nPengunjung dapat menikmati pameran foto dan instalasi seni bertema pacuan kuda, pertunjukan live musik dari berbagai genre, bazar merchandise dari brand lokal, stan doujin dan fanart, serta sesi temu penonton dengan joki dan pelatih kuda ternama.`,
      schedule: [
        { day: 'Hari 1 — Sabtu, 1 Agustus 2026',  time: '10.00', activity: 'Pembukaan festival & pameran seni dibuka',          location: 'Panggung Utama Alun-Alun' },
        { day: 'Hari 1 — Sabtu, 1 Agustus 2026',  time: '11.00', activity: 'Penampilan musik live — local band',               location: 'Panggung Musik' },
        { day: 'Hari 1 — Sabtu, 1 Agustus 2026',  time: '13.00', activity: 'Talk show: "Perjalanan Joki Muda Indonesia"',     location: 'Tenda Diskusi Utara' },
        { day: 'Hari 1 — Sabtu, 1 Agustus 2026',  time: '15.00', activity: 'Meet & greet dengan joki & pelatih ternama',      location: 'Area Meet & Greet' },
        { day: 'Hari 1 — Sabtu, 1 Agustus 2026',  time: '17.00', activity: 'Penampilan musik utama — headliner',              location: 'Panggung Musik' },
        { day: 'Hari 2 — Minggu, 2 Agustus 2026', time: '10.00', activity: 'Bazar dibuka — merchandise, doujin, fanart',      location: 'Zona Bazar Selatan' },
        { day: 'Hari 2 — Minggu, 2 Agustus 2026', time: '11.00', activity: 'Workshop: "Melukis Kuda Pacu Gaya Anime"',       location: 'Tenda Workshop' },
        { day: 'Hari 2 — Minggu, 2 Agustus 2026', time: '14.00', activity: 'Lomba fan art on-site',                           location: 'Tenda Workshop' },
        { day: 'Hari 2 — Minggu, 2 Agustus 2026', time: '16.00', activity: 'Penampilan penutup & penarikan doorprize',        location: 'Panggung Utama Alun-Alun' },
        { day: 'Hari 2 — Minggu, 2 Agustus 2026', time: '17.30', activity: 'Penutupan resmi festival',                        location: 'Panggung Utama Alun-Alun' },
      ],
      requirements: [
        'Gratis untuk semua pengunjung — tidak perlu tiket',
        'Untuk peserta bazar/stand: pendaftaran via email bazar@kudayu.id sebelum 31 Juli 2026',
        'Workshop on-site memiliki kuota terbatas — daftar di tempat mulai pukul 10.00 hari kedua',
        'Anak-anak di bawah 12 tahun wajib didampingi orang tua',
      ],
      prizes: [
        { rank: 'Lomba Fan Art On-Site', reward: 'Merchandise Bundle + Sertifikat' },
        { rank: 'Doorprize',             reward: '10× pemenang × Merchandise Kudayu' },
      ],
      organizer: 'Kudayu Community × Dinas Kebudayaan Kota Yogyakarta',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Email',     value: 'festival@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah ada biaya masuk?', a: 'Tidak ada. Festival ini sepenuhnya gratis untuk umum.' },
        { q: 'Bisakah saya menjual produk di bazar?', a: 'Bisa. Daftarkan stand kamu via email bazar@kudayu.id dengan menyertakan katalog produk sebelum 31 Juli 2026.' },
      ],
    },
  },
  {
    slug: 'regional-fan-meetup-jabar',
    title: 'Regional Fan Meetup — Jawa Barat',
    category: 'Meetup',
    categoryColor: '#16A085',
    tagClass: 'tag-meetup',
    status: 'finished',
    mode: 'offline',
    date: 'Februari 2026',
    location: 'Bandung',
    image: '/stadion-3.png',
    desc: 'Pertemuan komunitas penggemar pacuan kuda wilayah Jawa Barat. Sesi diskusi, nonton bareng highlight race, dan kunjungan ke stable lokal.',
    details: {
      longDesc: `Regional Fan Meetup Jawa Barat adalah seri pertemuan komunitas yang diselenggarakan di tingkat regional. Event Februari 2026 di Bandung berhasil mengumpulkan lebih dari 80 penggemar pacuan kuda dan Uma Musume dari seluruh Jawa Barat.\n\nAgenda utama mencakup sesi diskusi strategi pacuan, nonton bareng highlight race terbaik 2025, kunjungan ke stable kuda pacuan lokal, serta berbagi pengalaman antara fan baru dan fan lama.\n\nEvent ini kini telah selesai. Dokumentasi foto dan video tersedia di galeri Kudayu.`,
      schedule: [
        { day: 'Sabtu, 7 Februari 2026', time: '09.00', activity: 'Kumpul & registrasi',                                 location: 'Kafe Pacu, Bandung' },
        { day: 'Sabtu, 7 Februari 2026', time: '09.30', activity: 'Perkenalan & ice breaking',                           location: 'Area Kafe' },
        { day: 'Sabtu, 7 Februari 2026', time: '10.00', activity: 'Diskusi: "Kuda Pacu Jabar — Potensi & Tantangan"', location: 'Ruang Diskusi Kafe' },
        { day: 'Sabtu, 7 Februari 2026', time: '11.30', activity: 'Nonton bareng highlight race nasional 2025',          location: 'Ruang Utama Kafe' },
        { day: 'Sabtu, 7 Februari 2026', time: '12.30', activity: 'Makan siang bersama',                                 location: 'Area Makan' },
        { day: 'Sabtu, 7 Februari 2026', time: '13.30', activity: 'Kunjungan ke stable kuda pacuan lokal',               location: 'Stable Bandung Utara' },
        { day: 'Sabtu, 7 Februari 2026', time: '15.30', activity: 'Sharing session & tanya jawab bebas',                 location: 'Area Kafe' },
        { day: 'Sabtu, 7 Februari 2026', time: '16.30', activity: 'Foto bersama & penutupan',                            location: 'Depan Kafe Pacu' },
      ],
      organizer: 'Kudayu Community — Regional Jawa Barat',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Discord',   value: 'discord.gg/kudayu' },
      ],
      faq: [
        { q: 'Apakah ada meetup berikutnya di Jawa Barat?', a: 'Pantau terus Instagram @kudayu.id untuk info jadwal meetup regional selanjutnya.' },
      ],
    },
  },

  // ── Online ────────────────────────────────────────────────────
  {
    slug: 'kompetisi-fanart-uma-musume',
    title: 'Kompetisi Fanart Uma Musume',
    category: 'Fanart',
    categoryColor: '#8E44AD',
    tagClass: 'tag-fanart',
    status: 'ongoing',
    mode: 'online',
    date: '1–31 Maret 2026',
    location: 'Online — Instagram & Twitter/X',
    image: '/kuda-1.png',
    desc: 'Kirimkan karya fanart karakter kuda pacuan dengan tema "Victory Lap". Semua gaya seni diterima — digital, tradisional, 3D. Voting oleh komunitas.',
    prize: 'Total Rp 8.000.000 + Merchandise',
    details: {
      longDesc: `Kompetisi Fanart Uma Musume mengundang semua seniman untuk menciptakan karya bertema "Victory Lap" — menggambarkan momen kemenangan, kegembiraan, dan semangat balapan.\n\nKarya dinilai dua tahap: seleksi oleh tim juri (teknik & originalitas) untuk menentukan top 20, kemudian voting terbuka oleh komunitas untuk memilih juara 1–3.\n\nKarya terbaik akan dijadikan ilustrasi resmi merchandise Kudayu edisi terbatas dan dipajang di pameran digital website Kudayu.`,
      schedule: [
        { day: 'Periode Pengumpulan', time: '1 Mar',    activity: 'Pendaftaran & pengumpulan karya dibuka', location: 'Instagram & Twitter/X' },
        { day: 'Periode Pengumpulan', time: '31 Mar',   activity: 'Batas akhir pengumpulan karya',          location: 'Instagram & Twitter/X' },
        { day: 'Penilaian & Voting',  time: '3 Apr',    activity: 'Pengumuman top 20 finalis',              location: 'Website & Instagram Kudayu' },
        { day: 'Penilaian & Voting',  time: '4–10 Apr', activity: 'Voting terbuka oleh komunitas',          location: 'Instagram @kudayu.id' },
        { day: 'Pengumuman',          time: '12 Apr',   activity: 'Pengumuman juara & distribusi hadiah',   location: 'Website & Instagram Kudayu' },
      ],
      regOpen:  '1 Maret 2026',
      regClose: '31 Maret 2026',
      regLink:  'https://kudayu.id/daftar/fanart-2026',
      requirements: [
        'Terbuka untuk semua WNI dan WNA tanpa batas usia',
        'Karya harus original — tidak boleh menggunakan AI generator',
        'Karakter yang digambar harus dari seri Uma Musume Pretty Derby',
        'Format file: JPG/PNG minimal 2000×2000px (digital) — atau foto karya fisik resolusi tinggi',
        'Setiap peserta boleh mengirim maks 2 karya',
        'Posting di Instagram / Twitter/X dengan hashtag #KudayuFanart2026 dan tag @kudayu.id',
        'Gratis tanpa biaya pendaftaran',
      ],
      prizes: [
        { rank: 'Juara 1 (Voting + Juri)',    reward: 'Rp 4.000.000 + Karya dicetak jadi merchandise resmi' },
        { rank: 'Juara 2',                    reward: 'Rp 2.500.000 + Merchandise Bundle' },
        { rank: 'Juara 3',                    reward: 'Rp 1.500.000 + Merchandise' },
        { rank: 'Best Newcomer',              reward: 'Rp 500.000 + Feature di website Kudayu' },
        { rank: 'Honorable Mention (5 karya)', reward: 'Merchandise + Sertifikat digital' },
      ],
      organizer: 'Kudayu Community — Tim Kreatif',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id (DM untuk pertanyaan)' },
        { platform: 'Email',     value: 'fanart@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah boleh menggunakan referensi pose dari internet?', a: 'Boleh sebagai referensi, namun karya akhir harus 100% digambar sendiri.' },
        { q: 'Bolehkah menggambar karakter OC yang memakai kostum Uma Musume?', a: 'Tidak. Karakter yang digambar harus dari seri resmi Uma Musume Pretty Derby.' },
        { q: 'Kapan hadiah dikirimkan?', a: 'Merchandise dikirim maksimal 14 hari setelah pengumuman pemenang. Transfer uang maksimal 7 hari kerja.' },
      ],
    },
  },
  {
    slug: 'lomba-foto-kuda-asli',
    title: 'Lomba Foto Kuda Asli',
    category: 'Foto Kompetisi',
    categoryColor: '#E67E22',
    tagClass: 'tag-foto',
    status: 'ongoing',
    mode: 'online',
    date: '15 Feb – 15 Apr 2026',
    location: 'Online — kudayu.id/submit',
    image: '/kuda-asli-2.jpg',
    desc: 'Abadikan keindahan kuda pacu Indonesia di lintasan maupun kandang. Kirim foto melo Instagram dengan tagar #KudayuLombaFoto untuk ikut serta.',
    prize: 'Rp 5.000.000 + Feature di Website',
    details: {
      longDesc: `Lomba Foto Kuda Asli mengajak siapapun yang dekat dengan dunia kuda pacuan untuk mengabadikan keindahan hewan luar biasa ini dan membaginya ke komunitas Kudayu.\n\nBerbeda dengan kompetisi foto profesional, lomba ini terbuka lebih luas — kamu boleh memotret menggunakan kamera HP sekalipun, selama foto memiliki komposisi yang baik.\n\nFoto yang masuk akan dikompilasi di galeri website Kudayu dan foto terbaik terpilih akan dijadikan cover konten media sosial resmi Kudayu selama satu bulan.`,
      schedule: [
        { day: 'Periode Pengumpulan', time: '15 Feb',    activity: 'Periode pengumpulan foto dibuka',         location: 'kudayu.id/submit & Instagram' },
        { day: 'Periode Pengumpulan', time: '15 Apr',    activity: 'Batas akhir pengumpulan',                 location: 'kudayu.id/submit' },
        { day: 'Penilaian',          time: '16–25 Apr', activity: 'Penilaian oleh tim juri Kudayu',          location: 'Internal — Panel Juri Kudayu' },
        { day: 'Pengumuman',         time: '30 Apr',    activity: 'Pengumuman pemenang',                     location: 'Instagram @kudayu.id' },
      ],
      regOpen:  '15 Februari 2026',
      regClose: '15 April 2026',
      regLink:  'https://kudayu.id/submit/lomba-foto-kuda',
      requirements: [
        'Terbuka untuk semua WNI, tanpa batas usia',
        'Foto harus menampilkan kuda pacu Indonesia',
        'Boleh menggunakan kamera HP, mirrorless, atau DSLR',
        'Upload foto ke Instagram dengan hashtag #KudayuLombaFoto dan tag @kudayu.id',
        'Daftarkan via link di bio @kudayu.id setelah posting',
        'Satu peserta maks 3 foto',
        'Gratis tanpa biaya pendaftaran',
      ],
      prizes: [
        { rank: 'Juara 1',                      reward: 'Rp 3.000.000 + Feature cover sosmed Kudayu 1 bulan' },
        { rank: 'Juara 2',                      reward: 'Rp 1.500.000 + Feature di website' },
        { rank: 'Juara 3',                      reward: 'Rp 500.000 + Feature di website' },
        { rank: 'Foto Pilihan Editors (5 foto)', reward: 'Merchandise + Feature galeri website' },
      ],
      organizer: 'Kudayu Community — Tim Konten',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Email',     value: 'foto@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah saya perlu kamera profesional?', a: 'Tidak. Foto dari smartphone pun diterima selama kualitas gambar cukup baik dan komposisi menarik.' },
        { q: 'Dari mana saya bisa memotret kuda pacu?', a: 'Kamu bisa mengunjungi sirkuit pacuan lokal, stable, atau event balap di kotamu.' },
      ],
    },
  },
  {
    slug: 'uma-quiz-night',
    title: 'Uma Quiz Night',
    category: 'Kuis Online',
    categoryColor: '#2980B9',
    tagClass: 'tag-kuis',
    status: 'upcoming',
    mode: 'online',
    date: 'Setiap Jumat, Maret 2026',
    location: 'Online — Discord Kudayu',
    image: '/kuda-2.png',
    desc: 'Adu pengetahuan soal pacuan kuda dan Uma Musume! Kuis interaktif via Discord, hadiah poin XP dan merchandise eksklusif untuk juara.',
    prize: 'Merchandise & XP Points',
    details: {
      longDesc: `Uma Quiz Night adalah sesi kuis mingguan yang diselenggarakan setiap Jumat malam di server Discord resmi Kudayu. Sepanjang Maret 2026, ada 4 sesi kuis dengan tema berbeda setiap minggunya.\n\nFormat kuis real-time menggunakan bot Discord khusus — peserta menjawab 20 pertanyaan dalam waktu terbatas. Pertanyaan mencakup pengetahuan umum pacuan kuda Indonesia, trivia Uma Musume Pretty Derby, dan pengetahuan tentang komunitas Kudayu.`,
      schedule: [
        { day: 'Maret 2026 — Seri Kuis Mingguan', time: '6 Mar, 20.00',  activity: 'Sesi 1: Uma Musume Trivia',                      location: 'Discord #quiz-night' },
        { day: 'Maret 2026 — Seri Kuis Mingguan', time: '13 Mar, 20.00', activity: 'Sesi 2: Sejarah Pacuan Kuda Indonesia',           location: 'Discord #quiz-night' },
        { day: 'Maret 2026 — Seri Kuis Mingguan', time: '20 Mar, 20.00', activity: 'Sesi 3: Race Strategy & Rules',                  location: 'Discord #quiz-night' },
        { day: 'Maret 2026 — Seri Kuis Mingguan', time: '27 Mar, 20.00', activity: 'Sesi 4: Komunitas Kudayu & Serba-serbi',         location: 'Discord #quiz-night' },
      ],
      regLink: 'https://discord.gg/kudayu',
      requirements: [
        'Peserta harus memiliki akun Discord yang sudah diverifikasi',
        'Bergabung ke server Discord Kudayu: discord.gg/kudayu',
        'Masuk ke channel #quiz-night tepat waktu — kuis dimulai otomatis pukul 20.00 WIB',
        'Gratis tanpa biaya apapun',
      ],
      prizes: [
        { rank: 'Juara tiap sesi (mingguan)', reward: 'Merchandise Kudayu + 500 XP' },
        { rank: 'Top 3 akumulasi Maret',      reward: '1. Bundle + 2000 XP · 2. Merchandise + 1200 XP · 3. Merchandise + 800 XP' },
      ],
      organizer: 'Kudayu Community — Tim Discord',
      contact: [
        { platform: 'Discord',   value: 'discord.gg/kudayu' },
        { platform: 'Instagram', value: '@kudayu.id' },
      ],
      faq: [
        { q: 'Apa itu XP Points?', a: 'XP adalah poin loyalitas di server Discord Kudayu. Bisa ditukar dengan reward eksklusif dan digunakan untuk naik rank di server.' },
        { q: 'Apakah bisa hadir hanya di beberapa sesi?', a: 'Bisa. Poin dari setiap sesi yang diikuti tetap diakumulasi.' },
      ],
    },
  },
  {
    slug: 'race-prediction-league',
    title: 'Race Prediction League',
    category: 'Prediksi',
    categoryColor: '#F39C12',
    tagClass: 'tag-prediksi',
    status: 'upcoming',
    mode: 'online',
    date: 'Setiap event race 2026',
    location: 'Online — Aplikasi Kudayu',
    image: '/kuda-3.jpg',
    desc: 'Prediksi urutan finish setiap race nasional dan kumpulkan poin. Top prediktor musim 2026 mendapatkan merchandise spesial dan akses eksklusif.',
    prize: 'Merchandise + Akses Eksklusif',
    details: {
      longDesc: `Race Prediction League adalah liga prediksi resmi Kudayu yang berjalan sepanjang musim race 2026. Sebelum setiap race nasional, peserta memasukkan prediksi urutan finish 1–5 melalui aplikasi Kudayu.\n\nPoin diberikan berdasarkan akurasi prediksi. Di akhir musim, top 10 prediktor akan mendapatkan hadiah utama dan dipublish di website Kudayu sebagai "Prediktor Terbaik Musim 2026".`,
      schedule: [
        { day: 'Sepanjang Musim 2026',  time: 'Jan–Des',    activity: 'Liga berjalan mengikuti kalender race PORDASI', location: 'Aplikasi Kudayu' },
        { day: 'Setiap Race',           time: 'H-48',       activity: 'Jendela prediksi dibuka',                       location: 'Aplikasi Kudayu — Beranda Liga' },
        { day: 'Setiap Race',           time: 'H-2',        activity: 'Jendela prediksi ditutup',                      location: 'Aplikasi Kudayu' },
        { day: 'Setiap Race',           time: 'Usai race',  activity: 'Poin diperbarui otomatis',                      location: 'Aplikasi Kudayu — Tab Klasemen' },
        { day: 'Akhir Musim',          time: 'Des 2026',   activity: 'Pengumuman pemenang liga musim 2026',            location: 'Website & Instagram Kudayu' },
      ],
      regLink: 'https://kudayu.id/prediction-league',
      requirements: [
        'Peserta harus memiliki akun terdaftar di aplikasi / website Kudayu',
        'Pendaftaran akun gratis di kudayu.id/register',
        'Prediksi harus disubmit sebelum jendela tutup (H-2 race)',
        'Prediksi yang sudah dikirim tidak dapat diubah',
      ],
      prizes: [
        { rank: 'Juara 1 Musim',     reward: 'Merchandise Bundle Eksklusif + Akses Premium 1 Tahun + Feature di website' },
        { rank: 'Juara 2–3 Musim',   reward: 'Merchandise + Akses Premium 6 Bulan' },
        { rank: 'Juara 4–10 Musim',  reward: 'Merchandise Kudayu + Sertifikat Digital' },
        { rank: 'Prediksi Sempurna', reward: 'Bonus 500 poin setiap 1 prediksi sempurna' },
      ],
      organizer: 'Kudayu Community — Tim Produk',
      contact: [
        { platform: 'Instagram', value: '@kudayu.id' },
        { platform: 'Email',     value: 'liga@kudayu.id' },
        { platform: 'Discord',   value: 'discord.gg/kudayu #liga-prediksi' },
      ],
      faq: [
        { q: 'Apakah perlu berbayar untuk ikut liga?', a: 'Tidak. Liga prediksi gratis untuk semua pengguna terdaftar Kudayu.' },
        { q: 'Apa itu Akses Premium?', a: 'Akses premium memberikan fitur analitik mendalam, notifikasi race, dan akses awal ke konten eksklusif Kudayu.' },
      ],
    },
  },
  {
    slug: 'komunitas-discord-kudayu',
    title: 'Komunitas Discord Kudayu',
    category: 'Komunitas',
    categoryColor: '#5865F2',
    tagClass: 'tag-komunitas',
    status: 'ongoing',
    mode: 'online',
    date: 'Bergabung kapan saja',
    location: 'Online — Discord',
    image: '/cs-1.jpg',
    desc: 'Server Discord resmi Kudayu — diskusi race, berbagi tips judi bertanggung jawab, galeri fanart, kanal live race, dan channel khusus Jateng Derby 2026.',
    details: {
      longDesc: `Server Discord resmi Kudayu adalah rumah digital bagi ribuan penggemar pacuan kuda dan Uma Musume di Indonesia. Bergabunglah untuk mendiskusikan race, berbagi analisis kuda, posting fanart, dan terlibat langsung dalam komunitas yang aktif dan suportif.\n\nAnggota aktif mendapatkan reward XP yang bisa ditukar hadiah, dan member terpilih dapat bergabung menjadi moderator atau kontributor konten resmi Kudayu.`,
      schedule: [
        { day: 'Rutin Harian',  time: 'Setiap hari',   activity: 'Channel diskusi, race talk & galeri aktif 24 jam', location: 'Discord #general, #race-talk, #galeri' },
        { day: 'Rutin Mingguan', time: 'Setiap Jumat',  activity: 'Uma Quiz Night (pukul 20.00 WIB)',               location: 'Discord #quiz-night' },
        { day: 'Rutin Mingguan', time: 'Hari race',     activity: 'Live chat race & pantauan hasil real-time',       location: 'Discord #live-race' },
        { day: 'Rutin Bulanan',  time: 'Tiap bulan',    activity: 'Giveaway member aktif & reward XP',              location: 'Discord #giveaway' },
      ],
      regLink: 'https://discord.gg/kudayu',
      requirements: [
        'Bergabung via invite link: discord.gg/kudayu',
        'Baca dan setujui rules server di channel #rules',
        'Verifikasi akun Discord kamu (email terverifikasi)',
        'Gratis sepenuhnya — tidak ada biaya keanggotaan',
      ],
      organizer: 'Kudayu Community — Tim Moderator Discord',
      contact: [
        { platform: 'Discord',   value: 'discord.gg/kudayu' },
        { platform: 'Instagram', value: '@kudayu.id' },
      ],
      faq: [
        { q: 'Apakah server ini aman untuk semua umur?', a: 'Server ini memiliki rating 13+. Konten dewasa tidak diperbolehkan sama sekali.' },
        { q: 'Bagaimana cara mendapatkan XP?', a: 'XP diperoleh dari keaktifan chat, mengikuti event, dan kontribusi positif yang diakui moderator.' },
        { q: 'Apakah bisa bergabung jika tidak paham Uma Musume?', a: 'Tentu! Banyak anggota kami adalah penggemar murni pacuan kuda Indonesia tanpa background Uma Musume.' },
      ],
    },
  },
];

// ── Helper functions ──────────────────────────────────────────────

/** Event berdasarkan slug */
export const getEventBySlug = (slug: string) =>
  communityEvents.find((e) => e.slug === slug);

/** Event offline + hybrid (untuk halaman komunitas) */
export const getOfflineEvents = () =>
  communityEvents.filter((e) => e.mode !== 'online');

/** Event online (untuk halaman komunitas) */
export const getOnlineEvents = () =>
  communityEvents.filter((e) => e.mode === 'online');

/**
 * Preview 4 event untuk ditampilkan di halaman beranda.
 * Secara default mengambil 4 event pertama.
 * Ubah indeks di sini jika ingin mengganti event yang ditampilkan.
 */
export const getHomePreviews = (count = 4) =>
  communityEvents.slice(0, count).map((e) => ({
    slug: e.slug,
    title: e.title,
    tag: e.category,
    tagClass: e.tagClass,
    image: e.image,
    desc: e.desc,
    date: e.date,
    location: e.location,
  }));
