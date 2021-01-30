<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"> <JobSearchVue /></b-row>
        <b-row class="mb-4"><DividerVue textLeft="jobs for you" /> </b-row>
        <b-row class="mb-4"><JobSearchBlockVue :data="jobsForYou" /> </b-row>
        <b-row class="mb-4"><DividerVue textLeft="new jobs" /> </b-row>
        <b-row class="mb-4"><JobSearchBlockVue :data="newJobs" /> </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import DividerVue from "../NETWORK/Divider.vue";
import JobSearchVue from "./JobSearch.vue";
import JobSearchBlockVue from "./JobSearchBlock.vue";
export default {
  name: "JobsMain",
  components: {
    JobSearchBlockVue,
    JobSearchVue,
    DividerVue,
  },
  data() {
    return {
      jobsForYou: [
        {
          name: "UX/UI designer",
          employer: "Upwork",
          avatar: "upWork.png",
          location: "Remote only",
          description:
            "On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,",
        },
        {
          name: "Product designer",
          employer: "Facebook",
          avatar: "facebook.png",
          location: "CA, USA",
          description:
            "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay..",
        },
        {
          name: "Part-time UX designer",
          employer: "Google",
          avatar: "google.png",
          location: "International",
          description:
            "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
        },
        {
          name: "Web designer",
          employer: "LinkedIn",
          avatar: "linkedin.png",
          location: "CA, USA",
          description:
            "LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.",
        },
      ],
      newJobs: [
        {
          name: "UI designer",
          employer: "Instagram",
          avatar: "instagram.png",
          location: "CA, USA",
          description:
            "Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. ",
        },
        {
          name: "Product designer",
          employer: "Periscope",
          avatar: "periscope.png",
          location: "Remote only",
          description:
            "eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>