<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"><NewArticleButtonVue text="Post a job" /> </b-row>
        <b-row class="mb-4"><MySearchesVue /> </b-row>
        <b-row class="mb-4"><TrackedJobVue /> </b-row>
        <b-row class="mb-4" v-if="$attrs.getAarticles.data"
          ><GaleryVue
            :data="$attrs.getAarticles.data"
            title="articles for you"
          />
        </b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import NewArticleButtonVue from "../FEED/NewArticleButton.vue";
import GaleryVue from "../Profile/Galery.vue";
import MySearchesVue from "./MySearches.vue";
import TrackedJobVue from "./TrackedJob.vue";

export default {
  name: "JobsSidebar",
  components: { NewArticleButtonVue, MySearchesVue, TrackedJobVue, GaleryVue },
};
</script>

<style>
</style>