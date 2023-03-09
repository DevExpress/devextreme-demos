<template>
  <div>
    <div class="demo-container">
      <div class="button-container">
        <DxButton
          :width="300"
          text="Show Popup"
          type="default"
          @click="onShowScrollablePopup($event)"
        />
        <div class="label"> A native scrollable container </div>
      </div>

      <div class="button-container">
        <DxButton
          :width="300"
          text="Show Popup"
          @click="onShowScrollViewPopup($event)"
        />
        <div class="label"> The ScrollView </div>
      </div>
    </div>
    <DxPopup
      v-model:visible="popupVisible"
      :width="500"
      :height="400"
      :show-title="true"
      :hide-on-outside-click="true"
    >
      <template #content>
        <div>
          <div class="header">The Popup inner area is divided into three parts:</div>

          <div class="caption">Content area</div>
          To populate the Popup with content, use the <b>contentTemplate</b> property.

          <div class="caption">Top toolbar</div>
          <div>
            Set <b>showTitle</b> to <code>true</code> and use
            the <b>title</b> property to specify the caption.
            The Close button will appear if you do not disable
            the <b>showCloseButton</b> property.<br><br>
            Add <b>toolbarItems</b> markup and set each item's
            <b>toolbar</b> property to <code>top</code>.
            If you want to display an item in the overflow menu, as shown in this demo,
            set the item's <b>locateInMenu</b> property to <code>always</code>.
            You can also assign <code>never</code> to this property to keep the item
            outside the overflow menu, or you can assign <code>auto</code> to hide the item
            in the menu if the Popup's width decreases.</div>

          <div class="caption">Bottom toolbar</div>
          To enable the bottom toolbar, declare
          the <b>toolbarItems</b> array as shown in this demo.
          Set each item's <b>toolbar</b> property to <code>bottom</code>.
          To learn more about toolbar configuration, refer to the following tutorial: <a
            href="https://js.devexpress.com/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/"
            target="_blank"
          >Getting Started with Toolbar</a>
        </div>
      </template>
      <DxToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="center"
        :options="printButtonOptions"
      />
    </DxPopup>

    <DxPopup
      v-model:visible="popupScrollViewVisible"
      :width="500"
      :height="400"
      :visible="false"
      :show-title="true"
      :hide-on-outside-click="true"
    >
      <template #content>
        <DxScrollView
          width="100%"
          height="100%"
        >
          <img
            src="../../../../images/Popup-Scrolling-Image.jpg"
            class="center"
          >
          <div id="textBlock">
            The <b>ScrollView</b> allows users to scroll its content vertically.
            To enable horizontal and vertical scrolling, set the <b>direction</b>
            option to <i>&quot;both&quot;</i>. Horizontal scrolling is available
            only if the content is wider than the <b>ScrollView</b>. Otherwise,
            the content adapts to the widget&apos;s width.<br><br>The <b>ScrollView</b>
            uses native scrolling on most platforms, except desktops. To use it on all
            platforms, assign <b>true</b> to the <b>useNative</b> option. If you assign
            <b>false</b>, scrolling is simulated on all platforms.
          </div>
        </DxScrollView>
      </template>
      <DxToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="center"
        :options="printButtonOptions"
      />
    </DxPopup>
  </div>
</template>
<script>
import { DxButton } from 'devextreme-vue/button';
import { DxPopup, DxToolbarItem } from 'devextreme-vue/popup';
import { DxScrollView } from 'devextreme-vue/scroll-view';

export default {
  components: {
    DxButton,
    DxPopup,
    DxToolbarItem,
    DxScrollView,
  },
  data() {
    return {
      popupVisible: false,
      popupScrollViewVisible: false,
      printButtonOptions: {
        width: 220,
        text: 'Print',
        type: 'default',
        onClick: () => {
          this.popupVisible = false;
          this.popupScrollViewVisible = false;
        },
      },
    };
  },
  methods: {
    onShowScrollablePopup() {
      this.popupVisible = true;
    },
    onShowScrollViewPopup() {
      this.popupScrollViewVisible = true;
    },
  },
};
</script>
<style>
#textBlock {
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.6em;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 300px;
}

.label {
  color: rgba(51, 51, 51, 0.6);
  font-size: 12px;
}

.demo-container {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.button-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.header {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
}

.caption {
  font-size: 16px;
  font-weight: 500;
  padding: 24px 0 8px 0;
}
</style>
