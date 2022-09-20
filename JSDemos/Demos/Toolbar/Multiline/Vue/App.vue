<template>
  <div>
    <div class="widget-container">
      <DxResizable
        class="resizable-container"
        :min-width="500"
        :min-height="150"
        :max-height="370"
        handles="right"
        area=".widget-container"
      >
        <DxToolbar :multiline="multiline">
          <DxItem
            location="before"
            widget="dxButton"
            :options="undoButtonOptions"
          />
          <DxItem
            location="before"
            widget="dxButton"
            :options="redoButtonOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            template="separatorTemplate"
            menu-item-template="menuSeparatorTemplate"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            widget="dxDropDownButton"
            :options="fontSizeOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            widget="dxDropDownButton"
            :options="lineHeightOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            widget="dxSelectBox"
            :options="fontFamilyOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            template="separatorTemplate"
            menu-item-template="menuSeparatorTemplate"
          />
          <DxItem
            location="before"
            widget="dxButtonGroup"
            :options="fontStyleOptions"
          />
          <DxItem
            location="before"
            template="separatorTemplate"
          />
          <DxItem
            css-class="dx-toolbar-hidden-button-group"
            location="before"
            locate-in-menu="auto"
            template="textAlignTemplate"
            menu-item-template="textAlignMenuTemplate"
          />
          <DxItem
            location="before"
            widget="dxButtonGroup"
            display-expr="text"
            :options="listOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            template="separatorTemplate"
            menu-item-template="menuSeparatorTemplate"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            widget="dxDateBox"
            :options="dateBoxOptions"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            template="separatorTemplate"
            menu-item-template="menuSeparatorTemplate"
          />
          <DxItem
            location="before"
            locate-in-menu="auto"
            widget="dxCheckBox"
            :options="checkBoxOptions"
          />
          <DxItem
            location="after"
            widget="dxButton"
            show-text="inMenu"
            :options="attachButtonOptions"
          />
          <DxItem
            location="after"
            locate-in-menu="auto"
            widget="dxButton"
            show-text="inMenu"
            :options="addButtonOptions"
          />
          <DxItem
            location="after"
            locate-in-menu="auto"
            widget="dxButton"
            show-text="inMenu"
            :options="removeButtonOptions"
          />
          <DxItem
            locate-in-menu="always"
            widget="dxButton"
            show-text="inMenu"
            :options="aboutButtonOptions"
          />

          <template #separatorTemplate>
            <div class="toolbar-separator"/>
          </template>

          <template #menuSeparatorTemplate>
            <div class="toolbar-menu-separator"/>
          </template>

          <template #fontSizeTemplate="{ data }">
            <div :style="{ fontSize: data.size + 'px' }">{{ data.text }}</div>
          </template>

          <template #textAlignTemplate>
            <DxButtonGroup
              key-expr="alignment"
              styling-mode="outlined"
              :items="getTextAlignItems(false)"
              :selected-item-keys="textAlign"
              @item-click="onTextAlignItemClick"
            />
          </template>

          <template #textAlignMenuTemplate>
            <DxButtonGroup
              :items="getTextAlignItems(true)"
              display-expr="text"
              :selected-item-keys="textAlign"
              key-expr="alignment"
              styling-mode="outlined"
              @item-click="onTextAlignItemClick"
            />
          </template>
        </DxToolbar>
      </DxResizable>
    </div>

    <div class="options-container">
      <div class="caption">Options</div>

      <DxRadioGroup
        v-model="multiline"
        layout="horizontal"
        value-expr="value"
        :items="toolbarLineModes"
      />
    </div>
  </div>
</template>

<script>
import DxCheckBox from 'devextreme-vue/check-box';
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import DxButtonGroup from 'devextreme-vue/button-group';
import DxResizable from 'devextreme-vue/resizable';
import DxDropDownButton from 'devextreme-vue/drop-down-button';
import DxDateBox from 'devextreme-vue/date-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxRadioGroup from 'devextreme-vue/radio-group';
import notify from 'devextreme/ui/notify';

import {
  fontSizes,
  lineHeights,
  fontFamilies,
  fontStyles,
  textAligns,
  listTypes,
} from './data.js';
import 'devextreme/ui/select_box';

