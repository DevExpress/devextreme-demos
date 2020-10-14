<template>
  <div>
    <DxPivotGrid
      id="sales"
      :allow-sorting-by-summary="true"
      :allow-sorting="true"
      :allow-filtering="true"
      :allow-expand-all="true"
      :show-borders="true"
      :data-source="dataSource"
      :show-column-totals="false"
      @cell-prepared="onCellPrepared"
      show-totals-prior="rows"
    >
      <DxFieldChooser :enabled="false"/>
    </DxPivotGrid>
    <DxCheckBox
      :value="true"
      :on-value-changed="changeAllowCrossGroupCalculation"
      text="Allow cross-group running totals accumulation"
    />
  </div>
</template>
<script>
import DxPivotGrid, {
  DxExport,
  DxFieldChooser
} from 'devextreme-vue/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import DxCheckBox from 'devextreme-vue/check-box';

import sales from './data.js';

export default {
  components: {
    DxPivotGrid,
    DxExport,
    DxFieldChooser,
    DxCheckBox
  },
  data() {
    return {
      allowCrossGroupCalculation: true,
      dataSource: new PivotGridDataSource({
      fields: [{
        caption: 'Region',
        width: 120,
        dataField: 'region',
        area: 'row'
      }, {
        caption: 'City',
        dataField: 'city',
        width: 150,
        area: 'row'
      }, {
        dataField: 'date',
        dataType: 'date',
        groupInterval: 'year',
        area: 'column',
        expanded: true
      }, {
        area: 'column',
        expanded: true,
        selector: function({date}) {
          const currDate = new Date(date);
          const currMonth = currDate.getMonth();
          return currMonth <= 5
            ? 'H1'
            : 'H2';
        }
      }, {
        caption: 'Total',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
      }, {
        caption: 'Running Total',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
        runningTotal: 'row',
        allowCrossGroupCalculation: true
      }, {
        caption: 'Profit/Loss',
        dataType: 'number',
        format: 'currency',
        area: 'data',
        calculateSummaryValue: function(summaryCell) {
          const prevCell = summaryCell.prev('column', true);
          if(prevCell) {
            const prevVal = prevCell.value('Total');
            const currVal = summaryCell.value('Total');
            return currVal - prevVal;
          }
          return null;
        }
      }],
        store: sales
      })
    };
  },
  methods: {
    changeAllowCrossGroupCalculation(e) {
      this.dataSource.field(5, { allowCrossGroupCalculation: e.value });
      this.dataSource.load();
    },
    onCellPrepared(e) {
      if(e.area === 'data' && e.cell.dataIndex === 2) {
        e.cellElement.style.color = e.cell.value < 0
          ? 'red'
          : 'green';
      }
    }
  },
};
</script>
<style scoped>
#sales {
    margin: 20px 0;
}
</style>
