<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
@import "../../app/public/style.css";
#app {
  position:relative;
  min-height:100vh;
  background: #f0f3f5;
}
</style>
