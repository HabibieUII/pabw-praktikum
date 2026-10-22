const galeriProyek = document.querySelector("#galeri-proyek");
const filterProyek = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

// Elemen untuk status memuat dan galat
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");

let daftarProyek = [];

function aturMemuat(memuat) {
    if (pesanMuat) {
        pesanMuat.hidden = !memuat;
    }
}

function tampilkanGalat(pesan) {
    if (pesanGalat) {
        pesanGalat.textContent = pesan;
        pesanGalat.hidden = false;
    }
}

function render(data) {
    galeriProyek.replaceChildren();

    pesanKosong.hidden = data.length > 0;

    data.forEach(proyek => {
        const kartu = document.createElement("article");
        kartu.className = "kartu";

        const judul = document.createElement("h3");
        judul.textContent = proyek.judul;

        const tahun = document.createElement("p");
        tahun.textContent = `Tahun: ${proyek.tahun}`;

        const kategori = document.createElement("p");
        kategori.textContent = `Kategori: ${proyek.kategori}`;

        kartu.append(judul, tahun, kategori);
        galeriProyek.append(kartu);
    });
}

function tandaiTombolAktif(tombolAktif) {
    filterProyek.querySelectorAll("button").forEach(tombol => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

function pasangFilter(daftar) {
    daftarProyek = daftar;

    filterProyek.addEventListener("click", event => {
        const tombol = event.target.closest("button[data-kategori]");

        if (!tombol) return;

        tandaiTombolAktif(tombol);

        const kategoriDipilih = tombol.dataset.kategori.toLowerCase();

        const hasilFilter = kategoriDipilih === "semua"
            ? daftarProyek
            : daftarProyek.filter(
                proyek => proyek.kategori.toLowerCase() === kategoriDipilih
            );

        render(hasilFilter);
    });
}

// Diekspor agar app.js dapat mengatur tampilan
export { render, pasangFilter, aturMemuat, tampilkanGalat };


/* Validasi form Tambah Film */

const formFilm = document.querySelector("#form-film");
const inputJudul = document.querySelector("#judul-film");
const inputGenre = document.querySelector("#genre");
const inputTahun = document.querySelector("#tahun-rilis");
const tombolSimpan = document.querySelector("#tombol-simpan");

const inputFilm = [inputJudul, inputGenre, inputTahun];

function periksaInput(input) {
    const nilai = input.value.trim();
    let pesan = "";

    if (nilai === "") {
        pesan = "Kolom ini wajib diisi.";
    } else if (
        input === inputTahun &&
        (!Number.isInteger(Number(nilai)) ||
            Number(nilai) < 1900 ||
            Number(nilai) > 2026)
    ) {
        pesan = "Tahun harus berupa angka antara 1900 dan 2026.";
    }

    const kolom = input.closest(".form-kolom");
    const pesanGalat = kolom.querySelector(".pesan-galat");

    pesanGalat.textContent = pesan;
    pesanGalat.style.display = pesan ? "block" : "none";

    input.setAttribute("aria-invalid", String(Boolean(pesan)));

    return pesan === "";
}

function periksaSemuaInput() {
    const semuaValid = inputFilm.every(periksaInput);
    tombolSimpan.disabled = !semuaValid;
    return semuaValid;
}

inputFilm.forEach(input => {
    input.addEventListener("input", periksaSemuaInput);
    input.addEventListener("blur", () => periksaInput(input));
});

formFilm.addEventListener("submit", event => {
    event.preventDefault();

    if (!periksaSemuaInput()) return;

    alert("Validasi berhasil! Semua input sudah benar.");
    formFilm.reset();
    tombolSimpan.disabled = true;

    inputFilm.forEach(input => {
        input.setAttribute("aria-invalid", "false");

        const pesanGalat = input
            .closest(".form-kolom")
            .querySelector(".pesan-galat");

        pesanGalat.textContent = "";
        pesanGalat.style.display = "none";
    });
});

periksaSemuaInput();
