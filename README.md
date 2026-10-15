# PABW Praktikum

## PABW Pertemuan 3

Ini adalah hasil pengerjaan tugas PABW Pertemuan 3 tentang **HTML5 Semantik, Form, Media, dan Aksesibilitas**.

Pada praktikum ini saya membuat halaman **Koleksi Film Favorit Saya** yang berisi daftar film yang pernah saya tonton.

### Isi yang dikerjakan

* Menggunakan struktur HTML5 semantik
* Menggunakan `header`, `nav`, `main`, `section`, dan `footer`
* Membuat tabel daftar film
* Menambahkan genre, tahun rilis, dan rating film
* Membuat form untuk menambahkan film
* Menggunakan `label` dan `input` dengan benar
* Menggunakan validasi seperti `required`, `min`, dan `max`
* Menambahkan gambar dengan `alt`
* Menggunakan heading secara berurutan
* Membuat navigasi dengan anchor
* Menguji aksesibilitas dan fungsi form

### Data film

* **Scream 1** — Slasher — 1996 — 9/10
* **Scary Movie 1** — Horror-Comedy — 2000 — 9/10
* **The Fast and the Furious** — Action — 2001 — 8.5/10

---

## Praktikum 4

Praktikum 4 membahas **CSS Fundamental dan Design Token**.

### Isi folder

Di dalam folder `worksheet-4/` terdapat beberapa file:

* `profil.html` → halaman profil dan koleksi film
* `tokens.css` → tempat design token
* `base.css` → CSS dasar
* `layout.css` → mengatur layout halaman
* `komponen.css` → mengatur tampilan komponen
* `tema.css` → mengatur tema terang dan gelap
* File gambar → gambar yang digunakan pada halaman

### Yang dikerjakan

* Menggunakan design token
* Memisahkan token primitive dan semantic
* Menggunakan CSS variable
* Menggunakan Flexbox
* Menggunakan `gap` dan `flex-wrap`
* Membuat tampilan responsif
* Menggunakan `rem` untuk ukuran font
* Mengatur tema terang dan gelap
* Menggunakan `prefers-color-scheme`
* Menggunakan `:focus-visible`
* Menggunakan `:user-invalid`
* Menghilangkan penggunaan `float`
* Mengurangi penggunaan warna langsung di CSS
* Menghilangkan `!important`
* Menggunakan `font: inherit` pada input

### Tema

Halaman memiliki tema terang dan gelap. Tema dapat mengikuti pengaturan sistem menggunakan `prefers-color-scheme` dan dapat diganti melalui kontrol tema pada halaman.

### Pengujian

Halaman diperiksa menggunakan DevTools dan Lighthouse untuk melihat:

* Accessibility
* Performance
* Kontras teks
* Error di Console
* Error 404 di Network
* Tampilan saat ukuran layar diperkecil

---

## Praktikum 5

Praktikum 5 merupakan lanjutan dari Praktikum 4 yang berfokus pada **Flexbox dan CSS Grid** untuk mengatur layout halaman.

### Yang dikerjakan

* Menggunakan CSS Grid untuk kerangka halaman
* Menggunakan Flexbox untuk susunan satu arah
* Mengatur layout menjadi tiga baris menggunakan Grid
* Membuat layout utama menjadi dua kolom
* Menggunakan `grid-template-areas`
* Menggunakan `repeat()` dan `minmax()`
* Menggunakan `auto-fit` agar jumlah kolom menyesuaikan ukuran layar
* Mengatur jarak antar elemen menggunakan `gap`
* Mengatur isi kartu menggunakan Flexbox dan Grid
* Mengatasi masalah teks yang terlalu panjang
* Menggunakan `min-width: 0`
* Menggunakan `overflow-wrap: anywhere`
* Menguji tampilan pada ukuran layar 360px dan 1280px
* Mempertahankan fitur tema terang dan gelap dari praktikum sebelumnya

---

## Praktikum 6

Praktikum 6 merupakan lanjutan dari praktikum sebelumnya yang berfokus pada **Responsive Web Design dan Media Query**.

### Yang dikerjakan

