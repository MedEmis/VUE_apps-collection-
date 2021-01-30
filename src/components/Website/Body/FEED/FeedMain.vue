<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"><PostFormVue /></b-row>
        <b-row class="mb-4"><PostSortingVue /></b-row>
        <b-row class="mb-4">
          <b-col class="p-0">
            <UserPostVue v-for="post in posts" :key="post.name" :data="post" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import PostFormVue from "./PostForm.vue";
import PostSortingVue from "./PostSorting.vue";
import UserPostVue from "./UserPost.vue";
export default {
  name: "FeedMain",
  components: {
    PostFormVue,
    PostSortingVue,
    UserPostVue,
  },
  data() {
    return {
      posts: [
        {
          name: "Theresa Steward",
          position: "iOS developer",
          avatar: "visitor2.png",
          postText:
            "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
          image: "",
          files: "",
          likes: 42,
          answers: 9,
        },
        {
          name: "Kyle Fisher",
          position: "Product designer at Commandor Corp.",
          avatar: "visitor4.png",
          postText: "How’s your day going, guys?",
          image: "postBG.png",
          files: "",
          likes: 12,
          answers: 3,
        },
        {
          name: "Brandon Wilson",
          position: "iOS developer",
          avatar: "visitor3.png",
          image: "",
          files: [
            {
              name: "iOS 11 guidelines for UX/UI designers",
              description: "PDF file, 324 kb",
            },
            {
              name: "iOS 11 guidelines for developers",
              description: "PDF file, 245 kb",
            },
          ],
          postText: "There is some new guidelines for iOS",
          likes: 42,
          answers: 9,
        },
        {
          name: "Audrey Alexander",
          position: "iOS developer",
          avatar: "visitor5.png",
          image: "",
          files: "",
          postText:
            "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
          likes: 10,
          answers: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>