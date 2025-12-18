<template>
  <div class="card" v-if="show">
    <div v-if="title" class="card-title">{{ title }}</div>

    <ul class="icon-list">
      <li v-for="(it, i) in items" :key="i">
        <AppIcon :name="it.icon" :size="20" />
        <span>{{ it.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  show: { type: Boolean, default: true },
  items: { type: Array, default: () => [] },
})
</script>

<style scoped>
.card {
  border-radius: 8px;
  padding: 4px 16px;
  background: var(--color-bg-soft);
}

.card-title {
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-text-title);
}

.icon-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 2px;
}

.icon-list li {
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  column-gap: 2px;
}

.ico {
  line-height: 1;
  font-size: 1.1em;
  opacity: 0.9;
}

.txt {
  color: #1f2933;
}
</style>
