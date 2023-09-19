<template>
  <div id="tabs-demo">
    <div class="widget-container">
      <DxTabs
        :data-source="tabsWithText"
        selected-index="0"
        @initialized="saveTabInstance1"
        id="withText"
        :scroll-by-content="false"
        :show-nav-buttons="false"
      />
      <DxTabs
        :data-source="tabsWithIconAndText"
        @initialized="saveTabInstance2"
        selected-index="0"
        id="withIconAndText"
        :scroll-by-content="false"
        :show-nav-buttons="false"
      />
      <DxTabs
        :data-source="tabsWithIcon"
        selected-index="0"
        @initialized="saveTabInstance3"
        id="withIcon"
        :scroll-by-content="false"
        :show-nav-buttons="false"
      />
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
          :value="false"
          @value-changed="onShowNavigationChanged"
        />
      </div>
      <div class="option">
        <DxCheckBox
          id="scroll-content"
          text="Scroll content"
          :value="false"
          @value-changed="onScrollContentChanged"
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
      tabsWithText: service.getTabsWithText(),
      tabsWithIcon: service.getTabsWithIcon(),
      tabsWithIconAndText: service.getTabsWithIconAndText(),
      orientations,
      stylingModes,
      iconPositions,
      orientation: orientations[0],
      stylingMode: stylingModes[0],
      iconPosition: iconPositions[0],
    };
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

    onStylingModeChanged(e) {
      this.setTabsOption('stylingMode', e.value);
    },
    onIconPositionChanged(e) {
      this.setTabsOption('iconPosition', e.value);
    },

    onOrientationChanged(e) {
      const widgetContainer = document.getElementsByClassName('widget-container');
      widgetContainer[0].style.flexDirection = e.value === 'horizontal' ? 'column' : 'row';
      this.setTabsOption('orientation', e.value);
    },

    setTabsOption(propertyName, value) {
      this.tabInstance1.option(propertyName, value);
      this.tabInstance2.option(propertyName, value);
      this.tabInstance3.option(propertyName, value);
    },

    itemClick(e) {
      if (e.itemData.price) {
        this.currentProduct = e.itemData;
      }
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
  align-items: center;
  flex-grow: 1;
  padding: 16px 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.options {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 20px;
  width: 260px;
  background-color: rgba(191, 191, 191, 0.15);
}

.dx-tabs-horizontal:not(:last-child) {
  margin-bottom: 80px;
}

.dx-tabs-vertical:not(:last-child)  {
  margin-right: 80px;
}

.dx-tab {
  width: 138px;
}

.dx-tabs {
  display: flex;
  max-width: 690px;
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

.dx-tabs-horizontal {
  border-bottom: 1px solid rgb(225, 225, 225, 0.4);
}

.dx-tabs-vertical {
  border-right: 1px solid rgb(225, 225, 225, 0.4);
}
</style>
