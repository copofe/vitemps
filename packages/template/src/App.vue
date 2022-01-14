<script lang="ts" setup>
import { watch } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useAppStore } from '@/store';

const systemStore = useAppStore();
watch(() => systemStore.locale, (val) => {
  dayjs.locale(val);
});

</script>

<template>
  <router-view />
</template>
