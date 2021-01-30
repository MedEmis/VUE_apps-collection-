<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"> <NoticeSideMenuVue /></b-row>
        <b-row class="mb-4"> <DashBoardVue /></b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import DashBoardVue from "../Profile/DashBoard.vue";
import NoticeSideMenuVue from "./NoticeSideMenu.vue";

export default {
  name: "NoticesSidebar",
  components: { NoticeSideMenuVue, DashBoardVue },
  data() {
    return {
      articles: [
        {
          name: "How I make cool designs?",
          avatar: "article1.png",
          viewers: "6,340 ",
        },
        {
          name: "Advices for young HR-manage",
          avatar: "article2.png",
          viewers: "8,123",
        },
        {
          name: "A little about usability testing",
          avatar: "article3.png",
          viewers: "3,912",
        },
      ],
    };
  },
};
</script>

<style>
</style>