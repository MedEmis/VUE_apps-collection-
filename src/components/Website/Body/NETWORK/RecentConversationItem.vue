<template>
  <b-col class="m-0 p-0" xl="6" lg="6" md="6" sm="12" xs="12">
    <b-card-body class="p-2">
      <b-card bg-variant="white" text-variant="black">
        <b-row class="pl-4">
          <b-col xl="6" lg="6" md="6" sm="10" xs="10"
            ><VisitorCardVue :data="$attrs.data"
          /></b-col>
        </b-row>
        <b-row class="text-right"
          ><small class="text-muted ml-auto">{{
            $attrs.data.date
          }}</small></b-row
        >
      </b-card>
    </b-card-body>
  </b-col>
</template>

<script>
import VisitorCardVue from "../Profile/VisitorCard.vue";

export default {
  name: "RecentConversationItem",
  components: {
    VisitorCardVue,
  },
};
</script>

<style>
</style>