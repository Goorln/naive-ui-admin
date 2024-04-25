<template>
  <n-drawer v-model:show="isDrawer" :placement="placement" :width="width">
    <n-drawer-content :title="title" :native-scrollbar="false" closable>
      <div class="drawer">
        <n-divider title-placement="center">主题</n-divider>

        <div class="justify-center drawer-setting-item dark-switch">
          <n-tooltip placement="bottom">
            <template #trigger>
              <n-switch v-model:value="designStore.darkTheme" class="dark-theme-switch">
                <template #checked>
                  <n-icon color="#ffd93b" size="14">
                    <SunnySharp />
                  </n-icon>
                </template>
                <template #unchecked>
                  <n-icon color="#ffd93b" size="14">
                    <Moon />
                  </n-icon>
                </template>
              </n-switch>
            </template>
            <span>{{ designStore.darkTheme ? '切换浅色主题' : '切换深色主题' }}</span>
          </n-tooltip>
        </div>

        <n-divider title-placement="center">系统主题</n-divider>

        <div class="drawer-setting-item align-items-top">
          <span
            v-for="(item, index) in appThemeList"
            :key="index"
            :style="{ background: item }"
            class="theme-item"
            @click="togTheme(item)"
          >
            <n-icon v-if="item === designStore.appTheme" size="12">
              <CheckOutlined />
            </n-icon>
          </span>
        </div>

        <n-divider title-placement="center">导航栏模式</n-divider>

        <div class="drawer-setting-item align-items-top">
          <div class="drawer-setting-item-style align-items-top">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="左侧菜单模式"
                  src="~@/assets/images/nav-theme-dark.svg"
                  @click="togNavMode('vertical')"
                />
              </template>
              <span>左侧菜单模式</span>
            </n-tooltip>
            <n-badge v-show="settingStore.navMode === 'vertical'" :color="getAppTheme" dot />
          </div>

          <div class="drawer-setting-item-style">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="顶部菜单模式"
                  src="~@/assets/images/nav-horizontal.svg"
                  @click="togNavMode('horizontal')"
                />
              </template>
              <span>顶部菜单模式</span>
            </n-tooltip>
            <n-badge v-show="settingStore.navMode === 'horizontal'" :color="getAppTheme" dot />
          </div>

          <div class="drawer-setting-item-style">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="顶部菜单混合模式"
                  src="~@/assets/images/nav-horizontal-mix.svg"
                  @click="togNavMode('horizontal-mix')"
                />
              </template>
              <span>顶部菜单混合模式</span>
            </n-tooltip>
            <n-badge v-show="settingStore.navMode === 'horizontal-mix'" :color="getAppTheme" dot />
          </div>
        </div>

        <n-divider title-placement="center">导航栏风格</n-divider>

        <div class="drawer-setting-item align-items-top">
          <div class="drawer-setting-item-style align-items-top">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="暗色侧边栏"
                  src="~@/assets/images/nav-theme-dark.svg"
                  @click="togNavTheme('dark')"
                />
              </template>
              <span>暗色侧边栏</span>
            </n-tooltip>
            <n-badge v-if="settingStore.navTheme === 'dark'" :color="getAppTheme" dot />
          </div>

          <div class="drawer-setting-item-style">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="白色侧边栏"
                  src="~@/assets/images/nav-theme-light.svg"
                  @click="togNavTheme('light')"
                />
              </template>
              <span>白色侧边栏</span>
            </n-tooltip>
            <n-badge v-if="settingStore.navTheme === 'light'" :color="getAppTheme" dot />
          </div>

          <div class="drawer-setting-item-style">
            <n-tooltip placement="top">
              <template #trigger>
                <img
                  alt="暗色顶栏"
                  src="~@/assets/images/header-theme-dark.svg"
                  @click="togNavTheme('header-dark')"
                />
              </template>
              <span>暗色顶栏</span>
            </n-tooltip>
            <n-badge v-if="settingStore.navTheme === 'header-dark'" :color="getAppTheme" dot />
          </div>
        </div>

        <n-divider title-placement="center">界面功能</n-divider>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 分割菜单</div>
          <div class="drawer-setting-item-action">
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-switch
                  v-model:value="settingStore.menuSetting.mixMenu"
                  :disabled="settingStore.navMode !== 'horizontal-mix'"
                />
              </template>
              顶部菜单混合模式可用
            </n-tooltip>
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 固定顶栏</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.headerSetting.fixed" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 固定侧边栏 </div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.menuSetting.fixed" />
          </div>
        </div>

        <!--        <div class="drawer-setting-item">-->
        <!--          <div class="drawer-setting-item-title"> 固定多页签</div>-->
        <!--          <div class="drawer-setting-item-action">-->
        <!--            <n-switch v-model:value="settingStore.multiTabsSetting.fixed" />-->
        <!--          </div>-->
        <!--        </div>-->

        <n-divider title-placement="center">界面显示</n-divider>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 显示重载页面按钮</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.headerSetting.isReload" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 显示面包屑导航</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.crumbsSetting.show" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 显示面包屑显示图标</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.crumbsSetting.showIcon" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 显示多页签</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.multiTabsSetting.show" />
          </div>
        </div>
        <!--1.15废弃，没啥用，占用操作空间-->
        <!--        <div class="drawer-setting-item">-->
        <!--          <div class="drawer-setting-item-title"> 显示页脚 </div>-->
        <!--          <div class="drawer-setting-item-action">-->
        <!--            <n-switch v-model:value="settingStore.showFooter" />-->
        <!--          </div>-->
        <!--        </div>-->

        <n-divider title-placement="center">动画</n-divider>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 切换动画</div>
          <div class="drawer-setting-item-action">
            <n-switch v-model:value="settingStore.isPageAnimate" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <div class="drawer-setting-item-title"> 动画类型</div>
          <div class="drawer-setting-item-select">
            <n-select v-model:value="settingStore.pageAnimateType" :options="animateOptions" />
          </div>
        </div>

        <div class="drawer-setting-item">
          <n-alert :showIcon="false" type="warning">
            <p>{{ alertText }}</p>
          </n-alert>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useProjectSettingStore } from '@/store/modules/projectSetting';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import { CheckOutlined } from '@vicons/antd';
  import { Moon, SunnySharp } from '@vicons/ionicons5';
  import { animates as animateOptions } from '@/settings/animateSetting';
  import { useDesignSetting } from '@/hooks/setting/useDesignSetting';

  const props = defineProps({
    title: {
      type: String,
      default: '项目配置',
    },
    width: {
      type: Number,
      default: 264,
    },
  });
  const { getAppTheme } = useDesignSetting();
  const settingStore = useProjectSettingStore();
  const designStore = useDesignSettingStore();
  const width = ref(props.width);
  const title = ref(props.title);
  const isDrawer = ref(false);
  const placement = ref('right');
  const alertText = ref(
    '该功能主要实时预览各种布局效果，更多完整配置在 /src/settings 中设置，自由搭配，随心所欲，极大程度满足您的个性化需求。'
  );
  const appThemeList = designStore.appThemeList;

  watch(
    () => designStore.darkTheme,
    (to) => {
      settingStore.navTheme = to ? 'header-dark' : 'dark';
      const htmlRoot = document.getElementById('htmlRoot');
      if (!htmlRoot) return;
      htmlRoot.setAttribute('data-theme', to ? 'dark' : 'light');
    }
  );

  function openDrawer() {
    isDrawer.value = true;
  }

  function closeDrawer() {
    isDrawer.value = false;
  }

  function togNavTheme(theme) {
    settingStore.navTheme = theme;
    if (settingStore.navMode === 'horizontal' && ['light'].includes(theme)) {
      settingStore.navTheme = 'dark';
    }
  }

  function togTheme(color) {
    designStore.appTheme = color;
  }

  function togNavMode(mode) {
    settingStore.navMode = mode;
    settingStore.menuSetting.mixMenu = false;
  }

  defineExpose({
    openDrawer,
    closeDrawer,
  });
</script>

<style lang="less" scoped>
  .drawer {
    .n-divider:not(.n-divider--vertical) {
      margin: 10px 0;
    }

    &-setting-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      flex-wrap: wrap;

      &-style {
        display: inline-block;
        position: relative;
        margin-right: 16px;
        cursor: pointer;
        text-align: center;

        img {
          display: block;
        }
      }

      &-title {
        flex: 1 1;
        font-size: 14px;
      }

      &-action {
        flex: 0 0 auto;
      }

      &-select {
        flex: 1;
      }

      .theme-item {
        width: 20px;
        min-width: 20px;
        height: 20px;
        cursor: pointer;
        border: 1px solid #eee;
        border-radius: 2px;
        margin: 0 5px 5px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        .n-icon {
          color: #fff;
        }
      }
    }

    .align-items-top {
      align-items: flex-start;
      padding: 2px 0;
    }

    .justify-center {
      justify-content: center;
    }

    .dark-switch .n-switch {
      :deep(.n-switch__rail) {
        background-color: #000e1c;
      }
    }
  }
</style>
