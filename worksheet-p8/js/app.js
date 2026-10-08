const profil = {
    nama: "Duta Rayyan Habibie",
    nim: "25523273",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 1,
    alamat: {
        kota: "Yogyakarta"
    }
};

let pilihanAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, seorang ${profil.peran}.`;

const kota = profil.alamat?.kota ?? "Belum diisi";
const jumlahProyek = profil.jumlahProyek ?? 0;

console.log(kalimat);
console.log("NIM:", profil.nim);
console.log("Keahlian:", profil.keahlian);
console.log("Jumlah proyek:", jumlahProyek);
console.log("Kota:", kota);
console.log("Tipe jumlah proyek:", typeof jumlahProyek);
console.log("Pilihan aktif:", pilihanAktif);

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarFilm = [
    {
        judul: "Scream 1",
        genre: "Slasher",
        tahun: 1996,
        rating: 9
    },
    {
        judul: "Scary Movie 1",
        genre: "Horror-Comedy",
        tahun: 2000,
        rating: 9
    },
    {
        judul: "The Fast and the Furious",
        genre: "Action",
        tahun: 2001,
        rating: 8.5
    }
];

// map: mengambil judul semua film
const judulFilm = daftarFilm.map(film => film.judul);

// filter: mengambil film dengan rating minimal 9
const filmRatingTinggi = daftarFilm.filter(film => film.rating >= 9);

// find: mencari film berdasarkan judul
const filmDicari = daftarFilm.find(
    film => film.judul === "Scream 1"
);

console.log("Semua data film:");
console.table(daftarFilm);

console.log("Judul film:", judulFilm);
console.log("Film rating minimal 9:", filmRatingTinggi);
console.log("Film yang ditemukan:", filmDicari);

console.log("=== Uji salinan objek ===");

const salinanProfil = { ...profil };
salinanProfil.nama = "Nama Uji";

console.log("Profil asli:", profil.nama);
console.log("Profil salinan:", salinanProfil.nama);

console.log("=== Uji tiga kasus ===");

// Kasus 1: properti tidak tersedia
console.log("Sutradara:", daftarFilm[0].sutradara);

// Kasus 2: elemen HTML tidak ditemukan
const elemenUji = document.querySelector("#elemen-tidak-ada");
console.log("Elemen uji:", elemenUji);

// Kasus 3: teks harus dikonversi menjadi angka
const nilaiInput = "2001";
console.log("Teks + 1:", nilaiInput + 1);
console.log("Angka + 1:", Number(nilaiInput) + 1);
console.log(variabelYangTidakAda);