<template>
  <main>
    <b-row class="profile-main-wrapper m-0">
      <b-col>
        <b-row class="mb-4"><UserProfileCard /></b-row>
        <b-row class="mb-4"><ButtonGroupVue :options="buttonOptions"/></b-row>
        <b-row class="mb-4"><AboutCardVue /></b-row>
        <b-row class="mb-4"><ProjectsVue /></b-row>
        <b-row class="mb-4"><SkillsEndoresmentVue /></b-row>
        <b-row class="mb-4"><UserExperienceVue /></b-row>
        <b-row class="mb-4"><UserEducationVue /></b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import AboutCardVue from "./AboutCard.vue";
import ButtonGroupVue from "./ButtonGroup.vue";
import ProjectsVue from "./Projects.vue";
import SkillsEndoresmentVue from "./SkillsEndoresment.vue";
import UserEducationVue from "./UserEducation.vue";
import UserExperienceVue from "./UserExperience.vue";
import UserProfileCard from "./UserProfileCard.vue";
export default {
  name: "ProfileMain",
  components: {
    UserProfileCard,
    ButtonGroupVue,
    AboutCardVue,
    ProjectsVue,
    SkillsEndoresmentVue,
    UserExperienceVue,
    UserEducationVue,
  },
  data() {
    return {
      buttonOptions: ["Profile", "Activity & interests", "Articles (3)"],
    };
  },
};
</script>

<style lang="scss">
.profile-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;
}
</style>