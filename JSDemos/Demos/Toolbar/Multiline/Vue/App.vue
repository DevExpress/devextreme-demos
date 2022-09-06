<template>
  <div>
    <DxResizable
      class="resizable-container"
      :min-width="655"
      :min-height="150"
      :max-height="370"
      handles="right"
    >
      <DxToolbar :multiline="multiline">
        <DxItem
          location="before"
          locate-in-menu="never"
          widget="dxButton"
          :options="undoButtonOptions"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          widget="dxButton"
          :options="redoButtonOptions"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          template="separatorTemplate"
        />
        <DxItem
          location="before"
          widget="dxDropDownButton"
          :options="colorPickerOptions"
        />
        <DxItem
          location="before"
          widget="dxDropDownButton"
          :options="fontSizeOptions"
        />
        <DxItem
          location="before"
          widget="dxDropDownButton"
          :style="{ lineHeight }"
          :options="lineHeightOptions"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          template="separatorTemplate"
        />
        <DxItem
          :options="fontSelectorOptions"
          location="before"
          locate-in-menu="auto"
          widget="dxSelectBox"
        />
        <DxItem
          location="before"
          locate-in-menu="auto"
          template="separatorTemplate"
          menu-item-template="menuSeparatorTemplate"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          widget="dxButtonGroup"
          :options="fontStyleOptions"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          template="separatorTemplate"
        />
        <DxItem
          location="before"
          locate-in-menu="auto"
          template="textAlignTemplate"
          menu-item-template="textAlignMenuTemplate"
        />
        <DxItem
          location="before"
          locate-in-menu="never"
          widget="dxButtonGroup"
          display-expr="text"
          :options="listOptions"
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
          show-text="inMenu"
          :options="checkBoxOptions"
        />
        <DxItem
          location="after"
          locate-in-menu="never"
          widget="dxButton"
          show-text="inMenu"
          :options="attachOptions"
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
          location="after"
          locate-in-menu="auto"
          widget="dxButton"
          show-text="inMenu"
          :options="aboutButtonOptions"
        />

        <template #separatorTemplate>
          <div class="separator"/>
        </template>

        <template #menuSeparatorTemplate>
          <div class="menu-separator"/>
        </template>

        <template #colorpicker="{ data }">
          <div class="custom-color-picker">
            <i
              v-for="(itemColor, i) in data"
              :key="i"
              :class="
                itemColor
                  ? 'color dx-icon dx-icon-square'
                  : 'color dx-icon dx-icon-square dx-theme-text-color'
              "
              :style="{ color: itemColor }"
              @click="onColorClick(itemColor)"
            />
          </div>
        </template>

        <template #fontSizeTemplate="{ data }">
          <div :style="{ fonstSize: `${data.size}px` }">{{ data.text }}</div>
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

    <div class="options-container">
      <div class="caption">Options</div>

      <DxRadioGroup
        layout="horizontal"
        :items="reactivePriorities"
        :value="priority"
        :on-value-changed="onChangeHandler"
      />
    </div>
  </div>
</template>

<script>
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import DxButtonGroup from 'devextreme-vue/button-group';
import DxResizable from 'devextreme-vue/resizable';
import DxDropDownButton from 'devextreme-vue/drop-down-button';
import DxDateBox from 'devextreme-vue/date-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxRadioGroup from 'devextreme-vue/radio-group';
import notify from 'devextreme/ui/notify';
import {
  colors,
  fontSizes,
  lineHeights,
  fonts,
  fontStyles,
  textAligns,
  listTypes,
} from './data.js';
import 'devextreme/ui/select_box';

const priorities = ['Multiline mode', 'Singleline mode'];

export default {
  components: {
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
      colorPicker: null,
      color: null,
      priority: priorities[0],
      lineHeight: lineHeights[1].lineHeight,
      textAlign: [textAligns[0].alignment],
    };
  },

  computed: {
    reactiveColors() {
      return colors;
    },

    reactivePriorities() {
      return priorities;
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

    colorPickerOptions() {
      return {
        items: colors,
        icon: 'square',
        dropDownOptions: { width: 'auto' },
        dropDownContentTemplate: 'colorpicker',
        onInitialized: ({ component }) => {
          this.colorPicker = component;
        },
      };
    },

    fontSizeOptions() {
      return {
        displayExpr: 'text',
        keyExpr: 'size',
        useSelectMode: true,
        items: fontSizes,
        selectedItemKey: fontSizes[2].size,
        itemTemplate: 'fontSizeTemplate',
      };
    },

    lineHeightOptions() {
      return {
        icon: 'indent',
        displayExpr: 'text',
        keyExpr: 'lineHeight',
        useSelectMode: true,
        items: lineHeights,
        selectedItemKey: this.lineHeight,
        onSelectionChanged: (e) => {
          this.lineHeight = e.item.lineHeight;
        },
      };
    },

    fontSelectorOptions() {
      return {
        placeholder: 'Font',
        displayExpr: 'text',
        dataSource: fonts,
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
        value: new Date(),
      };
    },

    checkBoxOptions() {
      return {
        value: false,
        text: 'Private',
        onOptionChanged() {
          notify('Private option has been changed!');
        },
      };
    },

    attachOptions() {
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
    onColorClick(color) {
      this.color = color;
      this.colorPicker
        .element()
        .getElementsByClassName('dx-icon-square')[0].style.color = color;
      this.colorPicker.close();
    },

    onTextAlignItemClick(e) {
      notify(`The "${e.itemData.hint}" button was clicked`);
    },

    onChangeHandler({ value }) {
      this.multiline = value === priorities[0];
      this.priority = value;
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

.demo-container {
  width: 895px;
}

.resizable-container {
  padding: 10px;
  height: 300px;
  border: 1px dashed #dbdbdb;
  border-radius: 4px;
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

.separator {
  height: 36px;
  margin: 0 5px;
  border-left: 1px solid #ddd;
}

.menu-separator {
  height: 1px;
  border-bottom: 1px solid #ddd;
}

.dx-toolbar-menu-section .dx-toolbar-menu-custom:first-child > .menu-separator {
  display: none;
}
</style>