export default {
  components: {
    DxCheckBox,
    DxToolbar,
    DxButtonGroup,
    DxItem,
    DxResizable,
    DxRadioGroup,
    DxDropDownButton,
    DxDateBox,
    DxSelectBox,
  },

  data() {
    return {
      multiline: true,
      lineHeight: lineHeights[1].lineHeight,
      textAlign: [textAligns[0].alignment],
      fontSize: fontSizes[2].size,
    };
  },

  computed: {
    toolbarLineModes() {
      return [
        {
          text: 'Multiline mode',
          value: true,
        },
        {
          text: 'Singleline mode',
          value: false,
        },
      ];
    },

    undoButtonOptions() {
      return {
        icon: 'undo',
        onClick() {
          notify('Undo button has been clicked!');
        },
      };
    },

    redoButtonOptions() {
      return {
        icon: 'redo',
        onClick() {
          notify('Redo button has been clicked!');
        },
      };
    },

    fontSizeOptions() {
      return {
        width: '100%',
        displayExpr: 'text',
        keyExpr: 'size',
        useSelectMode: true,
        items: fontSizes,
        itemTemplate: 'fontSizeTemplate',
        selectedItemKey: this.fontSize,
        onSelectionChanged: () => {
          notify('Font size value has been changed!');
        },
      };
    },

    lineHeightOptions() {
      return {
        width: '100%',
        icon: 'indent',
        displayExpr: 'text',
        keyExpr: 'lineHeight',
        useSelectMode: true,
        items: lineHeights,
        selectedItemKey: this.lineHeight,
        onSelectionChanged: () => {
          notify('Line height value has been changed!');
        },
      };
    },

    fontFamilyOptions() {
      return {
        placeholder: 'Font',
        displayExpr: 'text',
        dataSource: fontFamilies,
      };
    },

    fontStyleOptions() {
      return {
        displayExpr: 'text',
        items: fontStyles,
        keyExpr: 'style',
        stylingMode: 'outlined',
        selectionMode: 'multiple',
        onItemClick(e) {
          notify(`The "${e.itemData.hint}" button was clicked`);
        },
      };
    },

    listOptions() {
      return {
        items: listTypes,
        keyExpr: 'alignment',
        stylingMode: 'outlined',
        onItemClick(e) {
          notify(`The "${e.itemData.hint}" button was clicked`);
        },
      };
    },

    dateBoxOptions() {
      return {
        width: 200,
        type: 'date',
        value: new Date(2022, 9, 7),
      };
    },

    checkBoxOptions() {
      return {
        value: false,
        text: 'Checkbox text',
        onOptionChanged() {
          notify('Checkbox value has been changed!');
        },
      };
    },

    attachButtonOptions() {
      return {
        icon: 'attach',
        text: 'Attach',
        onClick() {
          notify('Attach button has been clicked!');
        },
      };
    },

    addButtonOptions() {
      return {
        icon: 'add',
        text: 'Add',
        onClick() {
          notify('Add button has been clicked!');
        },
      };
    },

    removeButtonOptions() {
      return {
        icon: 'trash',
        text: 'Remove',
        onClick() {
          notify('Remove button has been clicked!');
        },
      };
    },

    aboutButtonOptions() {
      return {
        icon: 'help',
        text: 'About',
        onClick() {
          notify('About button has been clicked!');
        },
      };
    },
  },

  methods: {
    onTextAlignItemClick(e) {
      this.textAlign = e.itemData.alignment;
      notify(`The "${e.itemData.hint}" button was clicked`);
    },

    getTextAlignItems(isExtended) {
      return !isExtended
        ? textAligns.map(({ icon, alignment, hint }) => ({
          icon,
          alignment,
          hint,
        }))
        : textAligns;
    },
  },
};
</script>

<style>
.dx-resizable-handle::after {
  content: "";
  background-color: #337ab7;
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid #337ab7;
  top: calc(50% - 7px);
}

.dx-resizable-handle-right::after {
  right: -7px;
}

.dx-toolbar.dx-toolbar-multiline .dx-toolbar-item {
  margin-bottom: 5px;
}

.dx-toolbar-menu-section .dx-selectbox {
  width: auto;
}

.widget-container {
  width: calc(100% - 6px);
}

.resizable-container {
  padding: 10px;
  height: 300px;
  border: 1px dashed #dbdbdb;
  border-radius: 4px;
  box-sizing: border-box;
}

.options-container {
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: relative;
}

.caption {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.toolbar-separator {
  height: 36px;
  margin: 0 5px;
  border-left: 1px solid #ddd;
}

.toolbar-menu-separator {
  height: 1px;
  border-bottom: 1px solid #ddd;
}
</style>
