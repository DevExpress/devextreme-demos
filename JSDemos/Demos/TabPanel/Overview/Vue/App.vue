<template>
  <div class="tabpanel-demo">
    <div className="widget-container">
      <DxTabPanel
        width="100%"
        height="418"
        item-template="tabPanelItem"
        :animation-enabled="true"
        :swipe-enabled="true"
        :data-source="dataSource"
        :selected-index="selectedIndex"
        :tabs-position="tabsPosition"
        :styling-mode="stylingMode"
        :icon-position="iconPosition"
        :show-nav-buttons="showNavButtons"
        :on-option-changed="onSelectionChanged"
      >
        <template #tabPanelItem="{ data }">
          <TabPanelItem
            :tasks="data.tasks"
          />
        </template>
      </DxTabPanel>
    </div>

    <div className="options">
      <div className="caption">Options</div>

      <div className="option">
        <div className="option-label">Tabs position</div>

        <DxSelectBox
          :input-attr="tabsPositionsSelectBoxLabel"
          :items="tabsPositions"
          :value="tabsPosition"
          :on-value-changed="onTabsPositionChanged"
        />
      </div>

      <div className="option">
        <div className="option-label">Styling mode</div>

        <DxSelectBox
          :input-attr="stylingModesSelectBoxLabel"
          :items="stylingModes"
          :value="stylingMode"
          :on-value-changed="onStylingModeChanged"
        />
      </div>

      <div className="option">
        <div className="option-label">Icon position</div>

        <DxSelectBox
          :input-attr="iconPositionsSelectBoxLabel"
          :items="iconPositions"
          :value="iconPosition"
          :on-value-changed="onIconPositionChanged"
        />
      </div>

      <div className="option">
        <DxCheckBox
          text="Show navigation buttons"
          :element-attr="navButtonsCheckBoxLabel"
          :value="showNavButtons"
          :on-value-changed="onShowNavButtonsChanged"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DxTabPanel from 'devextreme-vue/tab-panel';
import DxSelectBox from 'devextreme-vue/select-box';
import DxCheckBox from 'devextreme-vue/check-box';

import TabPanelItem from './TabPanelItem.vue';

import {
  tabsPositionsSelectBoxLabel,
  tabsPositions,
  stylingModesSelectBoxLabel,
  stylingModes,
  iconPositionsSelectBoxLabel,
  iconPositions,
  navButtonsCheckBoxLabel,
  dataSource,
} from './data.js';

export default {
  components: {
    DxTabPanel,
    DxSelectBox,
    DxCheckBox,
    TabPanelItem,
  },

  data() {
    return {
      tabsPositionsSelectBoxLabel,
      tabsPositions,
      tabsPosition: tabsPositions[0],
      stylingModesSelectBoxLabel,
      stylingModes,
      stylingMode: stylingModes[0],
      iconPositionsSelectBoxLabel,
      iconPositions,
      iconPosition: iconPositions[0],
      navButtonsCheckBoxLabel,
      dataSource,
      showNavButtons: true,
      selectedIndex: 0,
    };
  },

  methods: {
    onTabsPositionChanged(args) {
      this.tabsPosition = args.value;
    },
    onStylingModeChanged(args) {
      this.stylingMode = args.value;
    },
    onIconPositionChanged(args) {
      this.iconPosition = args.value;
    },
    onShowNavButtonsChanged(args) {
      this.showNavButtons = args.value;
    },
    onSelectionChanged(args) {
      if (args.name === 'selectedIndex') {
        this.selectedIndex = args.value;
      }
    },
  },
};
</script>

<style>
.tabpanel-demo {
  display: flex;
  height: 100%;
  min-height: 450px;
}

.widget-container {
  display: inline;
  flex-grow: 1;
  min-width: 450px;
  padding: 16px 32px;
}

.dx-theme-material .dx-tabpanel {
  border-radius: 8px;
  overflow: hidden;
}

.dx-tabs-vertical {
  min-width: 120px;
}

.dx-multiview-item-content {
  padding: 24px;
}

.options {
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-weight: 500;
  font-size: 18px;
}

.option {
  margin-top: 20px;
}

.dx-theme-material .widget-container {
  background-color: rgba(191, 191, 191, 0.15);
}

.dx-color-scheme-teal-light .dx-tabpanel,
.dx-color-scheme-orange-light .dx-tabpanel,
.dx-color-scheme-lime-light .dx-tabpanel,
.dx-color-scheme-blue-light .dx-tabpanel,
.dx-color-scheme-purple-light .dx-tabpanel {
  background-color: #fff;
}

.dx-color-scheme-teal-dark .dx-tabpanel,
.dx-color-scheme-purple-dark .dx-tabpanel,
.dx-color-scheme-orange-dark .dx-tabpanel,
.dx-color-scheme-lime-dark .dx-tabpanel,
.dx-color-scheme-blue-dark .dx-tabpanel {
  background-color: #363640;
}

.dx-color-scheme-teal-light .option-label,
.dx-color-scheme-purple-light .option-label,
.dx-color-scheme-orange-light .option-label,
.dx-color-scheme-lime-light .option-label,
.dx-color-scheme-blue-light .option-label,
.dx-color-scheme-carmine .option-label,
.dx-color-scheme-greenmist .option-label,
.dx-color-scheme-light .option-label {
  color: rgba(0, 0, 0, 0.6);
}
</style>
