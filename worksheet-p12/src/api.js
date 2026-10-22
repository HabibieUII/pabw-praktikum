
const ALAMAT = 'https://raw.githubusercontent.com/HabibieUII/pabw-praktikum/refs/heads/main/worksheet-p10/data/proyek.json';

export async function ambilProyek() {
    try {
        const respons = await fetch(ALAMAT);

        if (!respons.ok) {
            throw new Error(`HTTP error: ${respons.status}`);
        }

        const data = await respons.json();

        console.log('Bentuk data:', typeof data);
        console.log('Data pertama:', data[0]);
        console.log('JSON.stringify:', JSON.stringify(data[0]));

        return data;
    } catch (error) {
        console.error('Gagal mengambil data proyek:', error);
        throw error;
    }
}
