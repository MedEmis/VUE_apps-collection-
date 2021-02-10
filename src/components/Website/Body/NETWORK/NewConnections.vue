<template>
  <b-col v-if="$attrs.data">
    <NewConnectionItemVue
      v-for="connection in $attrs.data.slice().reverse()"
      :key="connection.name"
      :data="connection"
    />
    <b-overlay :show="$attrs.newFetching" no-wrap />
  </b-col>
</template>

<script>
import NewConnectionItemVue from "./NewConnectionItem.vue";
export default {
  name: "NewConnection",
  components: {
    NewConnectionItemVue,
  },
  data() {
    return {
      totalCount: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.connections {
  &__title {
    font-weight: 700;
    padding: 10px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>