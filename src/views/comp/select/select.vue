<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="选择器">
        扩展选择器组件，用于各种表单选择器，简化使用，内置缓存，可对相同的数据减少http请求，也可手动刷新数据源
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-3 proCard">
      <n-alert title="基础使用" type="info">
        自动加载数据，首次加载缓存，之后同一个KEY不在获取新数据</n-alert
      >
      <div class="mt-3">
        <n-space align="center">
          <BasicSelect
            ref="basicSelectRef"
            v-model:value="selectValue"
            :request="loadSelectData"
            @update:value="handleUpdateValue"
            cache
            cacheKey="SELECT_CLASSIFY"
            ><template #action>如果你点开了这个例子，你可能需要它</template></BasicSelect
          >
          <n-button @click="setSelectData">设置选中值</n-button>
          <n-button @click="getSelectValue">获取选中值</n-button>
          <n-button @click="getSelectData">获取数据源</n-button>
          <n-button @click="refreshSelectData">刷新数据</n-button>
        </n-space>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { getClassifyList } from '@/api/select/select';
  import { BasicSelect } from '@/components/Select';
  import { getTableList } from '@/api/table/list';
  import { useMessage } from 'naive-ui';
  const message = useMessage();
  const selectValue = ref('hot');
  const basicSelectRef = ref();
  const params = {
    type: 1,
  };

  async function loadSelectData(res) {
    //这里可以进行数据转换处理
    return (await getClassifyList({ ...res, ...params })).map((item, index) => {
      return {
        ...item,
        index,
      };
    });
  }

  function handleUpdateValue(value, option) {
    message.info('value: ' + JSON.stringify(value));
    message.info('option: ' + JSON.stringify(option));
  }

  function refreshSelectData() {
    basicSelectRef?.value.fetch();
  }

  function setSelectData() {
    selectValue.value = 'new';
  }

  function getSelectValue() {
    message.info('value: ' + JSON.stringify(selectValue.value));
  }

  function getSelectData() {
    message.info('Data: ' + JSON.stringify(basicSelectRef?.value.getData()));
  }
</script>

<style lang="less"></style>
