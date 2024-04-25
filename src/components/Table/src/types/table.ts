import type { TableBaseColumn } from 'naive-ui/lib/data-table/src/interface';
import { ComponentType } from './componentType';
// @ts-ignore
export interface BasicColumn extends TableBaseColumn {
  //编辑表格
  edit?: boolean;
  editRow?: boolean;
  editable?: boolean;
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  editRule?: boolean | ((text: string, record: Recordable) => Promise<string>);
  editValueMap?: (value: any) => string;
  onEditRow?: () => void;
  // 权限编码控制是否显示
  auth?: string[];
  // 业务控制是否显示
  ifShow?: boolean | ((column: BasicColumn) => boolean);
  editCellRender?: Recordable;
}

export interface TableActionType {
  reload: (opt) => Promise<void>;
  emit?: any;
  getColumns: (opt?) => BasicColumn[];
  setColumns: (columns: BasicColumn[] | string[]) => void;
  redoHeight: () => void;
}

export interface TableSetting {
  redo?: boolean;
  size?: boolean;
  setting?: boolean;
  fullscreen?: boolean;
  striped?: boolean;
  query?: boolean;
}

export interface BasicTableProps {
  title?: string;
  dataSource?: Function | any[];
  columns: any[];
  pagination?: object;
  showPagination?: boolean;
  actionColumn?: object;
  canResize?: boolean;
  resizeHeightOffset?: number;
  loading?: boolean;
  showTableSetting?: boolean;
  tableSetting?: TableSetting;
  titleTooltip?: string;
  striped?: boolean;
  request?: Function;
}
