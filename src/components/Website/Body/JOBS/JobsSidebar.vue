<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"><NewArticleButtonVue text="Post a job" /> </b-row>
        <b-row class="mb-4"><MySearchesVue /> </b-row>
        <b-row class="mb-4"><TrackedJobVue /> </b-row>
        <b-row class="mb-4"
          ><GaleryVue :data="articles" title="articles for you" />
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
  data() {
    return {
      articles: [
        {
          name: "The guide. Apply for a job ",
          avatar: "article4.png",
          viewers: "12,932 ",
        },
        {
          name: "Your dream job and how you can g",
          avatar: "article5.png",
          viewers: "9,112 ",
        },
        {
          name: "Now you know it. 15 steps to find job",
          avatar: "article6.png",
          viewers: "7,221",
        },
      ],
    };
  },
};
</script>

<style>
</style>