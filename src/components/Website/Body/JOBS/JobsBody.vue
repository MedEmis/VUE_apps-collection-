<template>
  <b-container fluid class="jobs-container">
    <b-row class="jobs-wrapper">
      <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
        <JobsMainVue
          :getJobs="getJobSearchBlock"
          :getJobSearchBlockFetching="getJobSearchBlockFetching"
        />
      </b-col>
      <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
        <JobsSidebarVue
          :getAarticles="getArticles"
          :getMySearches="getMySearches"
          :getTrackedJob="getTrackedJob"
          :getMySearchesFetching="getMySearchesFetching"
          :getTrackedJobFetching="getTrackedJobFetching"
          :getGalleryFetching="getGalleryFetching"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "JobsBody",
  components: {
    JobsMainVue: () => import("./JobsMain.vue"),
    JobsSidebarVue: () => import("./JobsSidebar.vue"),
  },
  computed: mapGetters([
    "getJobSearchBlock",
    "getMySearches",
    "getTrackedJob",
    "getArticles",
    "getJobSearchBlockFetching",
    "getMySearchesFetching",
    "getTrackedJobFetching",
    "getGalleryFetching",
  ]),
  methods: {
    ...mapActions(["JobsPageActions"]),
  },
  mounted() {
    this.JobsPageActions();
    // if (!this.getJobSearchBlock.data.lendth) {
    // }
  },
};
</script>

<style lang="scss">
.jobs-container {
  flex: 1 1 auto;
}
.jobs-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 1100px) {
    padding: 1rem;
  }
}
</style>
