<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="基础表单">
        基础表单，用于向用户收集表单信息，并展示 Password 组件使用示例</n-card
      >
    </div>
    <n-card :bordered="false" class="mt-3 proCard">
      <div class="BasicForm">
        <BasicForm
          submitButtonText="提交预约"
          layout="horizontal"
          :gridProps="{ cols: 1 }"
          :schemas="schemas"
          @submit="handleSubmit"
          @reset="handleReset"
        >
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>

          <template #passwordSlot="{ model, field }">
            <Password
              ref="passwordRef"
              v-model:value="model[field]"
              @change="changePassword"
              block
              repeat
            />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicForm, FormSchema } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';
  import { Password } from '@/components/Password';

  const schemas: FormSchema[] = [
    {
      field: 'id',
      defaultValue: 128,
      hidden: true,
    },
    {
      field: 'identity',
      defaultValue: '我是一个隐藏字段内容',
      hidden: true,
    },
    {
      field: 'name',
      component: 'NInput',
      label: '姓名',
      labelMessage: '这是一个提示',
      componentProps: {
        placeholder: '请输入姓名',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: '手机',
      componentProps: {
        placeholder: '请输入手机号码',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: '类型',
      componentProps: {
        placeholder: '请选择类型',
        options: [
          {
            label: '舒适性',
            value: 1,
          },
          {
            label: '经济性',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeDate',
      component: 'NDatePicker',
      label: '预约时间',
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeTime',
      component: 'NTimePicker',
      label: '停留时间',
      componentProps: {
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeProject',
      component: 'NCheckbox',
      label: '预约项目',
      componentProps: {
        placeholder: '请选择预约项目',
        options: [
          {
            label: '种牙',
            value: 1,
          },
          {
            label: '补牙',
            value: 2,
          },
          {
            label: '根管',
            value: 3,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: '来源',
      componentProps: {
        options: [
          {
            label: '网上',
            value: 1,
          },
          {
            label: '门店',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      label: '状态',
      //插槽
      slot: 'statusSlot',
    },
    {
      field: 'password',
      label: '密码',
      slot: 'passwordSlot',
    },
  ];

  const message = useMessage();

  const passwordRef = ref();

  function handleSubmit(values: Recordable) {
    const isVal = passwordRef.value.isValidator();
    if (!isVal) {
      return passwordRef.value.showValidator();
    }
    message.success(JSON.stringify(values));
  }

  function handleReset(values: Recordable) {
    message.success(JSON.stringify(values));
  }

  function changePassword(value) {
    console.log(value);
  }
</script>

<style lang="less" scoped>
  .BasicForm {
    width: 550px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
