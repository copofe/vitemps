<script setup lang='ts'>
import { useToggle } from '@vueuse/core';
import isDark from '@/hooks/dark';

const toggle: () => void = useToggle(isDark);
</script>

<template>
  <div aria-label="Toggle Theme" class="icon-button" @click="toggle">
    <ri-moon-line v-show="isDark" />
    <ri-sun-line v-show="!isDark" />
  </div>
</template>
