<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="dataSource"
      :show-borders="true"
    >
      <DxEditing
        :allow-adding="true"
        :allow-deleting="true"
        :use-icons="true"
        :new-row-position="newRowPosition"
        :changes="changes"
      />

      <DxScrolling
        :mode="scrollingMode"
      />

      <DxColumn data-field="id"/>
      <DxColumn data-field="firstName"/>
      <DxColumn data-field="lastName"/>
      <DxColumn data-field="gender"/>
      <DxColumn data-field="birthDate"/>
      <DxColumn type="buttons">
        <DxButton
          icon="add"
          @click="addButtonClick"
        />
        <DxButton name="delete"/>
      </DxColumn>

      <DxToolbar>
        <DxItem
          name="addRowButton"
          show-text="always"
        />
      </DxToolbar>
    </DxDataGrid>

    <div class="options">
      <div class="caption">Options</div>
      <div class="option-container">
        <div class="option">
          <span>New Row Position</span>
          <DxSelectBox
            :items="newRowPositionOptions"
            v-model:value="newRowPosition"
          />
        </div>
        <div class="option">
          <span>Scrolling mode</span>
          <DxSelectBox
            :items="scrollingModeOptions"
            v-model:value="scrollingMode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DxDataGrid, {
  DxEditing, DxScrolling, DxColumn, DxButton, DxToolbar, DxItem,
} from 'devextreme-vue/data-grid';
import DxSelectBox from 'devextreme-vue/select-box';
import { generateData } from './data.js';

export default {
  components: {
    DxDataGrid, DxEditing, DxScrolling, DxColumn, DxButton, DxToolbar, DxItem, DxSelectBox,
  },
  data() {
    return {
      dataSource: generateData(100000),
      newRowPositionOptions: ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'],
      newRowPosition: 'viewportTop',
      changes: [],
      scrollingModeOptions: ['infinite', 'standard', 'virtual'],
      scrollingMode: 'standard',
    };
  },
  methods: {
    addButtonClick(e) {
      this.changes.push({
        type: 'insert',
        insertAfterKey: e.row.key,
      });
    },
  },
};
</script>

<style>
  #gridContainer {
    max-height: 440px;
  }

  .options {
    margin-top: 20px;
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    position: relative;
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }

  .option {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .option-caption {
    white-space: nowrap;
    margin: 0 8px;
  }

  .option > span {
    position: relative;
    margin-right: 10px;
  }

  #newRowPositionSelectBox {
    width: 150px;
  }

  #scrollingModeSelectBox {
    width: 150px;
  }
</style>
