<template>
  <div id="app" class="app-wraper">
    <HeaderNavbarVue />
    <div class="container-fluid p-0 main-container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>




<script>
import HeaderNavbarVue from "./components/HeaderNavbar.vue";
export default {
  name: "App",
  components: { HeaderNavbarVue },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.app-wraper {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
.main-body {
  background: rgb(118, 102, 182);
}

.main-container {
  display: block;
  overflow: auto;
  height: 93vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@font-face {
  font-family: "Gotham Pro";
  src: local("Gotham Pro"), url(./fonts/GothamPro.ttf) format("truetype");
}
</style>
