<template>
  <div>
    <DxButton
      id="btnContainer"
      text="Export to PDF"
      @click="onExport()"
    />

    <DxDataGrid
      id="gridContainer"
      :ref="dataGridRef"
      :data-source="dataSource"
      :allow-column-reordering="true"
      :show-borders="true"
    >
      <DxColumn
        :width="60"
        data-field="Prefix"
        caption="Title"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn data-field="City"/>
      <DxColumn
        :group-index="0"
        data-field="State"
      />
      <DxColumn
        :width="130"
        data-field="Position"
      />
      <DxColumn
        :width="100"
        data-field="BirthDate"
        data-type="date"
      />
      <DxColumn
        :width="100"
        data-field="HireDate"
        data-type="date"
      />
      <DxGroupPanel :visible="true"/>
      <DxGrouping :auto-expand-all="true"/>
    </DxDataGrid>
  </div>
</template>
<script>
import { DxDataGrid, DxColumn, DxGroupPanel, DxGrouping } from 'devextreme-vue/data-grid';
import DxButton from 'devextreme-vue/button';
import service from './data.js';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { exportDataGrid } from 'devextreme/pdf_exporter';

const dataGridRef = 'dataGrid';

export default {
  components: {
    DxDataGrid, DxButton, DxColumn, DxGroupPanel, DxGrouping
  },
  data() {
    return {
      dataSource: service.getEmployees(),
      dataGridRef
    };
  },
  computed: {
    dataGrid: function() {
      return this.$refs[dataGridRef].instance;
    }
  },
  methods: {
    onExport(e) {
      const pdfDoc = new jsPDF('p', 'pt', 'a4');
      const options = {
        jsPDFDocument: pdfDoc,
        component: this.dataGrid
      };
      exportDataGrid(options).then(function(){
        pdfDoc.save('dxDataGrid.pdf');
      });
    }
  }
};
</script>

<style scoped>
#btnContainer {
  margin-bottom: 10px;
}

#gridContainer {
  height: 423px;
}
</style>
