# CHANGELOG

## Pending
## 2.2.0 (2022-03-23)

### ✨ 新增功能
- 新增 `多级菜单缓存` 
- `依赖升级`

### 💻  新增页面
- 新增 `多级菜单缓存` 
- `依赖升级`

### 🐛 Bug Fixes
- 修复 `BasicForm` 隐藏表单，存在占位问题

## 2.1.9 (2022-02-18)
### 🐛 Bug Fixes
- 修复 `BasicUpload` 组件，回显问题
- 修复 `BasicForm` 组件 `collapsed` 无效
- 修复 `表格编辑` 时间格式化异常 [#92](https://github.com/jekip/naive-ui-admin/issues/92)

## 2.1.8 (2022-01-26)

### 💎 功能优化
- 优化 `BasicForm` 导出操作方法

### ✨ 新增功能
- 新增 `basicModal` 动态创建 `id` 支持嵌套弹窗拖动
- 新增 `BasicTable` 表格查询展开收起，配合 `form` 表单
- 新增 `BasicTable` 选中行 `alert` 提示，可配置开关
- 新增 `BasicTable` `tableSetting` 配置新增 `query` 字段
- 新增 `多页签` 状态设置，特定场景，可实现二次确认提示是否关闭（参考：功能示例->多页签操作）
- `依赖升级`

## 2.1.7 (2022-01-11)

### 💎 功能优化
- 优化 `::v-deep` 修改为 `:deep`
- 优化 `页面ts类型` 
- 优化 `表格单元格编辑` 
### 🐛 问题修复
- 移除 `引导页示例`
- 修复 `css变量前缀` 和UI组件库不一致

### ✨ 新增功能
- 新增 `Tailwindcss 3.x` 移除 `windicss`
- 新增 `项目配置` 悬浮入口
- `依赖升级`

## 2.1.6 (2021-12-30)

### 🐛 Bug Fixes
- 修复 `路由history跳转锚点` 多标签重复创建问题
- 变更 `多标签操作` `setTitle` 方法，传 `fullPath` 路径（依然存在缺陷）

### ✨ Features
- 新增 `菜单权限-FIXED模式` 随机（普通管理员/超级管理员）角色权限演示
- 新增 `菜单权限-BACK模式` 随机（普通管理员/超级管理员）角色权限演示
- 说明 `超级管理员` 拥有 `主控台、列表页面` 权限，`普通管理员` 拥有 `主控台` 权限，可退出登录，或者刷新页面测试
- 测试 `退出登录>重新登录` 或者 `刷新页面` 查看效果
- `依赖升级`

## 2.1.5 (2021-12-13)
### 🐛 Bug Fixes
- 修复 `BasicTable` 选择行与列配置拖拽异常
- 修复 `BasicTable` 分页总数，无法响应式
- 修复 `Axios` api地址拼接异常

### ✨ Features
- 破坏 `Axios` 取消默认导出 `http` 可支持多个请求导出
- 搜索 `import http from '@/utils/http/axios'` 替换为 `import { http } from '@/utils/http/axios`
- `依赖升级`

## 2.1.4 (2021-11-25)
### 🐛 Bug Fixes
- 修复 `BasicTable` 自适应高度问题
- 破坏 `meta.alwaysShow` 取消路由自动计算根路由特性

### ✨ Features
- 新增 `BasicTable` 斑马纹开关配置
- 新增 `BasicTable` 分页配置，默认显示总条数，不需要的地方可单独重置
- 新增 `useTabs` 暴露 `closeCurrent`，`setTitle` 方法，用于外部页面操作多页签
- 新增 `功能示例->多页签操作示例`

## 2.1.3 (2021-11-23)

### 🐛 Bug Fixes
- 修复 `ActionItem` 类型定义问题
- 修复 `BasicForm` 自定义提交逻辑，按钮一直处于 loading

### ✨ Features
- 新增 `BasicForm.setLoadingSub` 方法
- `依赖升级`

## 2.1.2 (2021-11-18)

### 🐛 Bug Fixes
- 修复 `锁屏界面` 黑暗主题适配问题
- 修复 `登录页面` 异常情况，按钮一直处于 loading
- 修复 `顶部混合菜单` 一级菜单，内容区域布局问题
- 修复 `BasicSelect` 存储 `localStorage` 空白key
- 修复 `多标签` 当 `router.push` 带上 `query` 参数报错

### ✨ Features
- 新增 `按需引入NaiveUi并自动创建.d.ts声明` 可获得代码提示和类型检查


## 2.1.1 (2021-11-15)

### ✨ Features
- 优化 `骨架结构布局` 破坏性调整，按需更新（建议是升级）
- 新增 `侧栏是否固定配置项`
- 新增 `BasicTable` 选中行内部维护，新增 `restCheckedRowKeys` 和 `checked-row-change` 方法
- `依赖升级`


## 2.1.0 (2021-11-11)

### ✨ Features
- 优化 `加载图标`
- 优化 `顶部分割菜单`
- 新增 `表格全屏` 
- 新增 `内容页全屏` 

## 2.0.9 (2021-11-05)

### 🐛 Bug Fixes
- 优化 `页面卡片间距` 用 `mt-3` 统一

### ✨ Features
- 引入 `windicss` 代替 `tailwindcss` 提高开发效率
- 引入 `pnpm` 代替 `yarn` 升级方法，删除 `node_modules` 运行 pnpm install 
- `依赖升级`

## 2.0.8 (2021-11-03)

### 🐛 Bug Fixes
- 修复 `表格编辑` 事件穿透问题
- 修复 `切换全屏` 菜单展开问题，取消自动展开特性
- 修复 `切换全屏` 图标和提示语问题
- 还原 `tailwindcss2.x` 默认样式存在问题

### ✨ Features
- 新增 `BasicTable` 表格设置工具栏可配置


## 2.0.7 (2021-11-02)

### 🐛 Bug Fixes
- 修复 `多标签` 样式优化
- 修复 `多标签缓存设置` 关闭标签，清除缓存
- 修复 `BasicTable` 操作刷新参数异常
- 修复 `深色模式` 菜单选中色无法切换问题

### ✨ Features
- 新增 `多标签关闭` 清除关闭页面缓存特性
- 破坏 `tailwindcss升级3.x` 移除导入的默认样式
- `依赖升级`

## 2.0.6 (2021-10-25)

### ✨ Features
- `深色主题`优化滚动条样式
- `BasicTable.actionColumn` 操作组件配置增强，支持`图标，大小`
- `BasicTable.actionColumn` 新增`dropDownProps`更多按钮组件，支持配置，和 `actionColumn一致`
- `BasicTable` 组件新增`updateTableDataRecord`，`deleteTableDataRecord`，`getColumns`，`setColumns`方法
- `BasicForm.schemas` 新增`hidden`，配置隐藏域表单，可配合`defaultValue`设置默认值，常用于编辑


## 2.0.5 (2021-10-14)
- 移除`rxjs`依赖和相关文件
- 修复`面包屑`显示隐藏路由
- 修复`多标签`关闭当前页判断不准确
- 修复`多标签`跳转路由参数丢失
- 修复`路由带参`路由相同，参数不同缓存无效
- 修复`BasicTable`组件编辑行`switch`组件默认值不生效

### ✨ Features
- 新增`useGo`和`useRedo`路由跳转方法
- `BasicForm`组件，提交按钮，loading 动画状态优化
- `BasicTable`组件重构为`script setup`语法
- `BasicTable`组件导出`updateTableData`，`setTableData`，`getDataSource`方法
- `依赖升级`



## 2.0.4 (2021-10-09)

### 🐛 Bug Fixes
- 修复`富文本`默认值不生效问题
- 修复`多标签`无法及时更新文字问题
- 修复`BasicTable`组件配置默认分页数量不生效问题
- 优化`刷新功能`面包屑闪现`Redirect`路由地址问题
- 优化`axios拦截器`中无法使用，Dialog，Message，等提示性质组件

### ✨ Features
- `独立精简版分支`


## 2.0.3 (2021-09-28)
### 🐛 Bug Fixes

- 修复`深色主题`顶部右侧搜索组件和部分页面布局不适配问题
- 修复`ts类型定义`完善

### ✨ Features
- `多标签`组件交互重写更加人性化配置和交互
- `BasicTable`组件支持dataSource纯表格数据 非 request 加载情况
- `BasicTable`组件新增`redoHeight`重新计算表格高度方法
- `BasicForm`组件新增`advanced`展开收起回调方法
- `依赖升级`


## 2.0.2 (2021-09-24)
### 🐛 Bug Fixes

- 修复`多标签`关闭左右侧，关闭全部不准确问题
- 修复`多标签切换开关`内容区域间距问题
- 修复`权限判断`hooks 中方法判断问题
- 修复`顶部混合菜单`会受左侧菜单收缩效果影响问题

### ✨ Features
- `BasicTable`组件新增，`restReload`方法（重置页码刷新）
- `依赖升级`


## 2.0.1 (2021-09-20)
### 🐛 Bug Fixes

- 修复`BasicTable`配置选择项异常


### ✨ Features
- 新增`PageWrapper`布局组件
- 新增`PageFooter`布局组件
- 新增`BasicTable->actionColumn`配置增强，可设置`popconfirm`二次确认
- 优化`BasicTable`全选反选部分选择效果
- 移除`BasicTable`配置里面勾选列功能，用处不大，增加不必要代码量
- 新增`高级表单`布局页面
- 依赖升级


## 2.0.0 (2021-09-15)

## 💄 破坏性更新

### ✨ Features

🔥🔥🔥 代码重构 `script setup` 语法，源码更加易读，性能更优，ts 类型更加全面

#### 💻 页面

- 🌟 `全新登录/注册页面`
- 🌟 `全新主控台页面`
- 🌟 `用户管理`
- 🌟 `字典管理`

#### ✨ 优化
- 🌟 `主结构布局优化`
- 🌟 `表格主从结构`
- 🌟 `多标签页可关闭左右侧标签`
- 🌟 `多标签页可自动滚动到当前页面`
- 🌟 `弹窗组件拖拽可配置`

#### 🏷️ 功能

- 🌟 `右键菜单`
- 🌟 `文件下载`
- 🌟 `Excel导出`
- 🌟 `剪贴板`
- 🌟 `打印`
- 🌟 `滚动条`
- 🌟 `消息通知`
- 🌟 `主控台图表示例`
- 🌟 `引导`
- 🌟 `修改密码`
- 🌟 `固定主体区域可配置`
- 🌟 `pinia 持久化存储`

#### 📦 组件

- 🌟 `省市区`
- 🌟 `顶部搜索`
- 🌟 `二维码`
- 🌟 `密码强度`
- 🌟 `图片裁剪，支持圆形矩形`
- 🌟 `选择器增强，支持缓存`

# CHANGELOG

## 1.5.5 (2021-08-14)

### 🐛 Bug Fixes

- 修复路由只存在一个子路由，图标不显示问题
- UI样式美化

- ### ✨ Features
- 支持 Vue 3.2.x
- 代码全部按 `script setup` 语法重写（完成80%）
- 新增 `回到顶部` 功能
- 新增 `拖拽` 示例页面
- 新增 `富文本` 组件
- 新增 `路由切换动画` 可在项目设置切换
- 依赖升级

# CHANGELOG

## 1.5.4 (2021-08-10)

### 🐛 Bug Fixes

- `暗色模式下多页签背景问题 ` 合并 [#23](https://github.com/jekip/naive-ui-admin/pull/23)
  感谢 [@Dishone](https://github.com/Dishone)
- `表格设置列，重复添加action列样式错乱问题` 合并 [#24](https://github.com/jekip/naive-ui-admin/pull/24)
  感谢 [@CasbaL](https://github.com/CasbaL)

- ### ✨ Features
- 新增 `路由支持（内联外部地址）`配置
- 新增 `顶部菜单` logo展示 -（破坏性更新）
- 优化 `动态路由配置` 取消`constantRouterComponents.ts`，中组件映射配置，更名为 `router-icons.ts`
- 优化 `admin_info接口结构`，roles 更名为：permissions，roles.roleName，更名为：label
- 优化 多级路由，当没有配置`redirect`时，默认为第一个子路由，配置则优先按配置
- 依赖升级

# 1.5.3 (2021-08-09)

### 🐛 Bug Fixes

- 修复顶部菜单，选中联动
- 修复混合菜单模式，切换其他模式菜单未重置
- 实例基础列表，和表格组件实例，开启横向滚动特性
- `naiveui` 升级成最新版

- ### ✨ Features
- table组件，默认开启 `ellipsis` 特性

# 1.5.2 (2021-08-06)

### 🐛 Bug Fixes

- 修复已知bug

- ### ✨ Features
- 新增 `混合菜单模式`
- 新增 `根路由`
- 新增 `关于` 根路由示例页面
- 文档同步更新，组件和示例

# 1.5.1 (2021-08-05)

### 🐛 Bug Fixes

- 修复windows系统获取项目换行符问题
- 修复表格分页计算问题 [@Chika99](https://github.com/Chika99)
- 修复锁屏样式自适应问题 [@Chika99](https://github.com/Chika99)
- 依赖 dayjs 移除，用date-fns，和UI框架底层保持一致
- 修复已知bug

- ### ✨ Features
- 新增 `baseForm` 组件，和`基础`，`useForm`使用方式
- 新增 `baseModal`，组件，和 `useForm`使用方式
- 新增`子菜单` new Tag标签
- 菜单支持 `根路由`配置

# 1.5.0 (2021-07-30)

### 🐛 Bug Fixes

- 修复表格列配置，拖拽时最后的操作列重复增加
- 多标签页交互优化

- ### ✨ Features
- `项目文档`已上线
- `Application`组件加载机制优化，解决路由守卫，Axios中可使用，Dialog，Message 等之类组件
- `BasicTable` 组件新增`高度自适应`，`单元格编辑`，`整行编辑` 特性
- `nprogress` 移除，用 `Loading Bar`代替
- 打包支持`gzip`，`brotli` 压缩
- 新增代理`VITE_PROXY`配置
- 路由菜单，支持多级菜单
- 依赖升级
- 本次更新，有破坏性更新，涉及文件重命名，增删调整

# 1.4.0 (2021-07-21)

### 🐛 Bug Fixes

- vite降至2.3.6
- 多标签页交互优化

- ### ✨ Features
- 新增 `TableAction` 组件
- 新增 `菜单权限管理` 示例
- 新增 `角色权限管理` 示例
- 持续更新更多实用组件及示例，感谢Star

# 1.3.0 (2021-07-19)

### 🐛 Bug Fixes

- 修复多标签页左右切换按钮自适应展示
- 修复登录页面出现多标签页

- ### ✨ Features
- 新增 `Upload` 组件及配置
- 新增 `VITE_GLOB_IMG_URL` 图片前缀地址，配合Upload
- 新增 `滑块验证码` 组件
- 新增 `登录页面-滑块验证码` 示例
- 持续更新更多实用组件及示例，感谢Star

# 1.2.0 (2021-07-16)

### 🐛 Bug Fixes

- 修复面包屑显示登录页面
- 菜单支持只展开当前父级菜单

- ### ✨ Features
- 新增 `列表页面-基础列表` 示例页面
- 新增 `异常页面-404-403-500` 示例页面
- 新增 `结果页面-成功-失败-信息` 示例页面
- 新增 `设置页面-个人设置-系统设置` 示例页面
- tips `示例页面，可能在深色主题显示不佳`
- 持续更新更多实用示例，同时也演示`Naive UI`使用方法

# 1.1.0 (2021-07-15)

- ### ✨ Features
- 新增 `基础表单` 示例页面
- 新增 `分步表单` 示例页面
- 新增 `表单详情` 示例页面
- 持续更新更多实用示例，同时也演示`Naive UI`使用方法

# 1.0.0 (2021-07-12)

### 🐛 Bug Fixes

- 修复页面切换面包屑未及时更新

- ### ✨ Features
- 1.0骨架发布
- Naive UI 升级至2.15.4
- 菜单新增排序字段
- 新增 `ProTable` 组件，封装了常用的分页列配置等逻辑
- 新增 `ProTable` 组件示例页面
- 持续更新中...

# 0.1.1-beta (2021-07-07)

### 🐛 Bug Fixes

- 修正黑色主题，页面背景色和导航风格问题

- ### ✨ Features
- 主控台，工作台，自适应支持
- 左侧菜单屏幕可视宽度<=950 自动收起
- 页脚是否显示，可配置
- 新增页面缓存，演示页面在>工作台>动态卡片>输入框

# 0.1.0-beta (2021-07-04)

- Naive Ui Admin 骨架
- ### ✨ Features
- 菜单模式（左侧/顶部）
- 权限（固定角色/动态路由菜单）
- 主题（深色/浅色）引用 naiveui 特性，黑暗主题/自定义组件，暗黑主题信手捏来
- 系统主题（十种安全色，可切换预览，可自定义）
- 导航风格（三种，可自由搭配，暗色侧边/白色侧边和通栏/暗色侧边和顶部通栏）
- 多页签，持久化，拖拽，关闭，固定
- 面包屑，图标，子菜单下拉联动展示
- 漂亮的锁屏界面
- 在线配置抽屉（布局预览功能）
- 主控台，简单写了一下，能看了
- 工作台随意撸了一下（不想写style）用 tailwindcss大开杀戒了
- echarts，官网例子很全了，没啥好撸的，偷懒再次引用vben作者的代码，再感谢一次，哈哈
- 挑个合适的时间，发布一下源码到 github
