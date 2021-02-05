<template>
  <b-col class="p-0">
    <b-row>
      <b-col class="p-4 bg-white project">
        <h5 class="project__title">
          Projects
          <span v-if="$attrs.projects" class="project__title_number"
            >3 of {{ $attrs.projects.length }}</span
          >
        </h5>
        <b-row class="p-0 project__wrapper">
          <b-col
            v-for="project in $attrs.projects"
            :key="project.title"
            class="p-0 project__item"
            md="3"
            sm="10"
          >
            <div>
              <b-img fluid :src="project.image" alt="project"></b-img>
              <p class="p-0 project__item_name">{{ project.title }}</p>
              <p class="p-0 project__item_description">
                {{ project.subtitle }}
              </p>
            </div>
          </b-col>
        </b-row>
        <a v-if="$attrs.projects" class="link-block"
          >Show all ({{ $attrs.projects.length }})</a
        >
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
.project {
  &__title {
    font-weight: 700;
    padding: 10px 0;
    &_number {
      font-weight: 400;
      color: #777;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &_name {
      margin-top: 10px;
      font-weight: 700;
    }

    &_description {
      font-size: 12px;
    }
  }
}
</style>
