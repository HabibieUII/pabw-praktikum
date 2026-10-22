<script setup>
import { buatPerkenalan, formatKeahlian } from '../data.js'

defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">Tema gelap</label>

    <div class="header-baris">
      <div>
        <h1>Koleksi Film Favorit Saya</h1>
        <p>{{ buatPerkenalan(profil) }}</p>
        <p>Keahlian: {{ formatKeahlian(profil.keahlian) }}</p>
      </div>

      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#daftar-film">Daftar Film</a></li>
          <li><a href="#tambah-film">Tambah Film</a></li>
          <li><a href="#tentang-saya">Tentang Saya</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
