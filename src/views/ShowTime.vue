<template>
  <div class="header-right-side">
    <div class="header-date-main">
      <div>Today</div>
      <div>{{date}}</div>
    </div>
    <div>
      <img :src="image" height="25" width="25"
           style="
                 filter: invert(66%) sepia(62%) saturate(395%) hue-rotate(45deg) brightness(95%) contrast(88%);
                 margin: 0 10px;">
    </div>
    <div>{{time}}</div>
  </div>
</template>

<script>
import dateFilter from "@/filters/date.filter";
import clockIcon from "@/assets/icons/clockSVG.svg"

export default {
  name: "ShowTime",
  data: () => ({
    date: new Date(),
    time: new Date(),
    image: clockIcon,
    interval: null,
    dropdown: null
  }),
  methods: {

  },
  mounted() {
    // console.log('date: ', dateFilter(this.date, 'date'));
    // console.log('time: ', dateFilter(this.date, "time"));
    // console.log('date: ', dateFilter(this.date))
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

</style>