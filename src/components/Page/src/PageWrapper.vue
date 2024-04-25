<template>
  <div class="page-wrapper" :class="{ 'footer-space': showFooter && getShowFooter }">
    <div class="n-layout-page-header mb-4" v-if="title || content || $slots.headerContent">
      <n-card :bordered="false" :title="title">
        {{ content }}
        <slot name="headerContent"></slot>
      </n-card>
    </div>
    <div class="page-wrapper-content" :style="contentStyle" :class="contentClass">
      <slot></slot>
    </div>
    <PageFooter v-if="showFooter && getShowFooter" :style="getFooterWidth">
      <template #left>
        <slot name="leftFooter"></slot>
      </template>
      <template #right>
        <slot name="rightFooter"></slot>
      </template>
    </PageFooter>
  </div>
</template>

<script lang="ts" setup>
  import { computed, useSlots } from 'vue';
  import { basicProps } from './wrapperProps';
  import PageFooter from './PageFooter.vue';
  import { useProjectSetting } from '@/hooks/setting/useProjectSetting';

  const slots = useSlots();
  defineProps({ ...basicProps });

  const { getMenuSetting } = useProjectSetting();

  const getShowFooter = computed(() => slots?.leftFooter || slots?.rightFooter);

  const getFooterWidth = computed(() => {
    const { menuWidth, minMenuWidth, collapsed } = getMenuSetting.value;
    const wh = collapsed ? minMenuWidth : menuWidth;
    return {
      width: `calc(100% - ${wh}px)`,
    };
  });
</script>

<style lang="less" scoped>
  .page-wrapper {
    .mb-4 {
      margin-bottom: 1rem;
    }
  }

  .footer-space {
    padding-bottom: 64px;
  }
</style>
