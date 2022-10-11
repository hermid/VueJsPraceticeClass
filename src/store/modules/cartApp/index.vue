<template>
  <main>
    <section class="items">
      <h4>Pick your items</h4>
      <div
        class="product"
        v-for="(product, index) in products"
        :key="index"
        @click="product.active = !product.active"
        :class="{ selected: product.active }"
      >
        <div class="photo">
          <img :src="product.photo" />
        </div>
        <div class="description">
          <span class="name">{{ product.name }}</span>
          <span class="price">₦ {{ product.price }}</span>
          <div class="quantity-area" v-if="product.active">
            <button
              @click.stop="decrese_product_quantity(index)"
              class="btn bg-secondary text-warning"
            >
              -
            </button>
            <span class="quantity">{{ product.quantity }}</span>
            <button
              @click.stop="increse_product_quantity(index)"
              class="btn bg-secondary text-warning"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <strong>Order Details</strong>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1x Big Mac</td>
            <td>5.99</td>
          </tr>

          <tr>
            <th>Total</th>
            <th>5.99</th>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>





<script>
import products_list from "./products.json";

export default {
  name: "cart_app",
  data: () => {
    return {
      products: products_list,
    };
  },
  methods: {
    increse_product_quantity(id) {
      var item = this.products[id];
      item.quantity++;
    },
    decrese_product_quantity(id) {
      var item = this.products[id];

      if (item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
};
</script>





<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

main > section.items h4 {
  text-align: center;
  margin-top: 0;
  width: 100%;
}
main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

main > section.items {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid lightgrey;
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  justify-content: center;
}

section.items .product {
  border: 1px solid lightgrey;
  margin: 7px;
  flex: 0 0 calc(33.333% - 24px);
  cursor: pointer;
  text-align: center;
}

section.items .product.selected {
  border: 2px solid rgb(29, 134, 233);
}

section.items .photo img {
  margin-top: 10px;
  max-width: 90px;
}

section.items .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 11px;
  line-height: 15px;
}

section.items .description .price {
  font-weight: bold;
  margin: 4px auto;
}

section.items .description .quantity-area {
  margin: 8px auto;
  height: 14px;
}

section.items .description .quantity-area button {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

section.items .description .quantity-area .quantity {
  font-weight: bold;
  margin: 0 4px;
}

section.summary {
  background-color: rgb(245, 245, 245);
  padding: 20px;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
}

section.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

section.summary table tbody tr:last-of-type th {
  border-top: 1px solid black;
  padding-top: 4px;
}
</style>
