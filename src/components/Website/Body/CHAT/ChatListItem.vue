<template>
  <b-row>
    <b-col>
      <div class="side-menu__row px-0">
        <b-col>
          <VisitorCardVue v-if="!isConference()" :data="$attrs.data" />
          <ConferenceItemVue v-if="isConference()" :data="$attrs.data" />
        </b-col>
        <span class="side-menu__row_overlay" @click="$attrs.toggleButton" />
      </div>
      <hr />
    </b-col>
  </b-row>
</template>

<script>
import VisitorCardVue from "../Profile/VisitorCard.vue";
import ConferenceItemVue from "./ConferenceItem.vue";

export default {
  components: {
    VisitorCardVue,
    ConferenceItemVue,
  },
  methods: {
    isConference() {
      return Object.prototype.hasOwnProperty.call(
        this.$attrs.data,
        "conference"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  border-radius: 5px;
  hr {
    margin: 0;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    &_overlay {
      position: absolute;
      width: 60%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 20;
    }
    &:hover {
      color: rgb(21, 112, 216);
    }
    &.active {
      opacity: 0.5;
      color: rgb(145, 153, 163);
      border-left: 10px solid rgb(21, 112, 216);
      .side-menu__row_value {
        color: rgb(231, 83, 24);
      }
    }

    &_name {
      text-transform: uppercase;
      .icon {
        margin: 0 15px;
      }
    }

    &_value {
      margin-left: auto;
    }
  }
}
</style>