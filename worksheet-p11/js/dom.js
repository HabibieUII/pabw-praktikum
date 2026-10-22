
import { profil, buatPerkenalan, formatKeahlian, saring } from './data.js';

const galeriProyek = document.querySelector("#galeri-proyek");
const filterProyek = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");

export function render(state) {
    galeriProyek.textContent = "";

    const tampil = saring(state.daftarProyek, state.kategoriAktif);

    if (tampil.length === 0) {
        pesanKosong.hidden = false;
    } else {
        pesanKosong.hidden = true;

        tampil.forEach(proyek => {
            galeriProyek.append(buatKartu(proyek, state.favorit));
        });
    }

    tandaiTombolAktif(state.kategoriAktif);
}

export function buatKartu(proyek, favorit) {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;

    const tahun = document.createElement("p");
    tahun.textContent = `Tahun: ${proyek.tahun}`;

    const kategori = document.createElement("p");
    kategori.textContent = `Kategori: ${proyek.kategori}`;

    const tombolFavorit = document.createElement("button");
    tombolFavorit.className = "favorit";
    tombolFavorit.type = "button";
    tombolFavorit.dataset.id = proyek.id;
    tombolFavorit.textContent = favorit.includes(proyek.id) ? "★" : "☆";
    tombolFavorit.setAttribute(
        "aria-label",
        favorit.includes(proyek.id)
            ? `Hapus ${proyek.judul} dari favorit`
            : `Tambahkan ${proyek.judul} ke favorit`
    );

    kartu.append(judul, tahun, kategori, tombolFavorit);

    return kartu;
}

function tandaiTombolAktif(kategoriAktif) {
    filterProyek.querySelectorAll("button[data-kategori]").forEach(tombol => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori.toLowerCase() === kategoriAktif.toLowerCase()
        );
    });
}

export function aturMemuat(memuat) {
    if (pesanMuat) {
        pesanMuat.hidden = !memuat;
    }
}

export function tampilkanGalat(pesan) {
    if (pesanGalat) {
        pesanGalat.textContent = pesan;
        pesanGalat.hidden = false;
    }
}
