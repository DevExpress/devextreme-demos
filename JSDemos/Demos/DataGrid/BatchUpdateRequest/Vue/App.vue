<template>
  <DxDataGrid
    id="gridContainer"
    key-expr="OrderID"
    :data-source="dataSource"
    :show-borders="true"
    :remote-operations="true"
    :repaint-changes-only="true"
    @saving="onSaving"
  >
    <DxEditing
      mode="batch"
      :allow-adding="true"
      :allow-deleting="true"
      :allow-updating="true"
    />
    <DxColumn data-field="OrderID" :allow-editing="false"></DxColumn>
    <DxColumn data-field="ShipName"></DxColumn>
    <DxColumn data-field="ShipCountry"></DxColumn>
    <DxColumn data-field="ShipCity"></DxColumn>
    <DxColumn data-field="ShipAddress"></DxColumn>
    <DxColumn data-field="OrderDate" data-type="date"></DxColumn>
    <DxColumn data-field="Freight"></DxColumn>
  </DxDataGrid>
</template>
<script>
import { DxDataGrid, DxColumn, DxEditing } from "devextreme-vue/data-grid";
import { createStore } from "devextreme-aspnet-data-nojquery";

const URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

const dataSource = createStore({
  key: "OrderID",
  loadUrl: `${URL}/Orders`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  }
});

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing
  },
  data() {
    return {
      dataSource
    };
  },
  created() {
    this.onSaving = this.onSaving.bind(this);
  },
  methods: {
    onSaving(e) {
      e.cancel = true;

      if(e.changes.length) {
        e.promise = this.sendBatchRequest(`${URL}/Batch`, e.changes).then(() => {
          e.component.refresh().done(() => {
            e.component.cancelEditData();
          });
        });
      }
    },
    sendBatchRequest(url, changes) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(changes),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        credentials: "include"
      }).then(result => {
        if (result.ok) {
          return result.text().then(text => text && JSON.parse(text));
        } else {
          return result.json().then(json => {
            throw json.Message;
          });
        }
      });
    }
  }
};
</script>
<style scoped>
#gridContainer {
  height: 440px;
}
</style>