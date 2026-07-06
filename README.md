# SQUID NETWORK - Landing Page Informasi Resmi

Halo! Selamat datang di repositori Landing Page Informasi Resmi untuk **SQUID NETWORK**. Website ini dirancang khusus untuk mempermudah pemain baru maupun lama dalam mengakses informasi penting seputar server Minecraft SQUID NETWORK (Bedrock & Java Edition).

Website ini dibangun dengan fokus pada performa tinggi, tampilan modern yang ramah pengguna (user-friendly), serta responsivitas penuh di berbagai perangkat mulai dari HP kecil hingga monitor ultrawide.

---

## 🎨 Preview Tampilan
Berikut adalah aset utama yang digunakan dalam website:
* **Official Server Logo**: `/public/logo.png`
* **Cinematic Hero Background**: `/public/hero-bg.webp`

---

## 🚀 Teknologi yang Digunakan
Website ini dikembangkan menggunakan tumpukan teknologi modern berstandar industri:
* **React 19 & Vite** - Framework frontend super cepat dan ringan.
* **TypeScript** - Menjamin keamanan tipe data dan kerapian kode program.
* **Tailwind CSS v4** - Desain UI modern dengan pendekatan utility-first.
* **Framer Motion** - Animasi transisi dan efek floating yang halus dan dinamis.
* **Lucide React** - Set ikon vektor modern beresolusi tinggi.
* **Google Fonts (Inter & Space Grotesk)** - Tipografi premium untuk kenyamanan membaca.

---

## 📁 Struktur Folder Proyek
Berikut adalah struktur direktori proyek ini:
```text
/
├── config/
│   └── site.ts                # Duplikat file konfigurasi pusat (re-export)
├── public/
│   ├── favicon.ico            # Favicon tab browser
│   ├── logo.png               # Logo resmi server
│   ├── hero-bg.webp           # Background cinematic section hero
│   ├── og-image.webp          # Gambar metadata Open Graph (SEO sharing)
│   └── manifest.webmanifest   # Konfigurasi instalasi aplikasi web
├── src/
│   ├── components/            # Komponen-komponen modular UI
│   │   ├── Header.tsx         # Navbar sticky & Developer Banner
│   │   ├── Hero.tsx           # Jumbotron utama, tombol CTA, status online
│   │   ├── ServerInfo.tsx     # Detail IP, port, versi & copy button
│   │   ├── Rules.tsx          # Card daftar aturan komunitas
│   │   ├── Ranks.tsx          # Katalog paket Rank Donasi
│   │   ├── Coins.tsx          # Paket top-up Coins server
│   │   ├── Community.tsx      # Link grup WA, Discord, dan sosial media
│   │   └── Footer.tsx         # Footer legalitas, logo, & watermark
│   ├── config/
│   │   └── site.ts            # Pusat data utama konfigurasi server SQUID
│   ├── App.tsx                # File utama penggabung komponen & scroll tracker
│   ├── index.css              # Setup Tailwind CSS v4 & custom font
│   └── main.tsx               # Entry point React
├── index.html                 # Struktur utama HTML
├── package.json               # Daftar dependensi & script proyek
├── tsconfig.json              # Konfigurasi aturan TypeScript
├── vite.config.ts             # Pengaturan bundler Vite
├── vercel.json                # Konfigurasi routing & SPA fallback untuk Vercel
└── LICENSE                    # Lisensi resmi MIT untuk repositori GitHub
```

---

## 💻 Panduan Instalasi Lokal

Jika kamu ingin menjalankan atau mengedit website ini di komputermu sendiri, ikuti langkah-langkah mudah berikut:

### Prasyarat
Pastikan komputer kamu sudah terinstal **Node.js** (rekomendasi versi 18 atau ke atas).

### Langkah-langkah:
1. **Unduh berkas proyek** atau clone repositori ini ke foldermu.
2. **Buka Terminal / Command Prompt** di folder tersebut, lalu instal semua pustaka dependensi dengan mengetik:
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan lokal** dengan mengetik:
   ```bash
   npm run dev
   ```
