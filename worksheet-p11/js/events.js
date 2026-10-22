
import {
    pilihKategori,
    tambahFavorit,
    aturUlang
} from './state.js';

const filterProyek = document.querySelector("#filter-proyek");
const galeriProyek = document.querySelector("#galeri-proyek");
const tombolAturUlang = document.querySelector("#atur-ulang");

const formFilm = document.querySelector("#form-film");
const inputJudul = document.querySelector("#judul-film");
const inputGenre = document.querySelector("#genre");
const inputTahun = document.querySelector("#tahun-rilis");
const tombolSimpan = document.querySelector("#tombol-simpan");

const inputFilm = [inputJudul, inputGenre, inputTahun];

function periksaInput(input) {
    if (!input) return true;

    const nilai = input.value.trim();
    let pesan = "";

    if (nilai === "") {
        pesan = "Kolom ini wajib diisi.";
    } else if (
        input === inputTahun &&
        (
            !Number.isInteger(Number(nilai)) ||
            Number(nilai) < 1900 ||
            Number(nilai) > 2026
        )
    ) {
        pesan = "Tahun harus berupa angka antara 1900 dan 2026.";
    }

    const kolom = input.closest(".form-kolom");
    const pesanGalat = kolom?.querySelector(".pesan-galat");

    if (pesanGalat) {
        pesanGalat.textContent = pesan;
        pesanGalat.style.display = pesan ? "block" : "none";
    }

    input.setAttribute("aria-invalid", String(Boolean(pesan)));

    return pesan === "";
}

function periksaSemuaInput() {
    const semuaValid = inputFilm.every(periksaInput);

    if (tombolSimpan) {
        tombolSimpan.disabled = !semuaValid;
    }

    return semuaValid;
}

export function pasangPendengar() {
    if (filterProyek) {
        filterProyek.addEventListener("click", event => {
            const tombol = event.target.closest("button[data-kategori]");

            if (!tombol) return;

            pilihKategori(tombol.dataset.kategori.toLowerCase());
        });
    }

    if (galeriProyek) {
        galeriProyek.addEventListener("click", event => {
            const tombol = event.target.closest("button.favorit");

            if (!tombol) return;

            const id = Number(tombol.dataset.id);

            tambahFavorit(id);
        });
    }

    if (tombolAturUlang) {
        tombolAturUlang.addEventListener("click", () => {
            aturUlang();
        });
    }

    if (formFilm) {
        inputFilm.forEach(input => {
            if (!input) return;

            input.addEventListener("input", periksaSemuaInput);
            input.addEventListener("blur", () => periksaInput(input));
        });

        formFilm.addEventListener("submit", event => {
            event.preventDefault();

            if (!periksaSemuaInput()) return;

            alert("Validasi berhasil! Semua input sudah benar.");
            formFilm.reset();

            inputFilm.forEach(input => {
                if (!input) return;

                input.setAttribute("aria-invalid", "false");

                const pesanGalat = input
                    .closest(".form-kolom")
                    ?.querySelector(".pesan-galat");

                if (pesanGalat) {
                    pesanGalat.textContent = "";
                    pesanGalat.style.display = "none";
                }
            });

            if (tombolSimpan) {
                tombolSimpan.disabled = true;
            }
        });

        periksaSemuaInput();
    }
}
