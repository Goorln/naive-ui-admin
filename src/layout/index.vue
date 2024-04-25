<template>
  <n-layout
    class="admin-layout"
    :inverted="inverted"
    :class="{
      'admin-layout-fix-header': fixedHeader,
      'admin-layout-fix-side': fixedSide,
      'admin-layout-fix-body': true,
      'admin-layout-side-horizontal': navMode === 'horizontal',
      'admin-layout-hide-side': !isMixMenuNoneSub,
      'admin-layout-show-tabs': isMultiTabs,
      'admin-layout-collapse': collapsed,
    }"
  >
    <n-layout-header :inverted="getHeaderInverted" class="admin-layout-header">
      <div class="flex">
        <Logo v-if="navMode != 'horizontal'" />
        <PageHeader @update:collapsed="updateCollapsed" :inverted="inverted" />
      </div>
    </n-layout-header>

    <n-layout has-sider :inverted="inverted" class="admin-layout-content">
      <n-layout-sider
        v-if="isMixMenuNoneSub && (navMode === 'vertical' || navMode === 'horizontal-mix')"
        show-trigger="arrow-circle"
        @collapse="collapsed = true"
        @expand="collapsed = false"
        :native-scrollbar="false"
        :collapsed="collapsed"
        collapse-mode="width"
        :collapsed-width="64"
        :width="leftMenuWidth"
        :inverted="inverted"
        class="admin-layout-sider"
      >
        <AsideMenu v-model:collapsed="collapsed" v-model:location="getMenuLocation" />
      </n-layout-sider>

      <n-layout
        embedded
        :inverted="inverted"
        class="admin-layout-content-son"
        :class="{
          'layout-content-inverted': getDarkTheme,
          'page-full-screen': isFullscreen && !getDarkTheme,
        }"
      >
        <TabsView
          v-if="isMultiTabs"
          v-model:collapsed="collapsed"
          @page-full-screen="togglePageFullScreen"
        />
        <div class="admin-layout-content-main">
          <div class="main-view" ref="adminBodyRef">
            <MainView />
          </div>
        </div>
        <n-back-top :right="100" />
      </n-layout>
    </n-layout>
  </n-layout>

  <!--项目配置-->
  <ProjectSetting ref="drawerSetting" />

  <div class="shadow-lg circular" @click="openSetting">
    <n-icon size="20">
      <SettingOutlined class="transition ease-in-out transform delay-150 hover:animate-spin" />
    </n-icon>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, computed, onMounted, watch, provide } from 'vue';
  import { Logo } from './components/Logo';
  import { TabsView } from './components/TagsView';
  import { MainView } from './components/Main';
  import { AsideMenu } from './components/Menu';
  import { PageHeader } from './components/Header';
  import { useProjectSetting } from '@/hooks/setting/useProjectSetting';
  import { useDesignSetting } from '@/hooks/setting/useDesignSetting';
  import { useRoute } from 'vue-router';
  import { useProjectSettingStore } from '@/store/modules/projectSetting';
  import ProjectSetting from './components/Header/ProjectSetting.vue';
  import { useFullscreen } from '@vueuse/core';
  import { SettingOutlined } from '@vicons/antd';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const { getDarkTheme } = useDesignSetting();
  const { getNavMode, getNavTheme, getHeaderSetting, getMenuSetting, getMultiTabsSetting } =
    useProjectSetting();

  const settingStore = useProjectSettingStore();
  const designStore = useDesignSettingStore();

  const navMode = getNavMode;

  const drawerSetting = ref();
  const collapsed = ref<boolean>(false);
  const adminBodyRef = ref<HTMLElement | null>(null);

  const { isFullscreen, toggle } = useFullscreen(adminBodyRef);

  provide('isPageFullScreen', isFullscreen);
  provide('collapsed', collapsed);
  provide('openSetting', openSetting);

  watch(
    () => collapsed.value,
    (to) => {
      settingStore.setMenuSetting({ collapsed: to });
    },
    { immediate: true }
  );

  //固定顶部
  const fixedHeader = computed(() => {
    const { fixed } = unref(getHeaderSetting);
    return fixed;
  });

  //固定侧边栏
  const fixedSide = computed(() => {
    const { fixed } = unref(getMenuSetting);
    return fixed;
  });

  //切换内容页全屏
  function togglePageFullScreen() {
    toggle();
  }

  //菜单折叠
  function updateCollapsed() {
    collapsed.value = !collapsed.value;
  }

  //打开设置
  function openSetting() {
    const { openDrawer } = drawerSetting.value;
    openDrawer();
  }

  //获取主题风格色
  const getAppTheme = computed(() => {
    return designStore.appTheme;
  });

  const isMixMenuNoneSub = computed(() => {
    const mixMenu = settingStore.menuSetting.mixMenu;
    const currentRoute = useRoute();
    if (unref(navMode) != 'horizontal-mix') return true;
    if (unref(navMode) === 'horizontal-mix' && mixMenu && currentRoute.meta.isRoot) {
      return false;
    }
    return true;
  });

  const isMultiTabs = computed(() => {
    return unref(getMultiTabsSetting).show;
  });

  const inverted = computed(() => {
    return ['dark', 'header-dark'].includes(unref(getNavTheme));
  });

  const getHeaderInverted = computed(() => {
    const navTheme = unref(getNavTheme);
    return ['light', 'header-dark'].includes(navTheme) ? unref(inverted) : !unref(inverted);
  });

  const leftMenuWidth = computed(() => {
    const { minMenuWidth, menuWidth } = unref(getMenuSetting);
    return collapsed.value ? minMenuWidth : menuWidth;
  });

  const getMenuLocation = computed(() => {
    return 'left';
  });

  //看自身需求是否保留吧，这个用处不是很大
  const watchWidth = () => {
    const { isFullscreen: isFullscreen } = useFullscreen();
    if (isFullscreen.value) return;
    const Width = document.body.clientWidth;
    if (Width < 750) {
      collapsed.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', watchWidth);
  });
