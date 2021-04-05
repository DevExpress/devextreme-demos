<template>
  <div id="productList">
    <h1>Product List</h1>

    <ul>
      <ProductItem
        v-for="product in products"
        :key="product.ID"
        :product="product"
        @checked="checkAvailability"
      />
    </ul>

    <DxToast
      v-model:visible="isVisible"
      v-model:message="message"
      v-model:type="type"
    />
  </div>
</template>
<script>
import { products } from './data.js';
import ProductItem from './ProductItem.vue';
import { DxToast } from 'devextreme-vue/toast';

export default {
  components: {
    ProductItem,
    DxToast,
  },

  data() {
    return {
      products,
      isVisible: false,
      message: '',
      type: 'info',
    };
  },
  methods: {
    checkAvailability(e, product) {
      this.type = e.value ? 'success' : 'error';
      this.message = product.Name + (e.value ? ' is available' : ' is not available');
      this.isVisible = true;
    },
  },
};
</script>
<style>
#productList {
  padding: 10px;
}

#productList ul {
  text-align: center;
  list-style-type: none;
  margin: 20px 0;
}

#productList ul li {
  display: inline-block;
  width: 160px;
  margin: 10px;
}

#productList ul li img {
  width: 100px;
}

.dx-toast-content {
  min-width: 300px;
  max-width: 400px;
}
</style>
