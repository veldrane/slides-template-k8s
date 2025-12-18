<template>
  <Icon :icon="name" :width="size" :height="size" class="app-icon" />
</template>

<script setup>
import { Icon, addCollection } from '@iconify/vue'
import streamlineSharp from '@iconify-json/streamline-sharp/icons.json'

addCollection(streamlineSharp)

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
})
</script>

<style scoped>
.app-icon {
  color: currentColor;
  display: inline-flex;
}
</style>
