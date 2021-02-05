<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"> <UserProfileCardMidVue :user="$attrs.currentUser" :getWFetching="$attrs.getWFetching" /> </b-row>
        <b-row class="mb-4">
          <NewArticleButtonVue text="write new article " />
        </b-row>
        <b-row class="mb-4"> <MyGroupsVue /> </b-row>
        <b-row class="mb-4"> <HashTagsVue /> </b-row>
        <b-row class="mb-4">
          <GaleryVue :data="$attrs.getArticles.slice(0,3)" title="Trending articles" />
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
    return {};
  },
};
</script>

<style>
</style>