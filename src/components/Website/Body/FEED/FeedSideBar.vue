<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"> <UserProfileCardMidVue /> </b-row>
        <b-row class="mb-4">
          <NewArticleButtonVue text="write new article " />
        </b-row>
        <b-row class="mb-4"> <MyGroupsVue /> </b-row>
        <b-row class="mb-4"> <HashTagsVue /> </b-row>
        <b-row class="mb-4">
          <GaleryVue :data="articles" title="Trending articles" />
        </b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import GaleryVue from "../Profile/Galery.vue";
import HashTagsVue from "./HashTags.vue";
import MyGroupsVue from "./MyGroups.vue";
import NewArticleButtonVue from "./NewArticleButton.vue";
import UserProfileCardMidVue from "./UserProfileCardMid.vue";
export default {
  name: "FeedSideBar",
  components: {
    UserProfileCardMidVue,
    NewArticleButtonVue,
    MyGroupsVue,
    HashTagsVue,
    GaleryVue,
  },
  data() {
    return {
      articles: [ 
        {
          name: "How I make cool designs?",
          avatar: "article1.png",
          viewers: "6,340 ",
        },
        {
          name: "Advices for young HR-manage",
          avatar: "article2.png",
          viewers: "8,123",
        },
        {
          name: "A little about usability testing",
          avatar: "article3.png",
          viewers: "3,912",
        },
      ],
    };
  },
};
</script>

<style>
</style>