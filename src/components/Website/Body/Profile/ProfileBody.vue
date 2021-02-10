<template>
  <keep-alive>
    <b-container class="profile-container" fluid>
      <b-row class="profile-wrapper">
        <b-col class="pr-4" xl="9" lg="8" md="12" sm="12" xs="12">
          <ProfileMainVue
            :currentuser="getUserProfileCard"
            :about="getAboutCard"
            :getProjects="getProjects"
            :skills="getSkillsEndoresment"
            :education="getUserEducation"
            :profileFetching="getUserProfileCardFetching"
            :aboutFetching="getAboutCardFetching"
            :projectFetching="getProjectsFetching"
            :educationFetching="getUserEducationFetching"
            :skillsFetching="getSkillsEndoresmentFetching"
          />
        </b-col>
        <b-col class="pl-4" xl="3" lg="4" md="12" sm="12" xs="12">
          <ProfileSideBarVue
            :getVisitors="getUserVisitors"
            :getWPcourses="getCourses"
            :galleryFetching="getGalleryFetching"
            :visitordFetching="getVisitorsFetching"
          />
        </b-col>
      </b-row>
    </b-container>
  </keep-alive>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileBody",
  data() {
    return {};
  },
  components: {
    ProfileMainVue: () =>
      import(/* webpackPrefetch: true */ "./ProfileMain.vue"),
    ProfileSideBarVue: () =>
      import(/* webpackPrefetch: true */ "./ProfileSideBar.vue"),
  },
  computed: {
    ...mapGetters([
      "getUserProfileCard",
      "getAboutCard",
      "getCourses",
      "getProjects",
      "getSkillsEndoresment",
      "getUserEducation",
      "getUserVisitors",
      "getUserProfileCardFetching",
      "getAboutCardFetching",
      "getGalleryFetching",
      "getProjectsFetching",
      "getSkillsEndoresmentFetching",
      "getUserEducationFetching",
      "getVisitorsFetching",
    ]),
  },
  methods: {
    ...mapActions(["ProfilePageActions"]),
  },
  created() {
    this.ProfilePageActions();
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
