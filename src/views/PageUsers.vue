<template>
  <main class="main-main">
    <div class="my-container">
      <div class="user-page-panel-main">
        <div class="">
          <h3 class="text-info">
            <div class="user-content-amount" v-if="users.length != 0">Users / {{this.users.length}}</div>
            <div class="user-content-amount" v-else>Users are missing</div>
          </h3>
        </div>
        <div class="col-md-6 user-content-info">
          <div class="user-content-filter">filter1</div>
          <div class="user-content-filter">filter2</div>
        </div>

        <div class="user-add-button">
          <button class="btn btn-info float-right"
                  @click="showAddModal=true">
            <i class="bi bi-person-add" style="color: white; margin: 0 5px 0 0"></i> Add New User
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

      <Loader v-if="users.length === 0"/>
      <div class="user-table-main">
        <div class="user-table-content" v-for="user in users" :key="user.id">
          <div class="user-table-col" style="width: 100px">{{user.id}}</div>
          <div class="user-table-col" style="width: 100px">{{user.name}}</div>
          <div class="user-table-col" style="width: 100px">{{user.email}}</div>
          <div class="user-table-col" style="width: 100px">{{user.phone}}</div>
          <div class="user-table-col">
            <button class="btn shadow-none"
                    style="background: transparent"
                    @click="userEditActive(arrUser = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone
                      })"
            ><i class="bi bi-pencil"></i></button>
          </div>
          <div class="user-table-col">
          <button class="btn shadow-none"
                  style="background: transparent"
                  @click="userDeleteActive(user.id, user.name, user.email)"
          ><i class="bi bi-trash3"></i></button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div id="overlay" v-if="showAddModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New User</h5>
          <button type="button"
                  class="close"
                  @click="showAddModal=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="POST" @submit.prevent="fetchCreate">
            <div class="form-group">
              <input type="text" name="name" v-model="name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="email" name="email" v-model="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="text" name="phone" v-model="phone" class="form-control" placeholder="Phone">
            </div>
            <div class="form-group">
              <button class="btn btn-info btn-block btn-lg" type="submit">Add User</button>
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
          <h5 class="modal-title">Edit User</h5>
          <button type="button"
                  class="close"
                  @click="showEditModal=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="post" @submit.prevent="fetchUpdate(arrUser)">
            <div class="form-group">
              <input type="text" name="name" v-model=arrUser.name class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="email" name="email" v-model="arrUser.email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="text" name="phone" v-model="arrUser.phone" class="form-control" placeholder="Phone">
            </div>
            <div class="form-group">
              <button class="btn btn-info btn-block btn-lg" type="submit">Edit User</button>
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
          <h5 class="modal-title">Do you want to delete this user?</h5>
          <button type="button"
                  class="btn-delete"
                  @click="showDeleteModal=false">
            <span aria-hidden="true"><i class="bi bi-x"></i></span>
          </button>
        </div>
        <div class="">
          <div class="modal-body-content">
            <div>
              <p>Name: {{this.userName}}</p>
              <p>Email: {{this.userEmail}}</p>
            </div>
          </div>
          <div class="modal-body-decide">
            <div class="col-md-2">
              <button class="btn-cancel-confirm"
                      @click="showDeleteModal=false">Cancel</button>
            </div>
            <div class="col-md-5">
              <button class="btn-delete-confirm" @click="fetchDelete(userId)">
                <i class="bi bi-trash3-fill" style="color: red; padding: 0 15px 0 0;"></i>
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
import axios from 'axios';
import Loader from "@/views/Loader";

export default {
  name: "PageUsers",
  data() {
    return {
      errorMsg: false,
      successMsg: false,
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      users: [],
      arrUser: [],
      userId: '',
      userName: '',
      userEmail: '',
      name: '',
      email: '',
      phone: '',
      nameUpdate: '',
    };
  },
  components: {
    Loader
  },
  methods: {
    update() {
      location.reload();
    },
    fetchCreate() {
       axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
        phone: this.phone
      }).then(response=> {
        console.log(response.data);
      }).catch(err=>{
        console.log(err);
      })
      this.name = ''
      this.email = ''
      this.phone = ''
      this.showAddModal = false
      this.update()
    },
    userEditActive(newArrUser) {
      this.showEditModal=true
      this.userId = newArrUser.id;
      if(this.showEditModal == false) {
        this.userId = '';
      }
    },
    userDeleteActive(id, name, email) {
      this.showDeleteModal=true
      // console.log('userId: ', id);
      // console.log('newArrUser: ', newArrUser);
      this.userId = id;
      this.userName = name;
      this.userEmail = email;
      if(this.showDeleteModal == false) {
        this.userId = '';
      }
    },
    fetchUpdate(newArrUser){
      console.log('userId: ', newArrUser.id);
      axios.put(`http://localhost:3000/users/${newArrUser.id}`,{
        name: newArrUser.name,
        email: newArrUser.email,
        phone: newArrUser.phone
      })
          .then(response => {
            console.log(response.data);
          }).catch(err => {
        console.log(err);
      })
      this.showEditModal = false;
      this.update()
    },
    fetchDelete(id){
      console.log('userIdDelete: ', id);
      axios.delete(`http://localhost:3000/users/${id}`)
          .then(response => {
            console.log(response.data);
          }).catch(err => {
        console.log(err);
      })
      this.showDeleteModal = false;
      this.update()
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/users');
      this.users = response.data;
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    // console.log('this.$route: ', this.$route.path);

  }
};
</script>

<style scoped>

</style>