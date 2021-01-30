<template>
  <b-col class="col-12 side-menu p-0">
    <SideMenuItemVue
      v-for="item in menuData"
      :key="item.name"
      :data="item"
      :toggleButton="toggleButton"
    />
  </b-col>
</template>

<script>
import SideMenuItemVue from "./SideMenuItem.vue";
export default {
  name: "SidebarMenu",
  components: {
    SideMenuItemVue,
  },
  data() {
    return {
      menuData: [
        {
          name: "Connections",
          value: 1.038,
          icon: "link45deg",
        },
        {
          name: "Invitations",
          value: 2,
          icon: "record-circle",
          new: true,
        },
        {
          name: "Teammates",
          value: null,
          icon: "clipboard-minus",
        },
        {
          name: "groups",
          value: 6,
          icon: "people",
        },
        {
          name: "pages",
          value: 28,
          icon: "layers",
        },
        {
          name: "hashtags",
          value: 8,
          icon: "hash",
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