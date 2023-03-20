<template>
  <div class="header-main">
    <div class="my-container col-xs-12">
      <div class="header-content">
        <div class="header-left-side">
          <div class="header-logo-main">
            <router-link :to="'/'" class="header-logo-main">
              <div class="header-logo">
                <img class="header-logo-img" src="../assets/logo.png" height="70" width="70">
                <h1 class="header-logo-text">INVENTORY</h1>
              </div>
            </router-link>
          </div>
          <div class="header-nav-search">
<!--            <input class="header-search-input" placeholder="Поиск">-->
            <input type="text" class="form-control header-search-input" id="exampleFormControlInput1" placeholder="Поиск">
          </div>
        </div>
        <div class="header-right-side">
          <ShowTime/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFilter from "@/filters/date.filter";
import clockIcon from "@/assets/icons/clockSVG.svg";
import ShowTime from "../views/ShowTime"

export default {
  name: "Navbar",
  data: () => ({
    date: new Date(),
    time: new Date(),
    image: clockIcon,
    interval: null,
    dropdown: null
  }),
  components: {
    ShowTime
  },
  methods: {

  },
  mounted() {
    // console.log('date: ', dateFilter(this.date, 'date'));
    // console.log('time: ', dateFilter(this.date, "time"));
    console.log('date: ', dateFilter(this.date))
    this.interval = setInterval(()=> {
      // this.date = new Date();
      this.date = dateFilter(new Date(), null, 'en-EN');
      this.time = dateFilter(new Date(), 'time', 'ru-RU')
      //this.date = dateFilter(this.date)
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
  .header-main {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    background: #ffffff;
    box-shadow: 10px -30px 50px 10px black;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
  }
  .header-left-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .header-right-side {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    width: 70%;
  }
  .header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-logo-img {

  }
  .header-logo-main {
    text-decoration: none;
    text-underline: none;
  }
  .header-logo-text {
    color: #8bc34a;
    font-size: 24px;
    transition: all .2s;
    margin: 0;
  }
  .header-logo-text:hover {
  }
  .header-nav-search {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 30px;
  }
  .header-search-input {
    height: 30px;
    width: 500px;
    border: none;
    background: #f0f3f5;
    box-shadow: 0px -1px 1px 0px black;
    border-radius: 5px;
  }
  .header-search-input::placeholder {
    color: #2c3c44;
    font-size: 18px;
    font-weight: 700;
  }
  .header-date-main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
</style>