* Membuat layout yang responsif
* Menggunakan CSS Media Query
* Menentukan breakpoint pada `48rem` dan `60rem`
* Mengubah galeri dari satu kolom menjadi dua kolom pada `48rem`
* Menampilkan sidebar bersanding dengan konten pada `60rem`
* Menyesuaikan layout berdasarkan lebar layar
* Menguji tampilan pada ukuran layar yang berbeda
* Menentukan breakpoint berdasarkan kebutuhan layout, bukan perangkat tertentu

### Bantuan AI

Dalam pengerjaan tugas ini saya menggunakan AI sebagai bantuan untuk memahami materi, mencari kesalahan pada kode, dan membantu proses perbaikan CSS.

Kode dan tampilan akhir saya sesuaikan dengan kebutuhan tugas.

### Keaslian

Tampilan halaman saya buat dan sesuaikan sendiri, bukan menyalin hasil pekerjaan teman.

---

## Praktikum 8

Praktikum 8 membahas **JavaScript ES6+, Fungsi, Array, dan Debugging**.

Pada praktikum ini saya mempelajari penggunaan JavaScript untuk menyimpan data, membuat fungsi, mengolah array, dan memeriksa kesalahan melalui Console browser.

### Isi yang dikerjakan

* Menghubungkan file JavaScript menggunakan `type="module"`
* Menggunakan `const` dan `let`
* Menggunakan template literal, optional chaining (`?.`), dan nullish coalescing (`??`)
* Membuat fungsi menggunakan parameter dan `return`
* Mengolah data film menggunakan array of objects
* Menggunakan `map()`, `filter()`, dan `find()`
* Menampilkan data menggunakan `console.table()`
* Menguji penyalinan objek menggunakan spread syntax (`...`)
* Menguji pengurutan salinan array menggunakan `sort()`
* Memahami perbedaan `undefined` dan `null`
* Menguji perbedaan operasi teks dan angka
* Membaca pesan kesalahan melalui Console browser

### Pengujian

Halaman dijalankan menggunakan Live Server dan diperiksa melalui Console browser untuk memastikan JavaScript terhubung dan kode menghasilkan keluaran yang sesuai.

Pengujian juga dilakukan pada fungsi, array methods, penyalinan objek, dan pengurutan salinan array agar data asli tetap tidak berubah.

### Bantuan AI

Dalam pengerjaan tugas ini saya menggunakan AI sebagai alat bantu untuk memahami materi JavaScript, mencari kesalahan pada kode, dan membantu proses debugging.

Kode dijalankan dan diuji melalui VS Code dan browser. Hasil akhir tetap saya periksa dan sesuaikan dengan kebutuhan tugas.

---

## Praktikum 9

Praktikum 9 membahas **DOM, Event, dan Interaktivitas** menggunakan JavaScript.

Pada praktikum ini halaman koleksi film dikembangkan dengan menambahkan daftar proyek yang dapat difilter serta validasi interaktif pada formulir penambahan film.

### Isi yang dikerjakan

* Menghubungkan file JavaScript menggunakan `type="module"`
* Memilih elemen HTML menggunakan `document.querySelector()`
* Mengambil beberapa elemen menggunakan `document.querySelectorAll()`
* Membuat elemen HTML menggunakan `document.createElement()`
* Mengisi teks elemen menggunakan `textContent`
* Menambahkan elemen ke halaman menggunakan `append()`
* Menghapus isi elemen menggunakan `replaceChildren()`
* Menampilkan daftar proyek secara dinamis
* Membuat filter proyek berdasarkan kategori Web dan JavaScript
* Menggunakan `addEventListener()` untuk menangani event
* Menggunakan event delegation melalui `event.target.closest()`
* Mengatur tombol filter aktif menggunakan `classList.toggle()`
* Menampilkan pesan ketika tidak ada proyek yang sesuai dengan filter
* Membuat validasi formulir penambahan film secara interaktif
* Memeriksa input kosong dan memastikan tahun rilis berupa angka dalam rentang 1900–2026
* Menampilkan pesan kesalahan pada kolom yang tidak valid
* Mengatur status tombol simpan berdasarkan validitas input
* Mencegah pengiriman formulir ketika data belum valid menggunakan `event.preventDefault()`
* Menguji interaksi halaman melalui browser dan Console

