<template>
  <div>
    <!-- Todo. Add resizable -->
    <DxToolbar>
      <DxItem
        :options="undoButtonOptions"
        location="before"
        locate-in-menu="never"
        widget="dxButton"
      />
      <DxItem
        :options="redoButtonOptions"
        location="before"
        locate-in-menu="never"
        widget="dxButton"
      />
      <DxItem
        location="before"
        locate-in-menu="never"
        template="separatorTemplate"
      />
      <!-- Добавить внутрь DxItem template dxDropDownButton -->
      <DxItem
        :options="colorPickerOptions"
        location="before"
        widget="dxDropDownButton"
      />
      <DxItem
        :options="fontSizeOptions"
        location="before"
        widget="dxDropDownButton"
      />
      <DxItem
        :style="{ lineHeight: lineHeight }"
        :options="lineHeightOptions"
        location="before"
        widget="dxDropDownButton"
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
        :options="menuSeparatorOptions"
        location="before"
        locate-in-menu="auto"
      />
      <DxItem
        :options="fontStyleOptions"
        location="before"
        locate-in-menu="never"
        widget="dxButtonGroup"
      />
      <DxItem
        location="before"
        locate-in-menu="never"
        template="separatorTemplate"
      />
      <DxItem
        :options="textAlignOptions"
        location="before"
        locate-in-menu="auto"
      />
      <DxItem
        :options="listOptions"
        location="before"
        locate-in-menu="never"
        widget="dxButtonGroup"
        display-expr="text"
      />
      <DxItem
        :options="menuSeparatorOptions"
        location="before"
        locate-in-menu="auto"
      />
      <DxItem
        :options="dateBoxOptions"
        location="before"
        locate-in-menu="auto"
        widget="dxDateBox"
      />
      <DxItem
        :options="menuSeparatorOptions"
        location="before"
        locate-in-menu="auto"
      />
      <DxItem
        :options="checkBoxOptions"
        location="before"
        locate-in-menu="auto"
        widget="dxCheckBox"
        show-text="inMenu"
      />
      <DxItem
        :options="dateBoxOptions"
        location="after"
        locate-in-menu="never"
        widget="dxButton"
        show-text="inMenu"
      />
      <DxItem
        :options="removeButtonOptions"
        location="after"
        locate-in-menu="auto"
        widget="dxButton"
        show-text="inMenu"
      />
      <DxItem
        :options="removeButtonOptions"
        locate-in-menu="always"
        widget="dxButton"
        show-text="inMenu"
      />

      <template #separatorTemplate>
        <div class="separator"/>
      </template>

      <template #menuSeparatorTemplate>
        <div class="menu-separator"/>
      </template>

      <template #colorpickerTemplate="{ data }">
        <div class="custom-color-picker">
          <i
            v-for="(itemColor, i) in data"
            :key="i"
            :class="itemColor ?
              'color dx-icon dx-icon-square' :
              'color dx-icon dx-icon-square dx-theme-text-color'"
            :style="{ color: itemColor }"
            @click="onColorClick(itemColor)"
          />
        </div>
      </template>

      <template #fontSizeTemplate="{ data }">
        <div :style="{ fonstSize: `${itemData.size}px` }">{{ data.text }}</div>
      </template>

      <template #textAlignTemplate>
        <DxButtonGroup
          :items="getTextAlignItems"
          display-expr="text"
          :selected-item-keys="['left']"
          key-expr="alignment"
          styling-mode="outlined"
          @item-click="onTextAlignItemClick"
        />
      </template>

      <template #textAlignMenuTemplate>
        <DxButtonGroup
          :items="getTextAlignItems(true)"
          display-expr="text"
          :selected-item-keys="['left']"
          key-expr="alignment"
          styling-mode="outlined"
          @item-click="onTextAlignItemClick"
        />
      </template>
    </DxToolbar>
  </div>
</template>
<script>
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import DxButtonGroup from 'devextreme-vue/button-group';
import notify from 'devextreme/ui/notify';
import { colors, fontSizes, lineHeights } from './data.js';
import 'devextreme/ui/select_box';

export default {
  components: {
    DxToolbar,
    DxButtonGroup,
    DxItem,
  },

  data() {
    return {
      colorPicker: null,
      lineHeight: this.lineHeightOptions.selectedItemKey,
    };
  },

  computed: {
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
        onInitialized: ({ component }) => {
          this.colorPicker = component;
        },
        dropDownContentTemplate: 'colorpickerTemplate',
      };
    },

    fontSizeOptions() {
      return {
        displayExpr: 'text',
        keyExpr: 'size',
        useSelectMode: true,
        items: fontSizes,
        selectedItemKey: 14,
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
        selectedItemKey: 1.35,
        onSelectionChanged: (e) => {
          this.lineHeight = e.item.lineHeight;
        },
      };
    },

    menuSeparatorOptions() {
      return {
        template: 'separatorTemplate',
        menuItemTemplate: 'menuSeparatorTemplate',
      };
    },

    fontSelectorOptions() {
      return {
        placeholder: 'Font',
        displayExpr: 'text',
        dataSource: [
          { text: 'Arial' },
          { text: 'Courier New' },
          { text: 'Georgia' },
          { text: 'Impact' },
          { text: 'Lucida Console' },
          { text: 'Tahoma' },
          { text: 'Times New Roman' },
        ],
      };
    },

    fontStyleOptions() {
      return {
        displayExpr: 'text',
        items: [
          {
            icon: 'bold',
            style: 'bold',
            hint: 'Bold',
          },
          {
            icon: 'italic',
            style: 'italic',
            hint: 'Italic',
          },
          {
            icon: 'underline',
            style: 'underline',
            hint: 'Underlined',
          },
          {
            icon: 'strike',
            style: 'strike',
            hint: 'Strikethrough',
          },
        ],
        keyExpr: 'style',
        stylingMode: 'outlined',
        selectionMode: 'multiple',
        onItemClick(e) {
          notify(`The "${e.itemData.hint}" button was clicked`);
        },
      };
    },

    textAlignOptions() {
      return {
        template: 'textAlignTemplate',
        menuItemTemplate: 'textAlignMenuTemplate',
      };
    },

    listOptions() {
      return {
        items: [
          {
            icon: 'orderedlist',
            alignment: 'orderedlist',
            hint: 'Ordered',
          },
          {
            icon: 'bulletlist',
            alignment: 'bulletlist',
            hint: 'Bullet',
          },
        ],
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
      this.colorPicker.element().getElementsByClassName('dx-icon-square')[0].style.color = color;
      this.colorPicker.close();
    },

    onTextAlignItemClick(e) {
      notify(`The "${e.itemData.hint}" button was clicked`);
    },

    getTextAlignItems(isExtended = false) {
      const items = [
        {
          icon: 'alignleft',
          alignment: 'left',
          hint: 'Align left',
          text: 'Align left',
        },
        {
          icon: 'aligncenter',
          alignment: 'center',
          hint: 'Center',
          text: 'Center',
        },
        {
          icon: 'alignright',
          alignment: 'right',
          hint: 'Align right',
          text: 'Align right',
        },
        {
          icon: 'alignjustify',
          alignment: 'justify',
          hint: 'Justify',
          text: 'Justify',
        },
      ];

      return isExtended
        ? items.map(({ icon, alignment, hint }) => ({ icon, alignment, hint }))
        : items;
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
