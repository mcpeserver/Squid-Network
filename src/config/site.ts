/**
 * SQUID NETWORK - Site Configuration File
 * All data is centralized here so server owners can update anything in one place.
 */

export interface RankItem {
  name: string;
  price: string;
  badgeColor: string;
  borderColor: string;
}

export interface CoinItem {
  amount: string;
  bonus?: string;
  price: string;
}

export interface RuleItem {
  id: number;
  title: string;
  desc: string;
  iconName: string; // Used for selecting Lucide icons
}

export const siteConfig = {
  name: "SQUID NETWORK",
  domain: "play.squidnetwork.my.id",
  description: "Landing Page Resmi SQUID NETWORK - Server Minecraft Bedrock & Java Edition Indonesia yang ramah, seru, dan penuh petualangan.",
  
  // IP & Ports Configuration
  java: {
    ip: "play.squidnetwork.my.id",
    port: "25565",
    version: "1.16.x - 1.21.x",
  },
  bedrock: {
    ip: "play.squidnetwork.my.id",
    port: "19132",
    version: "Minecraft Bedrock (Latest)",
  },

  // Status Server (ONLINE, MAINTENANCE, OFFLINE)
  serverStatus: {
    type: "ONLINE" as "ONLINE" | "MAINTENANCE" | "OFFLINE",
    message: "🟢 Server Online & Siap Bermain!",
  },

  // Developer Watermark (RAN DEV)
  developer: {
    text: "Developed by RAN DEV • WhatsApp 0895602592430",
    waUrl: "https://wa.me/62895602592430",
    otherSitesUrl: "https://sfl.gl/x2ic",
  },

  // WhatsApp Store / Support Contact
  store: {
    phone: "0831-3712-0731",
    waUrl: "https://wa.me/6283137120731?text=Halo%20Admin%20Squid%20Network,%20saya%20ingin%20membeli%20pembelian%20di%20server.",
    donationExplanations: [
      "Perpanjangan biaya sewa server bulanan agar tetap online 24/7.",
      "Upgrade spesifikasi server (RAM, CPU, Storage) demi performa maksimal tanpa lag.",
      "Kebutuhan operasional admin dan tim pengembang dalam memelihara server.",
      "Menjaga kestabilan koneksi dan perlindungan DDoS.",
      "Pengembangan fitur baru, minigames, dan plugin kustom di masa mendatang."
    ],
  },

  // Links & Social Media
  links: {
    tutorialBedrock: "https://wa.me/6283137120731?text=Halo%20Admin,%20boleh%20minta%20tutorial%20cara%20gabung%20dari%20Bedrock%20/%20HP?",
    tutorialJava: "https://wa.me/6283137120731?text=Halo%20Admin,%20boleh%20minta%20tutorial%20cara%20gabung%20dari%20Java%20/%20PC?",
    instagram: "https://instagram.com/squidnetwork.mc",
    discord: "https://discord.gg/squidnetwork",
    tiktok: "https://tiktok.com/@squidnetwork.mc",
    vote: "https://minecraft-mp.com/server-s315655", // Vote server link
    whatsappGroup: "https://chat.whatsapp.com/squidnetwork-gp",
  },

  // Official Rules list
  rules: [
    {
      id: 1,
      title: "Dilarang Toxic & Berkata Kasar",
      desc: "Hormati seluruh pemain. Dilarang mengucapkan perkataan rasis, kotor, provokatif, ataupun melakukan pelecehan verbal di chat global maupun privat.",
      iconName: "MessageSquareWarning",
    },
    {
      id: 2,
      title: "Dilarang Menggunakan Cheat",
      desc: "Penggunaan modifikasi ilegal (Hacks, X-Ray, Fly, Auto-Clicker, dll) yang memberikan keuntungan tidak adil sangat dilarang dan akan dikenakan ban permanen.",
      iconName: "ShieldAlert",
    },
    {
      id: 3,
      title: "Dilarang Griefing & Mencuri",
      desc: "Dilarang merusak bangunan player lain (Griefing) atau mengambil barang yang bukan milik Anda tanpa izin tertulis dari pemiliknya.",
      iconName: "Flame",
    },
    {
      id: 4,
      title: "Dilarang Spam & Promosi",
      desc: "Jangan mengirim chat berulang-ulang yang mengganggu kenyamanan. Dilarang keras mempromosikan server Minecraft lain atau tautan eksternal yang mencurigakan.",
      iconName: "Megaphone",
    },
    {
      id: 5,
      title: "Dilarang Memanfaatkan Bug",
      desc: "Jika menemukan bug sistem atau celah permainan, segera laporkan ke Admin. Memanfaatkan bug demi keuntungan pribadi (Exploiting) akan ditindak tegas.",
      iconName: "Bug",
    },
    {
      id: 6,
      title: "Saling Menghormati & Adil",
      desc: "Jaga komunitas tetap menyenangkan, ramah, dan inklusif bagi seluruh kalangan pemain, baik pemula maupun pemain lama.",
      iconName: "HeartHandshake",
    },
  ] as RuleItem[],

  // Ranks Catalog
  ranks: [
    { name: "VIP", price: "Rp 15.000", badgeColor: "bg-cyan-500/15 text-cyan-400", borderColor: "border-cyan-500/30" },
    { name: "VIP+", price: "Rp 25.000", badgeColor: "bg-blue-500/15 text-blue-400", borderColor: "border-blue-500/30" },
    { name: "MVP", price: "Rp 45.000", badgeColor: "bg-teal-500/15 text-teal-400", borderColor: "border-teal-500/30" },
    { name: "MVP+", price: "Rp 65.000", badgeColor: "bg-emerald-500/15 text-emerald-400", borderColor: "border-emerald-500/30" },
    { name: "ELITE", price: "Rp 85.000", badgeColor: "bg-purple-500/15 text-purple-400", borderColor: "border-purple-500/30" },
    { name: "KNIGHT", price: "Rp 110.000", badgeColor: "bg-orange-500/15 text-orange-400", borderColor: "border-orange-500/30" },
    { name: "LORD", price: "Rp 150.000", badgeColor: "bg-rose-500/15 text-rose-400", borderColor: "border-rose-500/30" },
    { name: "KING", price: "Rp 200.000", badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/40", borderColor: "border-yellow-500/50" },
  ] as RankItem[],

  // Coins Catalog
  coins: [
    { amount: "1,000 Coins", price: "Rp 10.000" },
    { amount: "2,500 Coins", bonus: "Bonus 10%", price: "Rp 20.000" },
    { amount: "5,000 Coins", bonus: "Bonus 15%", price: "Rp 40.000" },
    { amount: "10,000 Coins", bonus: "Bonus 25%", price: "Rp 75.000" },
    { amount: "25,000 Coins", bonus: "Bonus 30%", price: "Rp 150.000" },
  ] as CoinItem[],

  // Metadata & SEO Settings
  seo: {
    title: "SQUID NETWORK - Official Minecraft Server",
    description: "Server Minecraft Bedrock & Java Edition Indonesia yang ramah, seru, dan penuh petualangan. Bergabunglah bersama komunitas kami sekarang!",
    themeColor: "#0ea5e9",
    url: "https://play.squidnetwork.my.id",
    ogImage: "/og-image.webp",
  },

  // Copyright text
  copyright: `© ${new Date().getFullYear()} SQUID NETWORK. Hak Cipta Dilindungi.`
};
