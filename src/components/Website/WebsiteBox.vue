<template>
  <div class="website-box">
    <WebsiteheaderVue />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <WebsiteFooterVue />
  </div>
</template>

<script>
import WebsiteFooterVue from "./Footer/WebsiteFooter.vue";
import WebsiteheaderVue from "./Header/Websiteheader.vue";
export default {
  name: "WebsiteBox",
  components: {
    WebsiteheaderVue,
    WebsiteFooterVue,
  },
};
</script>

<style lang="scss"  >
:root {
  --blue-background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
}
.website-box {
  background: rgb(230, 234, 238);
  position: relative;
  width: 100%;
  min-height: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  font-family: "Gotham Pro";
}
.link-block {
  font-size: 14px;
  font-weight: 700;
  line-height: 11px;
  text-transform: uppercase;
  color: #0275b1;
  line-height: 14px;
  text-transform: uppercase;
}
</style>