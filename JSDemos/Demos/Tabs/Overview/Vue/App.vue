<template>
  <div id="tabs-demo">
    <div class="widget-container">
      <div :class="widgetWrapperClasses">
        <DxTabs
          id="withText"
          width="auto"
          :selected-index="0"
          :data-source="tabsWithText"
          :scroll-by-content="false"
          :show-nav-buttons="false"
          @initialized="saveTabInstance1"
        />
        <DxTabs
          id="withIconAndText"
          width="auto"
          :selected-index="0"
          :data-source="tabsWithIconAndText"
          :scroll-by-content="false"
          :show-nav-buttons="false"
          @initialized="saveTabInstance2"
        />
        <DxTabs
          id="withIcon"
          width="auto"
          :selected-index="0"
          :data-source="tabsWithIcon"
          :scroll-by-content="false"
          :show-nav-buttons="false"
          @initialized="saveTabInstance3"
        />
      </div>
    </div>

    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Orientation</span>
        <DxSelectBox
          :items="orientations"
          :input-attr="{ 'aria-label': 'Orientation' }"
          v-model:value="orientation"
          @value-changed="onOrientationChanged"
        />
      </div>

      <div class="option">
        <span>Styling mode</span>
        <DxSelectBox
          :items="stylingModes"
          :input-attr="{ 'aria-label': 'Styling Mode' }"
          v-model:value="stylingMode"
          @value-changed="onStylingModeChanged"
        />
      </div>

      <div class="option">
        <span>Icon position</span>
        <DxSelectBox
          :items="iconPositions"
          :input-attr="{ 'aria-label': 'Icon Position' }"
          v-model:value="iconPosition"
          @value-changed="onIconPositionChanged"
        />
      </div>

      <div class="option">
        <DxCheckBox
          id="show-navigation-buttons"
          text="Show navigation buttons"
          :input-attr="{ 'aria-label': 'Show navigation buttons' }"
          :value="false"
          @value-changed="onShowNavigationChanged"
        />
      </div>

      <div class="option">
        <DxCheckBox
          text="Scroll content"
          :input-attr="{ 'aria-label': 'Scroll content' }"
          :value="false"
          @value-changed="onScrollContentChanged"
        />
      </div>

      <div class="option">
        <DxCheckBox
          text="Full width"
          :input-attr="{ 'aria-label': 'Full width' }"
          :value="false"
          @value-changed="onFullWidthChanged"
        />
      </div>
    </div>

  </div>
</template>
<script>

import DxSelectBox from 'devextreme-vue/select-box';
import DxCheckBox from 'devextreme-vue/check-box';
import DxTabs from 'devextreme-vue/tabs';

import service, { orientations, stylingModes, iconPositions } from './data.js';

export default {
  components: {
    DxSelectBox,
    DxTabs,
    DxCheckBox,
  },
  data() {
    return {
      orientations,
      stylingModes,
      iconPositions,
      tabsWithText: service.getTabsWithText(),
      tabsWithIcon: service.getTabsWithIcon(),
      tabsWithIconAndText: service.getTabsWithIconAndText(),
      orientation: orientations[0],
      iconPosition: iconPositions[0],
      stylingMode: stylingModes[0],
    };
  },
  computed: {
    widgetWrapperClasses() {
      const { orientation } = this;

      return `widget-wrapper widget-wrapper-${orientation}`;
    },
  },
  methods: {
    saveTabInstance1(e) {
      this.tabInstance1 = e.component;
    },
    saveTabInstance2(e) {
      this.tabInstance2 = e.component;
    },
    saveTabInstance3(e) {
      this.tabInstance3 = e.component;
    },
    onShowNavigationChanged(e) {
      this.setTabsOption('showNavButtons', e.value);
    },
    onScrollContentChanged(e) {
      this.setTabsOption('scrollByContent', e.value);
    },
    onFullWidthChanged(e) {
      this.setTabsOption('width', e.value ? '100%' : 'auto');
    },
    onStylingModeChanged(e) {
      this.setTabsOption('stylingMode', e.value);
    },
    onIconPositionChanged(e) {
      this.setTabsOption('iconPosition', e.value);
    },
    onOrientationChanged(e) {
      this.setTabsOption('orientation', e.value);
    },
    setTabsOption(propertyName, value) {
      this.tabInstance1.option(propertyName, value);
      this.tabInstance2.option(propertyName, value);
      this.tabInstance3.option(propertyName, value);
    },
  },
};
</script>
<style>
#tabs-demo {
  display: flex;
  min-height: 450px;
}

.widget-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  max-width: calc(100% - 300px);
  min-width: 200px;
  padding: 16px 32px;
  overflow: clip;
}

.widget-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 80px;
  column-gap: 4px;
  max-width: 100%;
}

.widget-wrapper-vertical {
  width: 100%;
  flex-direction: row;
  align-items: center;
}

.options {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-weight: 500;
  font-size: 18px;
}

#show-navigation-buttons {
  margin-top: 22px;
}

.option {
  margin-top: 20px;
}

.dx-tabs {
  max-width: 100%;
}

.dx-viewport:not(.dx-theme-generic) .dx-tabs-horizontal {
  border-bottom: 1px solid rgb(225, 225, 225, 0.4);
}

.dx-viewport:not(.dx-theme-generic) .dx-tabs-vertical {
  border-right: 1px solid rgb(225, 225, 225, 0.4);
}

.dx-tabs-vertical {
  height: 250px;
}
</style>
