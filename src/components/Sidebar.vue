<template>
  <div class="sidebar-main">
    <div class="sidebar-content">
      <div class="sidebar-avatar-main">
        <div class="sidebar-avatar-img">
          <router-link :to="'/profile'">
            <svg id="Layer_1"
                 viewBox="0 0 512 512"
                 xml:space="preserve"
                 xmlns="http://www.w3.org/2000/svg"
                 height="100px"
                 width="100px"
            >
            <g>
              <g>
                <linearGradient gradientUnits="userSpaceOnUse"
                                id="SVGID_1_"
                                x1="-0.0000027" x2="512"
                                y1="256" y2="256">
                  <stop offset="0" style="stop-color:#95A5A6"/>
                  <stop offset="1" style="stop-color:#7F8C8D"/>
                </linearGradient>
                <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256"/>
                <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="42.6666641" x2="469.3333435" y1="256.0005188" y2="256.0005188">
                  <stop offset="0" style="stop-color:#7F8C8D"/><stop offset="1" style="stop-color:#95A5A6"/>
                </linearGradient>
                <path d="M256,469.3338623c-117.631012,0-213.3333435-95.7018738-213.3333435-213.3333435
                S138.368988,42.6671982,256,42.6671982c117.6362,0,213.3333435,95.7018661,213.3333435,213.333313
                S373.6362,469.3338623,256,469.3338623z" fill="url(#SVGID_2_)"/>
              </g>
              <g>
                <circle cx="264" cy="203.6705322" opacity="0.3" r="56.6401329"/>
                <path d="M331.3833923,269.0773315c-0.8933411-0.6069336-2.6900635-1.7738647-2.6900635-1.7738647
                C314.2148438,287.4037476,290.6105957,300.5151978,264,300.5151978c-26.6128693,0-50.2192688-13.1141357-64.6971436-33.2192078
                c0,0-1.5103912,0.9888-2.2608032,1.4944153C165.0463257,290.342926,144,326.9077454,144,368.387207v12.5829163h240V368.387207
                C384,327.0911865,363.1407166,290.6677246,331.3833923,269.0773315z" opacity="0.3"/>
              </g>
              <g>
                <circle cx="256" cy="195.6705322" fill="#FFFFFF" r="56.6401329"/>
                <path d="M323.3833923,261.0773315c-0.8933411-0.6069336-2.6900635-1.7738647-2.6900635-1.7738647
                C306.2148438,279.4037476,282.6105957,292.5151978,256,292.5151978c-26.6128693,0-50.2192688-13.1141357-64.6971436-33.2192078
                c0,0-1.5103912,0.9888-2.2608032,1.4944153C157.0463257,282.342926,136,318.9077454,136,360.387207v12.5829163h240V360.387207
                C376,319.0911865,355.1407166,282.6677246,323.3833923,261.0773315z" fill="#FFFFFF"/>
              </g>
            </g>
          </svg>
          </router-link>
        </div>
        <router-link class="sidebar-avatar-option" to="#">
          <svg version="1.1"
               baseProfile="tiny"
               id="Layer_1"
               class="sidebar-avatar-option-link"
               xmlns="http://www.w3.org/2000/svg"
               x="0px" y="0px"
               width="30px"
               height="30px"
               viewBox="0 0 42 42" xml:space="preserve">
          <path fill="#546e7a" d="M6.62,24.5c0.4,1.62,1.06,3.13,1.93,4.49L6.12,31.43c-1.09,1.09-1.08,1.74-0.12,2.7l2.37,2.37
          c0.97,0.971,1.63,0.95,2.7-0.12l2.55-2.56c1.2,0.688,2.5,1.22,3.88,1.56v3.12c0,1.55,0.47,2,1.82,2h3.36c1.37,0,1.82-0.48,1.82-2
          v-3.12c1.38-0.34,2.68-0.87,3.88-1.56l2.61,2.619c1.08,1.068,1.729,1.09,2.699,0.131l2.381-2.381
          c0.949-0.949,0.97-1.602-0.131-2.699l-2.5-2.5c0.881-1.36,1.541-2.87,1.938-4.49h3.302c1.368,0,1.818-0.48,1.818-2v-3
          c0-1.48-0.393-2-1.818-2h-3.302c-0.34-1.38-0.87-2.68-1.562-3.88l2.382-2.37c1.05-1.05,1.14-1.7,0.13-2.7l-2.38-2.38
          c-0.95-0.95-1.632-0.94-2.7,0.13l-2.26,2.25C27.63,7.68,26.12,7.02,24.5,6.62V3.5c0-1.48-0.391-2-1.82-2h-3.36
          c-1.35,0-1.82,0.49-1.82,2v3.12c-1.62,0.4-3.13,1.06-4.49,1.93L10.75,6.3C9.68,5.23,9,5.22,8.05,6.17L5.67,8.55
          c-1.01,1-0.92,1.65,0.13,2.7l2.37,2.37c-0.68,1.2-1.21,2.5-1.55,3.88h-3.3c-1.35,0-1.82,0.49-1.82,2v3c0,1.55,0.47,2,1.82,2H6.62z
           M15.28,21c0-3.16,2.56-5.72,5.72-5.72s5.721,2.56,5.721,5.72S24.16,26.721,21,26.721S15.28,24.16,15.28,21z"/>
        </svg>
        </router-link>
      </div>
      <div class="sidebar-links">
        <router-link class="sidebar-link" :to="'/arrival'" exact-active-class="active">
          <span>Приход</span>
        </router-link>
        <router-link class="sidebar-link" :to="'/orders'" exact-active-class="active">
          <span>Заказы</span>
        </router-link>
        <router-link class="sidebar-link" :to="'/products'" exact-active-class="active">
          <span>Продукты</span>
        </router-link>
        <router-link class="sidebar-link" :to="'/users'" exact-active-class="active">
          <span>Пользователи</span>
        </router-link>
        <router-link class="sidebar-link" :to="'/options'" exact-active-class="active">
          <span>Настройки</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
    }
  },
  mounted() {
    // console.log('router: ', this.$router.currentRoute.name);
    // console.log('router: ', this.$route.name);
  },
  // beforeRouteUpdate(to, from, next) {
  //   // Здесь вы можете выполнить нужные вам действия при изменении маршрута
  //   console.log(`URL адрес изменен на ${to.fullPath}`);
  //
  //   // Важно вызвать метод next() для продолжения навигации
  //   next();
  // }
}
</script>

<style scoped>
.sidebar-main {
  z-index: 9;
  position:absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 260px;
  height: 100%;
  box-shadow: -30px 0px 50px 10px black;
}
.sidebar-avatar-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sidebar-content {
  width: 100%;
}
.sidebar-avatar-img {

}
.sidebar-avatar-option {
  z-index: 3;
  position: relative;
  left: 40px;
  bottom: 50px;
  background: #e3e3e3;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  transition: all .5s ease-in-out;
}

.sidebar-avatar-option-link {
  position: relative;
  left: 10px;
  top: 10px;
}
.sidebar-avatar-option:hover{
  background: #f3f3f3;
}

.sidebar-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sidebar-link {
  text-transform: uppercase;
  color: #36454d;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  line-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .3s ease-in-out;
}
.sidebar-link:hover {
  background: #e3e3e3;
}
.sidebar-link.active span {
  text-transform: uppercase;
  color: #36454d;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 3px solid #8bc34a;
}
</style>