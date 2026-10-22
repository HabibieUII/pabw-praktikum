<script setup>
import TombolFilter from './TombolFilter.vue'

defineProps({
  daftarProyek: {
    type: Array,
    required: true
  },
  kategoriAktif: {
    type: String,
    required: true
  },
  favorit: {
    type: Array,
    required: true
  },
  memuat: Boolean,
  galat: String
})

defineEmits(['pilih-kategori', 'atur-ulang', 'toggle-favorit'])
</script>

<template>
  <section id="daftar-proyek" class="bawah">
    <h2>Daftar Proyek</h2>

    <TombolFilter
      :kategori-aktif="kategoriAktif"
      @pilih-kategori="$emit('pilih-kategori', $event)"
      @atur-ulang="$emit('atur-ulang')"
    />

    <p v-if="memuat" role="status">Memuat data...</p>
    <p v-else-if="galat" role="alert">{{ galat }}</p>

    <div v-else-if="daftarProyek.length" class="galeri">
      <article
        v-for="proyek in daftarProyek"
        :key="proyek.id"
        class="kartu"
      >
        <h3>{{ proyek.judul }}</h3>
        <p>Tahun: {{ proyek.tahun }}</p>
        <p>Kategori: {{ proyek.kategori }}</p>

        <button
          type="button"
          class="favorit"
          :aria-label="favorit.includes(proyek.id)
            ? `Hapus ${proyek.judul} dari favorit`
            : `Tambahkan ${proyek.judul} ke favorit`"
          @click="$emit('toggle-favorit', proyek.id)"
        >
          {{ favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </article>
    </div>

    <p v-else>Tidak ada proyek yang ditemukan.</p>
  </section>
</template>
