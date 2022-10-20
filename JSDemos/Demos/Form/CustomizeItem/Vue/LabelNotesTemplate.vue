<template>
  <div>
    <span>
      <i class="dx-icon dx-icon-comment"/>
      Additional
      <br>
      <i
        id="helpedInfo"
        class="dx-icon dx-icon-info"
      />
      { data.text }
    </span>

    <DxTooltip
      target="#helpedInfo"
      show-event="mouseenter"
      hide-event="mouseleave"
    >
      <b>This field must not exceed 200 characters</b>
    </DxTooltip>
  </div>
</template>
<script>
import { DxTooltip } from 'devextreme-vue/tooltip';

export default {
  components: {
    DxTooltip,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
#helpedInfo {
  color: #42a5f5;
}
</style>
