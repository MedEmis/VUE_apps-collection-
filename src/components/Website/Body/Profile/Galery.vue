<template>
  <b-col class="col-12 dashboard">
    <b-row class="dashboard-title"
      ><span class="dashboard-title_text"> {{ $attrs.title }} </span>
    </b-row>
    <GaleryItemVue v-for="item in $attrs.data" :key="item.name" :data="item" />
    <b-row class="dashboard-title"
      ><a class="link-block" href="#">See all recomendations</a>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
import GaleryItemVue from "./GaleryItem.vue";
export default {
  name: "Galery",
  components: {
    GaleryItemVue,
  },
};
</script>

<style lang="scss">
.dashboard {
  background: #fff;
  padding-bottom: 3rem;
  border-radius: 5px;
}
.dashboard-title {
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_text {
    font-weight: 700;
  }
}
</style>