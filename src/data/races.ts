// Data races dan event pacuan kuda Indonesia (berdasarkan data sarga.co)
export interface Race {
  id: string;
  name: string;
  date: string;
  location: string;
  distance: string;
  grade: 'G1' | 'G2' | 'G3' | 'Listed' | 'Open';
  prize: string;
  status: 'upcoming' | 'ongoing' | 'finished';
  participants?: string[];
  winner?: string;
  winnerImage?: string;
  time?: string;
  image: string;
  description: string;
}

export const races: Race[] = [
  {
    id: "jateng-derby-2026",
    name: "IHR: Jateng Derby 2026",
    date: "2026-03-15",
    location: "Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta",
    distance: "800m – 2000m",
    grade: "G1",
    prize: "Rp 1.000.000.000",
    status: "upcoming",
    participants: [
      "Roman The King", "Kasmaran", "Banurasmi", "Paco Eclipse",
      "Better Sweet", "Kana Eclipse", "Arceus Nagari", "Dragon",
      "Naga Sembilan", "Sunglow Nagari", "Cronos Eclipse", "Whoosh Agis",
      "Nara Eclipse", "Dominator", "Danantara"
    ],
    image: "/stadion-1.png",
    description: "Puncak pacuan kuda Jawa Tengah — arena di mana kuda-kuda terbaik, joki elite, dan stable ternama bersaing memperebutkan supremasi regional. Lebih dari sekadar ajang olahraga, Jateng Derby adalah simbol prestise dan keunggulan kompetitif."
  },
  {
    id: "piala-raja-hb-x-2025",
    name: "IHR: Piala Raja Hamengku Buwono X 2025",
    date: "2025-11-09",
    location: "Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta",
    distance: "800m – 2000m",
    grade: "G1",
    prize: "Rp 1.000.000.000",
    status: "finished",
    participants: [
      "Power Rangers", "Falling In Love", "P. Bless Virginia", "Kasmaran",
      "Remo Eclipse", "Harata Eclipse", "Dragon", "P. Super Montong",
      "Kana Eclipse", "War Kudeta", "Arceus Nagari", "Sunglow Nagari",
      "Triple's", "Monochrome", "Flamboyan"
    ],
    winner: "Triple's JATENG (Kelas Terbuka 2000M)",
    winnerImage: "/kuda-1.png",
    time: "2:08.5",
    image: "/stadion-2.png",
    description: "Rangkaian penutup musim 'The Race of The Rising Star'. 120 kuda dari 10 provinsi bersaing memperebutkan 18 kelas bergengsi dan trofi kehormatan langsung dari Sultan Hamengkubuwono X untuk pemenang Kelas Terbuka 2000m."
  },
  {
    id: "kejurnas-pordasi-59-seri-ii-2025",
    name: "Kejurnas Pacuan Kuda PORDASI ke-59 Seri II 2025",
    date: "2025-10-19",
    location: "Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta",
    distance: "1000m – 1600m",
    grade: "G1",
    prize: "Rp 600.000.000",
    status: "finished",
    participants: [
      "Rastaban", "Kasmaran", "Ravelio", "Cansu", "Putra Raja",
      "Rajadewi", "Fiona of Khalim", "Sultan Nagari", "Aurora of Khalim",
      "Yuwaraja", "She's Coming", "War Kudeta", "Mc Queen",
      "Putra DNA", "Arbay Star", "Naga Maja"
    ],
    winner: "Yuwaraja JABAR (Kelas C 1600M)",
    winnerImage: "/kuda-5.jpg",
    time: "1:41.8",
    image: "/stadion-3.png",
    description: "152 kuda pacu terbaik dari 12 provinsi bersaing pada Kejurnas PORDASI ke-59 Seri II. Total hadiah Rp600 juta diperebutkan melalui 17 kelas bergengsi, termasuk Kelas A Super Sprint dan A Star of Stars. Sejarah baru lahir dengan juara umum peraih Piala Presiden Republik Indonesia."
  },
  {
    id: "ihr-jabar-derby-2025",
    name: "IHR: Jabar Derby 2025",
    date: "2025-08-10",
    location: "Lapangan Pacuan Kuda Arcamanik, Jawa Barat",
    distance: "1000m – 1800m",
    grade: "G2",
    prize: "Rp 400.000.000",
    status: "finished",
    participants: ["War Kudeta", "Rajadewi", "Aurora of Khalim", "Cansu", "Sultan Nagari"],
    winner: "Rajadewi JABAR",
    winnerImage: "/kuda-3.jpg",
    time: "1:58.3",
    image: "/stadion-1.png",
    description: "Ajang derby berkelas dari Jawa Barat yang menampilkan kuda-kuda unggulan lokal bersaing di lintasan Arcamanik. Rajadewi tampil perkasa dan mendominasi dari awal hingga akhir lintasan."
  },
  {
    id: "ihr-jatim-championship-2025",
    name: "IHR: Jatim Championship 2025",
    date: "2025-07-06",
    location: "Lapangan Pacuan Kuda Kenjeran, Jawa Timur",
    distance: "1000m – 2000m",
    grade: "G2",
    prize: "Rp 450.000.000",
    status: "finished",
    participants: ["Dragon", "Better Sweet", "Whoosh Agis", "Flamboyan", "Burrito Libre"],
    winner: "Dragon JATIM",
    winnerImage: "/kuda-4.jpg",
    time: "1:09.8",
    image: "/stadion-2.png",
    description: "Ajang bergengsi tahunan Jawa Timur yang menjadi batu loncatan kuda-kuda muda menuju Kejurnas. Dragon tampil mengejutkan dengan kemenangan sprint yang memukau di depan ribuan penonton Kenjeran."
  },
  {
    id: "kejurnas-pordasi-59-seri-i-2025",
    name: "Kejurnas Pacuan Kuda PORDASI ke-59 Seri I 2025",
    date: "2025-05-18",
    location: "Lapangan Pacuan Kuda Sultan Agung, DI Yogyakarta",
    distance: "1000m – 2000m",
    grade: "G1",
    prize: "Rp 600.000.000",
    status: "finished",
    participants: ["War Kudeta", "Dragon", "Sunglow Nagari", "Arceus Nagari", "Triple's"],
    winner: "War Kudeta JABAR (Kelas Terbuka Sprint)",
    winnerImage: "/kuda-2.png",
    time: "1:14.2",
    image: "/stadion-3.png",
    description: "Seri pertama Kejuaraan Nasional Pacuan Kuda PORDASI ke-59 yang mempertemukan ratusan kuda terbaik dari berbagai provinsi. War Kudeta menegaskan dominasinya di kelas sprint terbuka dengan kemenangan dramatis."
  }
];

// Helper functions
export function getUpcomingRaces(): Race[] {
  return races
    .filter(race => race.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getFinishedRaces(): Race[] {
  return races
    .filter(race => race.status === 'finished')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRaceById(id: string): Race | undefined {
  return races.find(race => race.id === id);
}

export function getG1Races(): Race[] {
  return races.filter(race => race.grade === 'G1');
}
