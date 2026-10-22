<script setup>
defineProps({
  kategoriAktif: {
    type: String,
    required: true
  }
})

defineEmits(['pilih-kategori', 'atur-ulang'])

const kategori = ['semua', 'web', 'javascript']
</script>

<template>
  <div class="filter-proyek">
    <button
      v-for="item in kategori"
      :key="item"
      type="button"
      :class="{ aktif: kategoriAktif === item }"
      @click="$emit('pilih-kategori', item)"
    >
      {{ item === 'semua' ? 'Semua' : item === 'web' ? 'Web' : 'JavaScript' }}
    </button>

    <button type="button" @click="$emit('atur-ulang')">
      Atur ulang
    </button>
  </div>
</template>
