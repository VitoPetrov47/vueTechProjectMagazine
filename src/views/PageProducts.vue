<template>
  <div>
    <main class="main-main">
      <div class="my-container">
        <div class="product-page-panel-main">
          <div class="">
            <h3 class="text-info">
              <div class="product-content-amount" v-if="products.length != 0">Products / {{this.products.length}}</div>
              <div class="product-content-amount" v-else>Products are missing</div>
            </h3>
          </div>
          <div class="col-md-6 product-content-info">
            <div class="product-content-filter">filter1</div>
            <div class="product-content-filter">filter2</div>
          </div>
          <div class=" product-add-button">
            <button class="btn btn-info float-right"
                    @click="showAddModal=true">
              <i class="bi bi-person-add" style="color: white; margin: 0 5px 0 0"></i> Add New Product
            </button>
          </div>
        </div>
        <hr class="btn-info">
        <div>
          <div class="alert alert-danger"
               v-if="errorMsg">
            Error Message
          </div>
          <div class="alert alert-success"
               v-if="successMsg">
            Success send!
          </div>
        </div>
        <Loader v-if="products.length === 0"/>
        <div class="product-table-main" v-else>
          <div class="product-table-content" v-for="product in products" :key="product.id">
            <div class="product-table-col">{{product.id}}</div>
            <div class="product-table-col" style="width: 150px">{{product.name}}</div>
            <div class="product-table-col" style="width: 50px">{{product.status}}</div>
            <div class="product-table-col" style="width: 100px">{{product.date}}</div>
            <div class="product-table-col" style="width: 50px">{{product.state}}</div>
            <div class="product-table-col" style="width: 50px">{{product.price}}</div>
            <div class="product-table-col">{{product.group}}</div>
            <div class="product-table-col" style="width: 150px">{{product.user_name}}</div>
            <div class="product-table-col" style="width: 70px">{{product.arrival}}</div>
            <div class="product-table-col" style="width: 100px">{{product.arrivalDate}}</div>
            <div class="product-table-col">
              <button class="btn shadow-none"
                      style="background: transparent"
                      @click="productEditActive(arrProduct = {
                        id: product.id,
                        name: product.name,
                        status: product.status,
                        date: product.date,
                        state: product.state,
                        price: product.price,
                        group: product.group,
                        user: product.user_name,
                        arrival: product.arrival,
                        arrivalDate: product.arrivalDate
                      })"
              ><i class="bi bi-pencil"></i></button>
            </div>
            <div class="product-table-col">
              <button class="btn shadow-none"
                      style="background: transparent"
                      @click="productDeleteActive(product.id, product.name)"
              ><i class="bi bi-trash3"></i></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <div id="overlay" v-if="showAddModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Product</h5>
          <button type="button"
                  class="close"
                  @click="showAddModal=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="POST" @submit.prevent="createProduct">
            <div class="form-group">
              <input type="text" name="name" v-model="name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="text" name="status" v-model="status" class="form-control" placeholder="Status">
            </div>
            <div class="form-group">
              <input type="date" name="date" v-model="date" class="form-control" placeholder="Date">
            </div>
            <div class="form-group">
              <input type="text" name="state" v-model="state" class="form-control" placeholder="State">
            </div>
            <div class="form-group">
              <input type="text" name="price" v-model="price" class="form-control" placeholder="Price">
            </div>
            <div class="form-group">
              <input type="text" name="group" v-model="group" class="form-control" placeholder="Group">
            </div>
            <div class="form-group">
              <input type="text" name="user" v-model="user_name" class="form-control" placeholder="User">
            </div>
            <div class="form-group">
              <input type="text" name="arrival" v-model="arrival" class="form-control" placeholder="arrival">
            </div>
            <div class="form-group">
              <input type="date" name="arrivalDate" v-model="arrivalDate" class="form-control" placeholder="Arrival Date">
            </div>
            <div class="form-group">
              <button class="btn btn-info btn-block btn-lg" type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="overlay" v-if="showEditModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button"
                  class="close"
                  @click="showEditModal=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="post" @submit.prevent="productUpdate(arrProduct)">
            <div class="form-group">
              <input type="text" name="name" v-model=arrProduct.name class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="text" name="status" v-model="arrProduct.status" class="form-control" placeholder="status">
            </div>
            <div class="form-group">
              <input type="date" name="date" v-model="arrProduct.date" class="form-control" placeholder="date">
            </div>
            <div class="form-group">
              <input type="text" name="state" v-model="arrProduct.state" class="form-control" placeholder="state">
            </div>
            <div class="form-group">
              <input type="text" name="price" v-model="arrProduct.price" class="form-control" placeholder="price">
            </div>
            <div class="form-group">
              <input type="text" name="group" v-model="arrProduct.group" class="form-control" placeholder="group">
            </div>
            <div class="form-group">
              <input type="text" name="user" v-model="arrProduct.user_name" class="form-control" placeholder="user">
            </div>
            <div class="form-group">
              <input type="text" name="arrival" v-model="arrProduct.arrival" class="form-control" placeholder="arrival">
            </div>
            <div class="form-group">
              <input type="date" name="date" v-model="arrProduct.arrivalDate" class="form-control" placeholder="arrivalDate">
            </div>
            <div class="form-group">
              <button class="btn btn-info btn-block btn-lg" type="submit">Edit Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="overlay" v-if="showDeleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-content-header">
          <h5 class="modal-title">Do you want to delete this product?</h5>
          <button type="button"
                  class="btn-delete"
                  @click="showDeleteModal=false">
            <span aria-hidden="true"><i class="bi bi-x"></i></span>
          </button>
        </div>
        <div class="">
          <div class="modal-body-content">
            <div>
              <p>Name: {{this.productName}}</p>
            </div>
          </div>
          <div class="modal-body-decide">
            <div class="col-md-2">
              <button class="btn-cancel-confirm"
                      @click="showDeleteModal=false">Cancel</button>
            </div>
            <div class="col-md-5">
              <button class="btn-delete-confirm" @click="deleteProduct(productId)">
                <i class="bi bi-trash3-fill" style="padding: 0 15px 0 0; color: red"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dateFilter from "@/filters/date.filter";
