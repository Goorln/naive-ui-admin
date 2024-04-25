<template>
  <NConfigProvider :theme-overrides="getThemeOverrides">
    <n-loading-bar-provider>
      <LoadingBarContent />
      <n-dialog-provider>
        <DialogContent />
        <n-notification-provider>
          <n-message-provider>
            <MessageContent />
            <slot></slot>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { MessageContent } from '@/components/Application/content/Message';
  import { DialogContent } from '@/components/Application/content/Dialog';
  import { LoadingBarContent } from '@/components/Application/content/Loadingbar';
  import { useDesignSetting } from '@/hooks/setting/useDesignSetting';
  import {
    NConfigProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
  } from 'naive-ui';

  /**
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const getThemeOverrides = computed(() => {
    const designStore = useDesignSetting();
    const appTheme = designStore.getAppTheme;
    return {
      LoadingBar: {
        colorLoading: appTheme.value,
      },
    };
  });
</script>
