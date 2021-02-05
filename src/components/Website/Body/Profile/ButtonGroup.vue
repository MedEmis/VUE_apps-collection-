
<template>
  <b-col class="p-0">
    <b-row class="button-group">
      <b-col
        md="4"
        xs="12"
        v-for="item in $attrs.options"
        :key="item"
        class="p-0 button-group__item"
      >
        <b-button
          block
          align-h="end"
          bottom
          variant="light"
          class="button-group__item_button"
          @click="toggleButton"
        >
          {{ item }}
        </b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "ButtonGroup",
  data() {
    return {
      chosen: false,
    };
  },
  methods: {
    toggleButton(event) {
      let chosen = null;
      this.$vnode.child.$el.children[0].children.forEach((element) => {
        element.children[0].classList.remove("chosen");
        if (event.target.innerHTML === element.children[0].innerHTML) {
          chosen = event.target;
        }
      });
      chosen.classList.add("chosen");
    },
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  height: auto;
  min-height: 50px;
  max-height: 100px;
  &__item {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &_button {
      text-transform: uppercase;
      border-right: 1px solid rgb(224, 224, 224);
      font-weight: 700;
      @media (max-width: 1120px) {
        font-size: 12px;
      }
      &.chosen {
        color: #fff;
        background: var(--blue-background);
        height: 50px;
      }
    }
  }
}
</style>