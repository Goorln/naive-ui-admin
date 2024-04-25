import { RouteRecordRaw } from 'vue-router';
import { Layout, ParentLayout } from '@/router/constant';
import { ControlOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/feature',
    name: 'Feature',
    component: Layout,
    meta: {
      title: '功能示例',
      icon: renderIcon(ControlOutlined),
      sort: 7,
    },
    children: [
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/feature/download/download.vue'),
        meta: {
          title: '文件下载',
        },
      },
      {
        path: 'context-menus',
        name: 'ContextMenus',
        component: () => import('@/views/feature/context-menus/context-menus.vue'),
        meta: {
          title: '右键菜单',
        },
      },
      {
        path: 'copy',
        name: 'copy',
        component: () => import('@/views/feature/copy/copy.vue'),
        meta: {
          title: '剪贴板',
        },
      },
      {
        path: 'print',
        name: 'print',
        component: () => import('@/views/feature/print/print.vue'),
        meta: {
          title: '打印',
        },
      },
      {
        path: 'scrollbar',
        name: 'scrollbar',
        component: () => import('@/views/feature/scrollbar/scrollbar.vue'),
        meta: {
          title: '滚动条',
        },
      },
      {
        path: 'excel',
        name: 'Excel',
        meta: {
          title: 'Excel',
        },
        component: ParentLayout,
        children: [
          {
            path: 'choiceExport',
            name: 'choiceExport',
            component: () => import('@/views/feature/excel/choiceExport.vue'),
            meta: {
              title: '选择导出格式',
            },
          },
          {
            path: 'jsonExport',
            name: 'jsonExport',
            component: () => import('@/views/feature/excel/jsonExport.vue'),
            meta: {
              title: 'JSON数据导出',
            },
          },
        ],
      },
      {
        path: 'tagsAction',
        name: 'TagsAction',
        meta: {
          title: '多页签操作',
        },
        component: () => import('@/views/feature/tags/tagsAction.vue'),
      },
    ],
  },
];

export default routes;
