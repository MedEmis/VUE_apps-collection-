<template>
  <b-row class="user-block">
    <b-col>
      <b-row class="user-block__name">
        <span class="user-block__name_text">{{ $attrs.name }}</span>
        <span class="user-block__name_count">{{ usersSet.length }}</span>
      </b-row>
      <b-row>
        <div class="user-block__list">
          <b-img
            v-for="(user, index) in vilibleUsers"
            :key="index"
            class="user-block__list_item"
            :src="require('@/assets/linkedIn/' + user)"
            alt="user"
          />
        </div>
        <span class="user-block__list_hidden" v-if="this.hiddenUsers > 0"
          >+{{ this.hiddenUsers }}</span
        >
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SkillsEndoresmentItem",
  data() {
    return {
      usersSet: this.$attrs.src,
      vilibleUsers: 0,
      hiddenUsers: 0,
    };
  },
  mounted() {
    this.users();
  },
  methods: {
    users() {
      this.vilibleUsers = this.usersSet.slice(0, 6);
      this.hiddenUsers = this.usersSet.length - this.vilibleUsers.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-block {
  margin: 10px;
  width: 100%;
  min-width: 240px;
  max-width: 340px;
  min-height: 90px;
  max-height: 90px;
  padding: 10px 25px;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 5px;
  &__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    padding: 5px 0;
    &_text {
    }
    &_count {
      color: rgb(25, 61, 219);
    }
  }

  &__list {
    padding: 0;
    &_item {
      width: 30px;
      height: 30px;
      position: relative;
      &:not(:last-child) {
        margin-right: -7px;
      }
    }

    &_hidden {
      color: #fff;
      font-size: 14px;
      align-self: start;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      background: #0275b1;
      margin-left: -10px;
      z-index: 5;
    }
  }
}
</style>

