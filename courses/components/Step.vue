<script setup lang="ts">
const props = defineProps<{ at: number }>()
</script>

<template>
  <div v-if="($clicks ?? 0) === props.at">
    <slot />
  </div>
</template>
