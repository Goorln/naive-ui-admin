import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { DiamondOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/mandate',
    name: 'https://www.naiveadmin.com/authorize/index',
    component: Layout,
    meta: {
      title: '获取授权',
      icon: renderIcon(DiamondOutline),
      sort: 12,
    },
  },
];

export default routes;
