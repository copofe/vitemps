<script lang="ts" setup>
type Key = string | number;
interface TabList {
  key: Key;
  tab: string;
}

withDefaults(defineProps<{
  tabList?: TabList[];
  tabActiveKey?: Key;
}>(), {
  tabList: () => [],
  tabActiveKey: '',
});

const emit = defineEmits<{ (e: 'update:tabActiveKey', k: Key): void }>();
</script>

<template>
  <div class="flex flex-col w-full h-full base-container">
    <div v-if="tabList.length > 0" class="bg-white">
      <a-tabs
        :active-key="tabActiveKey"
        :tab-bar-extra-content="$slots.tabExtra || null"
        :tab-bar-style="{ marginBottom: 0, padding: '0 12px' }"
        @change="(k: Key) => emit('update:tabActiveKey', k)"
      >
        <a-tab-pane v-for="item in tabList" :key="item.key" :tab="item.tab" />
      </a-tabs>
    </div>
    <slot />
  </div>
</template>
