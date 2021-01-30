<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"><DashBoardVue /></b-row>
        <b-row class="mb-4"><VisitiorsVue /></b-row>
        <b-row class="mb-4"
          ><GaleryVue :data="courses" title="You may like these courses"
        /></b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import GaleryVue from "./Galery.vue";
import DashBoardVue from "./DashBoard.vue";
import VisitiorsVue from "./Visitiors.vue";
export default {
  name: "ProfileSideBar",
  components: {
    DashBoardVue,
    VisitiorsVue,
    GaleryVue,
  },
  data() {
    return {
      courses: [
        {
          name: "UX Foundations: Prototyping",
          avatar: "courses1.png",
          viewers: "27,959 ",
        },
        {
          name: "Designing with Adobe XD and pro",
          avatar: "courses2.png",
          viewers: "9,122 ",
        },
        {
          name: "UX Foundations: Styles and GUIs",
          avatar: "courses3.png",
          viewers: "13,858 ",
        },
      ],
    };
  },
};
</script>

<style>
</style>