<template>
  <n-card
    :bordered="false"
    content-style="padding: 0;width:100%"
    class="page-wrapper-footer"
    :class="{ 'dark-bg': getDarkTheme }"
  >
    <div class="flex w-full items-center">
      <div class="flex-1 page-wrapper-footer-left"><slot name="left"></slot></div>
      <div class="page-wrapper-footer-right"><slot name="right"></slot></div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
  import { useDesignSetting } from '@/hooks/setting/useDesignSetting';

  const { getDarkTheme } = useDesignSetting();
</script>

<style lang="less" scoped>
  .page-wrapper-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 15px 24px;
    box-shadow: -3px 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.08),
      -3px 5px 12px 4px rgba(0, 0, 0, 0.08);
    transition: width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: #fff;
  }

  .dark-bg {
    background: rgb(24, 24, 28);
  }
</style>
