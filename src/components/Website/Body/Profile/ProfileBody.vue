<template>
  <b-container class="profile-container" fluid>
    <b-row class="profile-wrapper">
      <b-col class="pr-4" xl="9" lg="8" md="12" sm="12" xs="12">
        <ProfileMainVue
          :getProjects="getWPprojects"
          :getCourses="getWPcourses"
          :getWFetching="getWPfetching"
        />
      </b-col>
      <b-col class="pl-4" xl="3" lg="4" md="12" sm="12" xs="12">
        <ProfileSideBarVue />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProfileMainVue from "./ProfileMain.vue";
import ProfileSideBarVue from "./ProfileSideBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileBody",
  components: {
    ProfileMainVue,
    ProfileSideBarVue,
  },
  computed: mapGetters(["getWPprojects", "getWPcourses", "getWPfetching"]),
  methods: {
    ...mapActions(["projectsRequest", "coursesRequest"]),
  },
  mounted() {
    if (!this.getWPprojects.lendth) {
      this.projectsRequest();
    }
    if (!this.getWPcourses.lendth) {
      this.coursesRequest();
    }
  },
};
</script>

<style lang="scss">
.profile-container {
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