import Loader from "@/views/Loader";

export default {
  name: "PageProducts",
  data() {
    return {
      errorMsg: false,
      successMsg: false,
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      products: [],
      arrProduct: [],
      productId: '',
      productName: '',
      name: '',
      status: '',
      date: '',
      state: '',
      price: '',
      group: '',
      user_name: '',
      user: '',
      arrival: '',
      arrivalDate: '',
      getDate: '',
      newDate: '',
    };
  },
  components: {
    Loader
  },
  methods: {
    update() {
      location.reload();
    },
    createProduct() {
      axios.post('http://localhost:3000/products', {
        name: this.name,
        status: this.status,
        date: this.date,
        state: this.state,
        price: this.price,
        group: this.group,
        user: this.user_name,
        arrival: this.arrival,
        arrivalDate: this.arrivalDate
      }).then(response=> {
        console.log(response.data);
      }).catch(err=>{
        console.log(err);
      })
      this.name = ''
      this.status = ''
      this.date = ''
      this.state = ''
      this.price = ''
      this.group = ''
      this.user_name = ''
      this.arrival = ''
      this.arrivalDate = ''
      this.showAddModal = false
      this.update()
    },
    productEditActive(newArrProduct) {
      this.showEditModal=true
      console.log(this.arrProduct);
      this.productId = newArrProduct.id;
      if(this.showEditModal == false) {
        this.productId = '';
      }
    },
    productDeleteActive(id, productName) {
      this.showDeleteModal=true
      this.productId = id;
      this.productName = productName
      if(this.showDeleteModal == false) {
        this.productId = '';
        this.productName = '';
      }
    },
    productUpdate(newArrProduct) {
      console.log('newArrProduct: ', newArrProduct);
      axios.put(`http://localhost:3000/products/${newArrProduct.id}`,{
        name: newArrProduct.name,
        status: newArrProduct.status,
        date: newArrProduct.date,
        state: newArrProduct.state,
        price: newArrProduct.price,
        group: newArrProduct.group,
        user: newArrProduct.user_name,
        arrival: newArrProduct.arrival,
        arrivalDate: newArrProduct.arrivalDate
      })
          .then(response => {
            console.log(response.data);
          }).catch(err => {
        console.log(err);
      })
      this.showEditModal = false;
      this.update()
    },
    deleteProduct(id) {
      // console.log('product.id: ', id);
      axios.delete(`http://localhost:3000/products/${id}`)
          .then(response => {
            console.log(response.data);
          }).catch(err => {
        console.log(err);
      })
      this.showDeleteModal = false;
      this.update()
    }
  },
  async mounted() {
    // console.log('this.$route: ', this.$route.path);
    //get products
    try {
      const response = await axios.get('http://localhost:3000/products');
      this.products = response.data;
      console.log('this.products: ', this.products);
      for(let i = 0; i < this.products.length; i++) {
        let getDate = this.products[i].date;
        let newDate = dateFilter(new Date(getDate), null, 'en-EN')
        this.products[i].date = newDate;
        this.products[i].arrivalDate = newDate;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
</style>