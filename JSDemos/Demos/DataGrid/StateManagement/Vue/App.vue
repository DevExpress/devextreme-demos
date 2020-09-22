<template>
  <DxDataGrid
    key-expr="OrderID"
    :data-source="dataSource"
    :show-borders="true"
    :repaint-changes-only="true"
    @saving="onSaving"
  >
    <DxEditing
      mode="row"
      :allow-adding="true"
      :allow-deleting="true"
      :allow-updating="true"
      :changes.sync="changes"
      :edit-row-key.sync="editRowKey"
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
import applyChanges from 'devextreme/data/apply_changes';

const URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing
  },
  data() {
    return {
      dataSource: [],
      changes: [],
      editRowKey: null
    };
  },
  created() {
    this.sendRequest(URL + "/Orders").then(data => {
      this.dataSource = data;
    });
    this.onSaving = this.onSaving.bind(this);
  },
  methods: {
    onSaving(e) {
      e.cancel = true;

      var change = e.changes[0];

      if (change) {
        e.promise = this.sendChange(URL, change).then(data => {
          if (change.type === "insert") {
            change.data = data;
          }
          this.dataSource = applyChanges(this.dataSource, [change], { keyExpr: "OrderID" });
          this.editRowKey = null;
          this.changes = [];
        });
      }
    },
    sendChange(url, change) {
      switch (change.type) {
        case "insert":
          return this.sendRequest(url + "/InsertOrder", "POST", {
            values: JSON.stringify(change.data)
          });
        case "update":
          return this.sendRequest(url + "/UpdateOrder", "PUT", {
            key: change.key,
            values: JSON.stringify(change.data)
          });
        case "remove":
          return this.sendRequest(url + "/DeleteOrder", "DELETE", {
            key: change.key
          });
      }
    },
    sendRequest(url, method, data) {
      method = method || "GET";
      data = data || {};

      const params = Object.keys(data)
        .map(key => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join("&");

      if (method === "GET") {
        return fetch(url, {
          method: method,
          credentials: "include"
        }).then(result =>
          result.json().then(json => {
            if (result.ok) return json.data;
            throw json.Message;
          })
        );
      }

      return fetch(url, {
        method: method,
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
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
