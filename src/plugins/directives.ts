import { App } from 'vue';

import { permission } from '@/directives/permission';
import { scrollBar } from '@/directives/scrollBar';

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives(app: App) {
  app.directive('permission', permission); // 权限控制指令（演示）
  app.directive('scrollBar', scrollBar); // 滚动条
}
