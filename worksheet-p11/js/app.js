
import { ambilProyek } from './api.js';
import { isiProyek, muat, pulihkan } from './state.js';
import { aturMemuat, tampilkanGalat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
    pulihkan(muat());
    pasangPendengar();

    aturMemuat(true);

    try {
        const daftar = await ambilProyek();
        isiProyek(daftar);
    } catch (error) {
        console.error("Gagal memuat proyek:", error);
        tampilkanGalat(
            "Data proyek gagal dimuat. Periksa koneksi atau coba lagi."
        );
    } finally {
        aturMemuat(false);
    }
}

mulai();
