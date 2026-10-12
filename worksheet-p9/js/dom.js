
const galeriProyek = document.querySelector("#galeri-proyek");
const filterProyek = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

console.log("Galeri proyek:", galeriProyek);
console.log("Filter proyek:", filterProyek);
console.log("Pesan kosong:", pesanKosong);

const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true,
        kategori: "Web"
    },
    {
        judul: "Katalog Film Favorit",
        tahun: 2026,
        selesai: true,
        kategori: "JavaScript"
    }
];


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

        const status = document.createElement("p");
        status.textContent = proyek.selesai
            ? "Status: Selesai"
            : "Status: Dalam pengerjaan";

        const kategori = document.createElement("p");
        kategori.textContent = `Kategori: ${proyek.kategori}`;

        kartu.append(judul, tahun, status, kategori);
        galeriProyek.append(kartu);
    });
}

function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter-proyek button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}


filterProyek.addEventListener("click", event => {
    const tombol = event.target.closest("button[data-kategori]");

    if (!tombol) return;

    tandaiTombolAktif(tombol);

    const kategoriDipilih = tombol.dataset.kategori;

    filterProyek.querySelectorAll("button").forEach(button => {
        button.classList.toggle("aktif", button === tombol);
    });

    const hasilFilter = kategoriDipilih === "semua"
        ? daftarProyek
        : daftarProyek.filter(
            proyek => proyek.kategori === kategoriDipilih
        );

    render(hasilFilter);
});

render(daftarProyek);

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