4. Buka browsermu dan akses alamat **`http://localhost:3000`**. Selesai! Kamu sekarang bisa melihat website berjalan secara lokal.

---

## ⚙️ Panduan Kustomisasi & Update

Kamu **tidak perlu menyentuh atau merubah kode komponen** untuk mengganti informasi server. Cukup edit satu berkas utama di: **`src/config/site.ts`**.

### 1. Cara Mengubah Data Server (IP, Port, Versi)
Buka `src/config/site.ts` dan ubah nilai pada bagian `java` atau `bedrock`:
```typescript
java: {
  ip: "play.squidnetwork.my.id", // Ganti dengan IP Java kamu
  port: "25565",
  version: "1.16.x - 1.21.x",     // Ganti dengan versi server kamu
},
bedrock: {
  ip: "play.squidnetwork.my.id", // Ganti dengan IP Bedrock kamu
  port: "19132",
  version: "Minecraft Bedrock (Latest)",
}
```

### 2. Cara Mengubah Kontak WhatsApp Toko
Untuk mengubah nomor WhatsApp tujuan pembelian Rank/Coins:
```typescript
store: {
  phone: "0831-3712-0731",       // Nomor yang ditampilkan di layar
  waUrl: "https://wa.me/6283137120731?text=Halo...", // Ganti dengan link wa.me nomor barumu
}
```

### 3. Cara Mengubah Link Media Sosial & Komunitas
Buka bagian `links` dan ganti URL di bawah dengan link komunitas kamu:
```typescript
links: {
  instagram: "https://instagram.com/username_kamu",
  discord: "https://discord.gg/invite_baru",
  tiktok: "https://tiktok.com/@username_kamu",
  vote: "https://minecraft-mp.com/...", // Link voting server
  whatsappGroup: "https://chat.whatsapp.com/...", // Link grup WA
}
```

### 4. Cara Mengubah Logo & Gambar Background
* **Ganti Logo**: Timpa file `/public/logo.png` dengan logo barumu. Pastikan namanya tetap `logo.png` dan disarankan berukuran kotak (resolusi 512x512 piksel).
* **Ganti Background Hero**: Timpa file `/public/hero-bg.webp` dengan screenshot sinematik Minecraft barumu. Pastikan namanya tetap `hero-bg.webp` dan disarankan memiliki aspek rasio 16:9.

---

## ☁️ Cara Deploy ke Vercel

Proyek ini telah dikonfigurasi dengan `vercel.json` untuk menjamin rute URL Single Page Application (SPA) berjalan mulus tanpa masalah halaman "404 Not Found" saat di-refresh.

Sangat mudah untuk mempublikasikan website ini agar bisa diakses oleh semua orang melalui internet menggunakan **Vercel** (Gratis):

1. Unggah kode proyek ini ke akun **GitHub** kamu.
2. Masuk ke dashboard [Vercel](https://vercel.com) dan hubungkan akun GitHub-mu.
3. Klik **"Add New Project"** dan pilih repositori proyek ini.
4. Pada bagian **Build and Output Settings**, biarkan default (Vercel akan mendeteksi Vite secara otomatis).
5. Klik **"Deploy"**. Dalam waktu kurang dari 1 menit, websitemu sudah aktif online!

---

## 🛡️ Lisensi

Proyek ini dilisensikan secara resmi di bawah **Lisensi MIT** (tercantum dalam file `LICENSE` pada direktori utama). Kamu bebas menggunakan, memodifikasi, mendistribusikan, dan membagikan website ini untuk server komunitasmu secara gratis dan komersial dengan tetap menyertakan hak cipta asli.

---

## 🤝 Ucapan Penutup

Terima kasih telah mempercayakan pembuatan Landing Page Resmi ini kepada **RAN DEV**! Kami berharap website ini dapat membantu komunitas **SQUID NETWORK** semakin berkembang pesat, ramai pemain, dan semakin sukses di masa depan. 

Jika ada pertanyaan lebih lanjut, jangan ragu untuk berdiskusi dengan kami melalui nomor WhatsApp developer yang tertera di bagian watermark atas atau footer website.

Selamat berpetualang dan selamat bermain! 🦑🏰⛏️
