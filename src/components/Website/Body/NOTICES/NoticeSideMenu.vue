<template>
  <b-col class="col-12 side-menu p-0">
    <NoticeSideMenuItemVue
      v-for="item in menuData"
      :key="item.name"
      :data="item"
      :toggleButton="toggleButton"
    />
  </b-col>
</template>

<script>
import NoticeSideMenuItemVue from "./NoticeSideMenuItem.vue";
export default {
  name: "NoticeSideMenu",
  components: {
    NoticeSideMenuItemVue,
  },
  data() {
    return {
      menuData: [
        {
          name: "Notifications",
        },
        {
          name: "Notification settings",
        },
      ],
    };
  },
  methods: {
    toggleButton(event) {
      const buttons = document.querySelectorAll(".side-menu__row");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
      event.target.offsetParent.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
.side-menu {
  background: #fff;
  border-radius: 5px;
  
}
</style>