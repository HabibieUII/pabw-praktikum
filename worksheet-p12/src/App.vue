<script setup>
import { reactive, computed, onMounted, watch } from 'vue'
import { profil, saring } from './data.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const KUNCI = 'pabw-p11'

const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  memuat: true,
  galat: '',
  film: [
    {
      id: 1,
      judul: 'Scream 1',
      genre: 'Slasher',
      tahun: 1996,
      gambar: '/scream.jpg',
      rating: '9/10'
    },
    {
      id: 2,
      judul: 'Scary Movie 1',
      genre: 'Horror-Comedy',
      tahun: 2000,
      gambar: '/scary-movie.jpg',
      rating: '9/10'
    },
    {
      id: 3,
      judul: 'The Fast and the Furious',
      genre: 'Action',
      tahun: 2001,
      gambar: '/fast-furious.jpg',
      rating: '8.5/10'
    }
  ]
})

const proyekTampil = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)

function pilihKategori(kategori) {
  state.kategoriAktif = kategori
}

function toggleFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter(item => item !== id)
  } else {
    state.favorit.push(id)
  }
}

function aturUlang() {
  state.kategoriAktif = 'semua'
  state.favorit = []
}

function simpanFilm(filmBaru) {
  state.film.push({
    ...filmBaru,
    id: Date.now(),
    gambar: '',
    rating: 'Belum dinilai'
  })
}

watch(
  state,
  nilai => {
    localStorage.setItem(
      KUNCI,
      JSON.stringify({
        versi: 2,
        kategoriAktif: nilai.kategoriAktif,
        favorit: nilai.favorit
      })
    )
  },
  { deep: true }
)

onMounted(async () => {
  try {
    const tersimpan = JSON.parse(localStorage.getItem(KUNCI))

    if (tersimpan?.versi === 2) {
      if (typeof tersimpan.kategoriAktif === 'string') {
        state.kategoriAktif = tersimpan.kategoriAktif
      }

      if (Array.isArray(tersimpan.favorit)) {
        state.favorit = tersimpan.favorit
      }
    }
  } catch {
    localStorage.removeItem(KUNCI)
  }

  try {
    state.memuat = true
    state.galat = ''
    state.daftarProyek = await ambilProyek()
  } catch {
    state.galat = 'Data proyek gagal dimuat. Periksa koneksi atau coba lagi.'
  } finally {
    state.memuat = false
  }
})
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <section id="daftar-film" class="utama">
        <h2>Daftar Film Favorit</h2>

        <p>
          Berikut adalah beberapa film favorit saya beserta genre,
          tahun rilis, dan ratingnya.
        </p>

        <div class="galeri">
          <article v-for="film in state.film" :key="film.id" class="kartu">
            <img
              v-if="film.gambar"
              :src="film.gambar"
              :alt="`Poster film ${film.judul}`"
            >

            <div class="info-film">
              <h3>{{ film.judul }}</h3>
              <p>Genre: {{ film.genre }}</p>
              <p>Tahun Rilis: {{ film.tahun }}</p>
              <p>Rating: {{ film.rating }}</p>
            </div>
          </article>
        </div>
      </section>

      <FormKontak @simpan="simpanFilm" />

      <DaftarProyek
        :daftar-proyek="proyekTampil"
        :kategori-aktif="state.kategoriAktif"
        :favorit="state.favorit"
        :memuat="state.memuat"
        :galat="state.galat"
        @pilih-kategori="pilihKategori"
        @atur-ulang="aturUlang"
        @toggle-favorit="toggleFavorit"
      />

      <section class="bawah">
        <h2>Data dari API</h2>
        <p role="status" aria-live="polite">
          {{ state.memuat ? 'Memuat data...' : state.galat || `Berhasil memuat ${state.daftarProyek.length} proyek.` }}
        </p>
      </section>

      <section id="tentang-saya" class="sisi">
        <h2>Tentang Saya</h2>
        <p>
          Saya menyukai berbagai jenis film, terutama film dengan genre action
          dan horror slasher. Halaman ini berisi beberapa film yang menjadi favorit saya.
        </p>
      </section>
    </main>

    <footer>
      <p>Duta Rayyan Habibie · 25523273 · 2026</p>
    </footer>
  </div>
</template>
