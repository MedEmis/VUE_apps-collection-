<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"> <JobSearchVue /></b-row>
        <b-row class="mb-4"><DividerVue textLeft="jobs for you" /> </b-row>
        <b-row v-if="$attrs.getJobs.data" class="mb-4"
          ><JobSearchBlockVue
            :fetching="$attrs.getJobSearchBlockFetching"
            :data="
              $attrs.getJobs.data.filter((item) => item.status === 'for you')
            "
          />
        </b-row>
        <b-row class="mb-4"><DividerVue textLeft="new jobs" /> </b-row>
        <b-row v-if="$attrs.getJobs.data" class="mb-4"
          ><JobSearchBlockVue
            :fetching="$attrs.getJobSearchBlockFetching"
            :data="$attrs.getJobs.data.filter((item) => item.status === 'new')"
          />
        </b-row>
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
};
</script>

<style lang="scss">
</style>