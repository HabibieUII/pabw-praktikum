
export const profil = {
    nama: "Duta Rayyan Habibie",
    nim: "25523273",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 1,
    alamat: {
        kota: "Yogyakarta"
    }
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
    if (kategori === "semua") {
        return daftar;
    }

    return daftar.filter(
        proyek => proyek.kategori?.toLowerCase() === kategori.toLowerCase()
    );
}
