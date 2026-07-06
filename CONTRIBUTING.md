# Panduan Kontribusi SQUID NETWORK Landing Page

Terima kasih telah tertarik untuk berkontribusi pada pengembangan website Landing Page Resmi SQUID NETWORK! Kami sangat menghargai kontribusi dari komunitas untuk menjaga kualitas, performa, dan keamanan website ini.

Berikut adalah panduan langkah demi langkah untuk berkontribusi.

---

## 🛠️ Persiapan Lingkungan Kerja

Sebelum mulai mengubah kode, pastikan Anda telah menyiapkan lingkungan kerja lokal Anda:

1. **Fork Repositori**: Lakukan *Fork* pada repositori ini ke akun GitHub Anda.
2. **Kloning Repositori**: Kloning hasil fork ke perangkat lokal Anda.
   ```bash
   git clone https://github.com/username-anda/squid-network-landing.git
   cd squid-network-landing
   ```
3. **Instal Dependensi**: Gunakan `npm` untuk menginstal seluruh pustaka yang diperlukan.
   ```bash
   npm install
   ```
4. **Jalankan Server Lokal**: Jalankan server pengembangan untuk melihat perubahan secara *real-time*.
   ```bash
   npm run dev
   ```

---

## 📐 Alur Kontribusi

Untuk mempermudah peninjauan kode, kami menerapkan alur kerja berbasis *Pull Request* (PR):

1. **Buat Branch Baru**: Hindari melakukan komit langsung ke branch `main`. Buat branch baru dengan nama yang deskriptif.
   ```bash
   git checkout -b fitur/nama-fitur-baru
   # atau untuk perbaikan bug
   git checkout -b bugfix/deskripsi-perbaikan
   ```
2. **Lakukan Perubahan**: Implementasikan perubahan Anda sesuai dengan aturan kode di bawah.
3. **Validasi Kode**: Pastikan kode bebas dari error TypeScript dan lulus pemindaian linter.
   ```bash
   npm run lint
   ```
4. **Komit Perubahan**: Tulis pesan komit yang jelas, singkat, dan deskriptif.
   ```bash
   git commit -m "fitur: menambahkan animasi interaktif pada bagian donasi"
   ```
5. **Push ke GitHub**: Kirim branch baru Anda ke repositori fork Anda.
   ```bash
   git push origin fitur/nama-fitur-baru
   ```
6. **Buat Pull Request**: Buka repositori asli di GitHub dan buat Pull Request baru dari branch Anda. Isi templat PR dengan detail kontribusi Anda.

---

## 📝 Aturan Penulisan Kode

Untuk menjaga kerapian dan konsistensi kode program di seluruh website, harap ikuti aturan berikut:

* **TypeScript**: Seluruh kode komponen wajib menggunakan TypeScript secara ketat. Hindari penggunaan tipe data `any`.
* **Kerapian Struktur**: 
  * Letakkan komponen modular baru di folder `src/components/`.
  * Simpan data konfigurasi atau teks statis di `src/config/site.ts`.
  * Import file aset gambar secara lokal dari `src/assets/images/` untuk mengoptimalkan kompilasi Vite.
* **Styling**: Gunakan utility classes dari **Tailwind CSS**. Hindari membuat file `.css` tambahan atau menulis inline-styles kecuali untuk kasus khusus seperti gambar latar dinamis.
* **Ikon**: Seluruh ikon wajib menggunakan pustaka ikon `lucide-react`.

---

## 🐛 Melaporkan Masalah (Issues)

Jika Anda menemukan bug, kendala teknis, atau memiliki saran fitur baru tetapi tidak sempat memperbaikinya sendiri, Anda dapat membuka **GitHub Issue**:
1. Pastikan masalah serupa belum pernah dilaporkan oleh orang lain sebelumnya.
2. Jelaskan langkah-langkah untuk mereproduksi bug tersebut.
3. Lampirkan screenshot atau pesan error jika ada.

Terima kasih atas dedikasi dan dukungan Anda untuk kemajuan **SQUID NETWORK**! 🦑🚀
