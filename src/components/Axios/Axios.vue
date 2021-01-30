<template>
  <div class="row col-12 p-2 pb-9 m-0 axios-wraper">
    <SidebarVue />
    <transition name="fade" mode="out-in">
      <router-view
        :paginatedPost="getPaginatedPost"
        :infinitePosts="getInfinitePosts"
        :getPaginatedPosts="paginatedRequest"
        :getInfinitePost="infiniteRequest"
        :fetching="getIsPostFetching"
      />
    </transition>
  </div>
</template>


<script>
import SidebarVue from "./Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Axios",
  components: {
    SidebarVue,
  },
  computed: mapGetters([
    "getPaginatedPost",
    "getInfinitePosts",
    "getIsPostFetching",
  ]),
  methods: { ...mapActions(["paginatedRequest", "infiniteRequest"]) },
};
</script>

<style lang="scss" scoped>
.axios-wraper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>