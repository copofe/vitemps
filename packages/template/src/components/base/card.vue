<script lang="ts" setup>
type Key = string | number;
interface BaseCardProps {
  full?: boolean;
  title?: string;
  tabList?: {
    key: Key;
    tab: string;
  }[];
  tabActiveKey?: Key;
  bordered?: boolean;
  bodyClass?: string;
}

withDefaults(defineProps<BaseCardProps>(), {
  full: false,
  title: '',
  tabList: () => [],
  tabActiveKey: '',
  bordered: true,
  bodyClass: '',
});

const emit = defineEmits<{ (e: 'update:tabActiveKey', k: Key): void }>();
</script>

<template>
  <div class="layout-card bg-white" :class="{ 'flex-1': full }">
    <div
      v-if="title || $slots.title || $slots.extra"
      :class="{ bordered }"
      class="px-3 py-2 flex justify-between items-center"
      style="min-height: 48px"
    >
      <div>
        <div v-if="title" class="title flex items-center">{{ title }}</div>
        <slot v-else name="title" />
      </div>
      <div v-if="$slots.extra" class="extra">
        <slot name="extra" />
      </div>
    </div>
    <a-tabs
      v-if="tabList.length > 0"
      :active-key="tabActiveKey"
      :right-extra="$slots.tabExtra || null"
      :tab-bar-style="{ marginBottom: 0, padding: '0 12px' }"
      @change="(k: Key) => emit('update:tabActiveKey', k)"
    >
      <a-tab-pane v-for="item in tabList" :key="item.key" :tab="item.tab" />
    </a-tabs>
    <div v-if="$slots.default" class="p-3" :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  position: relative;
  font-size: 16px;
  color: #343434;
  line-height: 1;
  padding-left: 12px;
  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 20px;
    background: #167afa;
    border-radius: 2px;
    left: 0;
  }
}
.bordered {
  border-bottom: 1px solid #f0f0f0;
}
</style>
