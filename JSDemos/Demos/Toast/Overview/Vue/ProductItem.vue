<template>
  <li>
    <img :src="product.ImageSrc" /><br />
    <div id="name">{{ product.Name }}</div>
    <DxCheckBox :on-value-changed="onValueChanged" text="Available" />
  </li>
</template>
<script>
import { DxCheckBox } from "devextreme-vue/check-box";

export default {
  methods: {
    onValueChanged(e) {
      this.$emit("checked", e, this.product);
    },
  },
  components: {
    DxCheckBox,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>
