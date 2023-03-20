<template>
  <div>
    <main class="main-main">
      <div class="my-container">
        <div class="order-page-panel-main">
          <div class="">
            <h3 class="text-info">
              <div class="user-content-amount" v-if="orders.length != 0">Orders / {{this.orders.length}}</div>
              <div class="user-content-amount" v-else>Orders are missing</div>
            </h3>
          </div>
        </div>
        <hr class="btn-info">
        <div class="order-table-main">
          <div class="order-table-content">
            <Loader v-if="orders.length === 0"/>
            <div v-else class="order-table" v-for="order in orders" :key="order.id">
                <div class="order-table-col">
                  <button class="btn btn-open-modal" @click="activeOrderModal(order.user_name)"><i class="bi bi-list-ul" style="font-size: 25px; position: relative; top: 2px;"></i></button>
                </div>
                <div class="order-table-col">Products/00</div>
                <div class="order-table-col">{{order.date}}</div>
                <div class="order-table-col">{{order.user_name}}</div>
            </div>
          </div>

          <div class="order-window-info" v-if="showOrderInfoModal">
            <div class="order-modal-content">
              <div class="order-modal-title">
                <h5 class="" style="font-size: 20px; font-weight: 700">The list of the order:</h5>
                <button type="button"
                        class="btn-close-modal"
                        @click="showOrderInfoModal=false">
                  <span aria-hidden="true"><i class="bi bi-x"></i></span>
                </button>
              </div>

              <div class="">
                <div class="order-modal-body-content">
                  <div class="order-modal-list" v-for="item in showOrderInfo" :key="item.id">
                    <div class="order-modal-row" style="width: 150px">{{item.name}}</div>
                    <div class="order-modal-row" style="width: 120px">{{item.date}}</div>
                    <div class="order-modal-row" style="width: 50px; color: #abd010">{{item.status}}</div>
                    <div class="order-modal-row" style="width: 120px">{{item.price}} <i class="bi bi-currency-dollar"></i></div>
                  </div>
                  <div class="order-modal-row-price">Total price: {{this.total_price}} <i class="bi bi-currency-dollar"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/views/Loader";
import dateFilter from "@/filters/date.filter";

export default {
  name: "PageOrders",
  data() {
    return {
      products: [],
      users: [],
      orders: [],
      order_product: [],
      showOrderInfo: [],
      total_price: 0,
      date: '',
      time: '',
      showAddModal: false,
      showOrderInfoModal: false
    }
  },
  components: {
    Loader
  },
  methods: {
    activeOrderModal(name) {
      this.showOrderInfo = []
      this.total_price = 0
      this.showOrderInfoModal = true;
      const filteredProducts = this.products.filter(product => {
        const order = this.products.find(order => name === product.user_name);
        return order !== undefined;
      });
      this.showOrderInfo = filteredProducts
      console.log('filteredProducts: ', this.showOrderInfo);
      this.total_price = filteredProducts.reduce((accumulator, current) => accumulator + current.price, 0);
    },
  },
  async mounted() {
    try {
      const responseUser = await axios.get('http://localhost:3000/users');
      const responseProduct = await axios.get('http://localhost:3000/products');
      const responseOrder = await axios.get('http://localhost:3000/orders');
      const responseOrderProduct = await axios.get('http://localhost:3000/order_product_bind');
      this.users = responseUser.data;
      this.products = responseProduct.data;
      this.orders = responseOrder.data;
      this.order_product = responseOrderProduct.data;

      for(let i = 0; i < this.products.length; i++) {
        let getDate = this.products[i].date;
        let newDate = dateFilter(new Date(getDate), null, 'en-EN')
        this.products[i].date = newDate;
      }
      for(let i = 0; i < this.orders.length; i++) {
        let getDate = this.orders[i].date;
        let newDate = dateFilter(new Date(getDate), null, 'en-EN')
        this.orders[i].date = newDate;
      }

    } catch (error) {
      console.error(error);
    }
    this.interval = setInterval(()=> {
      this.date = dateFilter(new Date(), null, 'en-EN');
      this.time = dateFilter(new Date(), 'time', 'ru-RU')
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>

</style>