<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"> <DividerVue textLeft="recent" /></b-row>
        <b-row class="mb-4"> <NoticesBlockVue :data="recent" /></b-row>
        <b-row class="mb-4"> <DividerVue textLeft="earlier" /></b-row>
        <b-row class="mb-4"> <NoticesBlockVue :data="earlier" /></b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import DividerVue from "../NETWORK/Divider.vue";
import NoticesBlockVue from "./NoticesBlock.vue";

NoticesBlockVue;
export default {
  name: "NoticesMain",
  components: { NoticesBlockVue, DividerVue },
  data() {
    return {
      recent: [
        {
          name: "You appeared in 9 searches this week",
          avatar: ["upWork.png", "facebook.png", "google.png"],
          location: "3 hours",
        },
        {
          name: "Audrey Alexander and 10 others viewed your profile",
          avatar: ["visitor4.png", "visitor3.png", "visitor5.png"],
          location: "9 hours",
        },
        {
          name:
            "Eduardo Russel and 4 others liked your post «1,000 connections! My network growth, so many»",
          avatar: ["visitor5.png", "visitor1.png", "visitor6.png"],
          location: "12 hours",
        },
      ],
      earlier: [
        {
          name: "We found jobs that you may be interested",
          avatar: ["facebook.png", "instagram.png", "google.png"],
          location: "2 day ago",
        },
        {
          name: "Kyle Fisher and 17 others viewed your profile",
          avatar: ["visitor4.png", "visitor3.png", "visitor5.png"],
          location: "9 hours",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>