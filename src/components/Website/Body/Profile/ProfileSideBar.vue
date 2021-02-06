<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"><DashBoardVue /></b-row>
        <b-row class="mb-4"
          ><VisitiorsVue
            :data="$attrs.getVisitors.data"
            :fetching="$attrs.visitordFetching"
        /></b-row>
        <b-row v-if="$attrs.getWPcourses" class="mb-4"
          ><GaleryVue
            :data="$attrs.getWPcourses.slice(0, 3)"
            :fetching="$attrs.galleryFetching"
            title="You may like these courses"
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
};
</script>

<style>
</style>