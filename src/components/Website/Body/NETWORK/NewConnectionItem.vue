<template>
  <b-row class="bg-white px-2 py-4 mb-2 new-connection">
    <b-col xl="3" lg="3" md="4" sm="12" xs="12">
      <VisitorCardVue :data="$attrs.data" />
    </b-col>
    <b-col xl="5" lg="4" md="4" sm="12" xs="12">
      <div v-if="$attrs.data.message" class="new-connection__message">
        {{ $attrs.data.message }}
      </div>
    </b-col>
    <b-col xl="4" lg="5" md="4" sm="12" xs="12" class="new-connection__buttons">
      <b-row>
        <b-col class="new-connection__buttons_item"
          ><b-button size="lg" variant="outline-primary"
            >Accept</b-button
          ></b-col
        >
        <b-col class="new-connection__buttons_item">
          <b-button size="lg" variant="outline-primary"
            >Decline</b-button
          ></b-col
        >
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import VisitorCardVue from "../Profile/VisitorCard.vue";
export default {
  name: "NewConnectionItem",
  components: {
    VisitorCardVue,
  },
};
</script>

<style lang="scss" scoped>
.new-connection {
  border-radius: 5px;
  &__message {
    border-left: 4px solid rgb(60, 145, 255);
    height: 100%;
    padding: 5px;
    word-wrap: break-word;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 240px;
    &_item {
      padding: 10px;
      @media (max-width: 1540px) {
        padding: 5px;
      }
      @media (max-width: 1476px) {
        padding: 5px 1px;
      }
      @media (max-width: 760px) {
        padding: 10px ;
      }
    }
    @media (max-width: 1470px) {
      padding: 0px ;
    }
  }
}
</style>