</script>

<style lang="less" scoped>
  .admin-layout {
    //侧边栏
    &-sider {
      min-height: calc(100vh - 64px);
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
      position: relative;
      z-index: 13;
      transition: all 0.2s ease-in-out;
    }

    //主体内容区域
    &-content {
      :deep(.n-layout-scroll-container) {
        overflow: hidden;
      }

      &-main {
        padding: 10px;
        overflow-x: hidden;
      }

      &-son {
        transition: padding-left 0.3s cubic-bezier(0.2, 0, 0, 1) 0s,
          box-shadow 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      }
    }

    //深色主题
    .layout-content-inverted {
      background: rgb(16, 16, 20);
    }

    .n-layout-header.n-layout-header--absolute-positioned {
      z-index: 11;
    }

    .n-layout-footer {
      background: none;
    }

    // 固定顶部
    &-fix-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      .admin-layout-content {
        flex: auto;
        min-height: calc(100vh - 64px);
        &-son {
          :deep(.n-layout-scroll-container) {
            overflow: hidden;
          }
        }

        &-main {
          padding: 10px;
          height: calc(100vh - 64px);
          position: relative;
          overflow-y: auto;
        }
      }
    }

    //固定侧栏
    &-fix-side {
      .admin-layout-sider {
        position: fixed;
        left: 0;
        bottom: 0;
        top: 64px;
      }

      .admin-layout-content-son {
        padding-left: 200px;
      }

      .admin-layout-header {
        .logo {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 15;
        }
        :deep(.layout-header) {
          padding-left: 200px;
        }
      }
    }

    //折叠
    &-collapse {
      .admin-layout-content-son {
        padding-left: 64px;
      }

      .admin-layout-header {
        :deep(.layout-header) {
          padding-left: 64px;
        }
      }
    }

    //没有左侧菜单
    &-hide-side {
      .admin-layout-content-son {
        padding-left: 0px;
      }
    }

    //显示多标签
    &-show-tabs {
      .admin-layout-content {
        &-main {
          padding: 0 10px 10px 10px;
        }
      }
    }
    &-fix-header.admin-layout-show-tabs {
      .admin-layout-content {
        &-main {
          height: calc(100vh - 64px - 44px);
          //padding: 0 10px 10px 10px;
        }
      }
    }

    //横向菜单
    &-side-horizontal {
      //处理顶部菜单
      .admin-layout-header {
        .logo {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 15;
        }
        :deep(.layout-header) {
          padding-left: 0px;
        }
      }

      //处理内容区域
      .admin-layout-content-son {
        padding-left: 0px;
      }
    }
  }

  //内容全屏
  .page-full-screen {
    .main-view {
      background: #f0f2f5;
    }
  }

  .dark {
    .page-full-screen {
      .main-view {
        background: #000;
      }
    }
  }

  .circular {
    position: fixed;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: v-bind(getAppTheme);
    font-size: 24px;
    color: #fff;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    z-index: 200;
  }
</style>