### Fitur yang dibuat

**1. Daftar proyek dan filter kategori**

Halaman menampilkan daftar proyek dalam bentuk kartu. Pengguna dapat memfilter proyek berdasarkan kategori Web dan JavaScript.

**2. Validasi formulir interaktif**

Formulir penambahan film dilengkapi validasi untuk memastikan data yang dimasukkan sesuai ketentuan. Pesan kesalahan ditampilkan ketika input tidak valid.

### Bantuan AI

Dalam pengerjaan tugas ini saya menggunakan AI sebagai alat bantu untuk memahami materi DOM, event, dan interaktivitas, serta membantu mencari kesalahan pada kode JavaScript.

Kode dijalankan dan diuji melalui VS Code dan browser. Hasil akhir saya periksa dan sesuaikan dengan kebutuhan tugas.

---

## Praktikum 10

Praktikum 10 membahas **JavaScript Asinkron: fetch, Promise, dan JSON**.

Pada praktikum ini halaman profil dikembangkan agar dapat mengambil data proyek secara asinkron dari berkas JSON, memproses respons, dan menampilkan data ke halaman menggunakan JavaScript.

### Isi yang dikerjakan

* Menggunakan `fetch()` untuk mengambil data proyek
* Memahami konsep Promise dan penggunaan `await`
* Menggunakan `async function` untuk menjalankan proses asinkron
* Memeriksa status respons HTTP menggunakan `respons.ok` dan `respons.status`
* Mengubah respons menjadi data JavaScript menggunakan `respons.json()`
* Menggunakan `try`, `catch`, dan `finally` untuk menangani proses dan kesalahan
* Membuat fungsi `ambilProyek` di dalam `js/api.js`
* Menggunakan `export` dan `import` untuk menghubungkan beberapa berkas JavaScript
* Menyimpan data proyek dalam berkas `data/proyek.json`
* Menampilkan data proyek secara dinamis dalam bentuk kartu
* Menampilkan indikator loading ketika data sedang dimuat
* Menampilkan pesan kesalahan ketika data gagal dimuat
* Menampilkan keadaan kosong ketika tidak ada proyek yang tersedia
* Mempertahankan fitur filter kategori proyek
* Menguji proses pengambilan data melalui Console dan Network pada DevTools browser

### Fitur yang dibuat

**1. Pengambilan data proyek**

Data proyek diambil menggunakan `fetch()` dari sumber JSON. Respons diperiksa terlebih dahulu sebelum isinya dibaca menggunakan `respons.json()`.

**2. Tampilan kartu proyek**

Data yang berhasil diambil ditampilkan sebagai kartu proyek yang memuat judul, tahun, dan kategori.

**3. Indikator loading dan penanganan error**

Halaman menampilkan pesan ketika data sedang dimuat dan menyediakan pesan kesalahan apabila proses pengambilan data gagal.

**4. Filter kategori proyek**

Pengguna dapat menyaring daftar proyek berdasarkan kategori yang tersedia tanpa harus memuat ulang halaman.

### Pengujian

Halaman dijalankan melalui server lokal dan diperiksa menggunakan Console serta Network pada DevTools browser. Pengujian mencakup pengambilan data JSON, status respons HTTP, tampilan kartu proyek, filter kategori, indikator loading, dan penanganan kesalahan.

### Bantuan AI

Dalam pengerjaan tugas ini saya menggunakan AI sebagai alat bantu untuk memahami materi JavaScript asinkron, penggunaan `fetch()`, Promise, `async/await`, JSON, dan penanganan error.

Kode dijalankan dan diuji melalui VS Code dan browser. Hasil akhir saya periksa dan sesuaikan dengan kebutuhan tugas.

### Keaslian

Praktikum ini merupakan pengembangan dari proyek praktikum sebelumnya. Kode dan fitur disesuaikan dengan instruksi worksheet, kemudian diperiksa dan diuji untuk memastikan fungsinya berjalan sesuai kebutuhan.
