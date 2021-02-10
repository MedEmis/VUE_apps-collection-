<template>
  <keep-alive>
    <b-container fluid class="network-container">
      <b-row class="profile-wrapper">
        <b-col xl="9" lg="8" md="12" sm="12" xs="12">
          <FeedMainVue
            :createPostRequest="createPostRequest"
            :getPosts="getUserPost"
            :getWFetching="getUserPostFetching"
          />
        </b-col>
        <b-col xl="3" lg="4" md="12" sm="12" xs="12">
          <FeedSidebarVue
            :getArticles="getArticles"
            :currentUser="getUserProfileCardMid"
            :getHashTags="getHashTags"
            :currentUserFetching="getUserProfileCardMidFetching"
            :groupsFetching="getMyGroupsFetching"
            :hashTagsFetching="getHashTagsFetching"
          />
        </b-col>
      </b-row>
    </b-container>
  </keep-alive>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FeedBody",
  components: {
    FeedMainVue: () => import("./FeedMain.vue"),
    FeedSidebarVue: () => import("./FeedSideBar"),
  },
  computed: mapGetters([
    "getUserPost",
    "getUserProfileCardMid",
    "getArticles",
    "getHashTags",
    "getUserProfileCardMidFetching",
    "getUserPostFetching",
    "getMyGroupsFetching",
    "getHashTagsFetching",
  ]),
  methods: {
    ...mapActions(["FeedPageActions", "createPostRequest"]),
  },
  mounted() {
    if (!this.getUserPost.lendth) {
      this.FeedPageActions();
    }
  },
};
</script>

<style lang="scss">
.network-container {
  flex: 1 1 auto;
}
.profile-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 990px) {
    padding: 1rem;
  }
}
</style>
