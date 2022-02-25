<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="companies"
      key-expr="ID"
      :show-borders="true"
    >
      <DxGroupPanel :visible="true"/>
      <DxGrouping :auto-expand-all="true"/>
      <DxSortByGroupSummaryInfo summary-item="count"/>

      <DxColumn
        data-field="Name"
        :width="190"
      />
      <DxColumn
        data-field="Address"
        :width="200"
      />
      <DxColumn data-field="City"/>
      <DxColumn
        data-field="State"
        :group-index="0"
      />
      <DxColumn
        data-field="Phone"
        :format="phoneNumberFormat"
      />
      <DxColumn
        data-field="Website"
        caption=""
        alignment="center"
        :width="100"
        cell-template="grid-cell"
      />
      <template #grid-cell="{ data }">
        <a
          :href="data.text"
          target="_blank"
        >
          Website
        </a>
      </template>
      />

      <DxSummary>
        <DxTotalItem
          column="Name"
          summary-type="count"
          display-format="Total count: {0} companies"
        />
      </DxSummary>

      <DxToolbar>
        <DxItem name="groupPanel"/>
        <DxItem location="after">
          <DxButton
            icon="exportpdf"
            text="Export to PDF"
            @click="exportGrid()"
          />
        </DxItem>
      </DxToolbar>
    </DxDataGrid>
  </div>
</template>
<script>
import DxButton from 'devextreme-vue/button';
import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPaging,
  DxToolbar,
  DxItem,
} from 'devextreme-vue/data-grid';

import { jsPDF } from 'jspdf';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';

import service from './data.js';

const dataGridRef = 'dataGrid';

export default {
  components: {
    DxButton,
    DxColumn,
    DxGroupPanel,
    DxGrouping,
    DxPaging,
    DxDataGrid,
    DxToolbar,
    DxItem,
  },
  data() {
    return {
      companies: service.getCompanies(),
      dataGridRef,
    };
  },
  computed: {
    dataGrid() {
      return this.$refs[dataGridRef].instance;
    },
  },
  methods: {
    exportGrid() {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF();
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: this.dataGrid,
        columnWidths: [40, 40, 30, 30, 40],
        customizeCell(options) {
          const { gridCell } = options;
          const { pdfCell } = options;

          if (gridCell.rowType === 'data' && gridCell.column.dataField === 'Phone') {
            pdfCell.text = pdfCell.text.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
          } else if (gridCell.rowType === 'group') {
            pdfCell.backgroundColor = '#BEDFE6';
          } else if (gridCell.rowType === 'totalFooter') {
            pdfCell.font.style = 'italic';
          }
        },
        customDrawCell(options) {
          const { gridCell } = options;
          const { pdfCell } = options;

          if (gridCell.rowType === 'data' && gridCell.column.dataField === 'Website') {
            options.cancel = true;
            doc.setFontSize(11);
            doc.setTextColor('#0000FF');

            const textHeight = doc.getTextDimensions(pdfCell.text).h;
            doc.textWithLink('website',
              options.rect.x + pdfCell.padding.left,
              options.rect.y + options.rect.h / 2 + textHeight / 2, { url: pdfCell.text });
          }
        },
      }).then(() => {
        doc.save('Companies.pdf');
      });
    },
  },
};
</script>

<style scoped>
#exportButton {
  margin-bottom: 10px;
}
</style>
