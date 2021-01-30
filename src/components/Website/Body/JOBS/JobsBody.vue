<template>
  <b-container fluid class="jobs-container">
    <b-row class="jobs-wrapper">
      <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
        <JobsMainVue />
      </b-col>
      <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
        <JobsSidebarVue />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import JobsMainVue from "./JobsMain.vue";
import JobsSidebarVue from "./JobsSidebar.vue";
export default {
  name: "JobsBody",
  components: {
    JobsMainVue,
    JobsSidebarVue,
  },
};
</script>

<style lang="scss" >
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