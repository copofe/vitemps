<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreen();

</script>

<template>
  <div aria-label="Toggle Fullscreen" class="icon-button" @click="toggle">
    <ri-fullscreen-exit-line v-show="isFullscreen" />
    <ri-fullscreen-line v-show="!isFullscreen" />
  </div>
</template>
