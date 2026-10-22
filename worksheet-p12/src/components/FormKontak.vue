<script setup>
import { reactive, computed } from 'vue'

const emit = defineEmits(['simpan'])

const form = reactive({
  judul: '',
  genre: '',
  tahun: ''
})

const galat = reactive({
  judul: '',
  genre: '',
  tahun: ''
})

const valid = computed(() =>
  form.judul.trim() !== '' &&
  form.genre.trim() !== '' &&
  Number.isInteger(Number(form.tahun)) &&
  Number(form.tahun) >= 1900 &&
  Number(form.tahun) <= 2026
)

function periksa() {
  galat.judul = form.judul.trim() ? '' : 'Judul film harus diisi.'
  galat.genre = form.genre.trim() ? '' : 'Genre harus diisi.'

  const tahun = Number(form.tahun)
  galat.tahun =
    Number.isInteger(tahun) && tahun >= 1900 && tahun <= 2026
      ? ''
      : 'Masukkan tahun rilis antara 1900 dan 2026.'
}

function simpanFilm() {
  periksa()
  if (!valid.value) return

  emit('simpan', {
    judul: form.judul.trim(),
    genre: form.genre.trim(),
    tahun: Number(form.tahun)
  })

  form.judul = ''
  form.genre = ''
  form.tahun = ''
  galat.judul = ''
  galat.genre = ''
  galat.tahun = ''
}
</script>

<template>
  <section id="tambah-film" class="bawah">
    <h2>Tambah Film</h2>
    <p>Masukkan informasi film yang ingin ditambahkan.</p>

    <form @submit.prevent="simpanFilm">
      <div class="form-kolom">
        <label for="judul-film">Judul Film</label>
        <input
          id="judul-film"
          v-model="form.judul"
          type="text"
          required
          @blur="periksa"
        >
        <p v-if="galat.judul" class="pesan-galat">{{ galat.judul }}</p>
      </div>

      <div class="form-kolom">
        <label for="genre">Genre</label>
        <input
          id="genre"
          v-model="form.genre"
          type="text"
          required
          @blur="periksa"
        >
        <p v-if="galat.genre" class="pesan-galat">{{ galat.genre }}</p>
      </div>

      <div class="form-kolom">
        <label for="tahun-rilis">Tahun Rilis</label>
        <input
          id="tahun-rilis"
          v-model="form.tahun"
          type="number"
          min="1900"
          max="2026"
          required
          @blur="periksa"
        >
        <p v-if="galat.tahun" class="pesan-galat">{{ galat.tahun }}</p>
      </div>

      <button type="submit" :disabled="!valid">Simpan Film</button>
    </form>
  </section>
</template>
