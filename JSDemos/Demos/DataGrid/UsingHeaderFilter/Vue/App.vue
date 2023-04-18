<template>
  <div>
    <DxTreeList
      id="employees"
      :data-source="employees"
      :column-auto-width="true"
      :show-row-lines="true"
      :show-borders="true"
      key-expr="ID"
    >
      <DxHeaderFilter
        :visible="true"
      />
      <DxColumn
        data-field="Full_Name"
      />
      <DxColumn
        data-field="Title"
        caption="Position"
      >
        <DxHeaderFilter
          :allow-select-all="false"
        >
          <DxSearch
            :enabled="true"
          />
        </DxHeaderFilter>
      </DxColumn>
      <DxColumn
        data-field="City"
      >
        <DxHeaderFilter>
          <DxSearch
            :enabled="true"
            :search-expr="['City', 'State']"
            :editor-options="{ placeholder: 'Search city or state' }"
          />
        </DxHeaderFilter>
      </DxColumn>
      <DxColumn
        data-field="Mobile_Phone"
      />
      <DxColumn
        data-field="Hire_Date"
        data-type="date"
      />
    </DxTreeList>
  </div>
</template>
<script>
import {
  DxTreeList, DxHeaderFilter, DxSearch, DxColumn,
} from 'devextreme-vue/tree-list';
import { employees } from './data.js';

export default {
  components: {
    DxTreeList, DxHeaderFilter, DxSearch, DxColumn,
  },
  data() {
    return {
      employees,
      expandedRowKeys: [1],
    };
  },
};
</script>
<style scoped>
#employees {
  max-height: 440px;
}
</style>
