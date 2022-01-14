<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
  <div class="h-screen">{{ t('setting.language') }}</div>
</template>
