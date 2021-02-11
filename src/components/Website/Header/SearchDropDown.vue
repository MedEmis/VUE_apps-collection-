<template>
  <div class="search-dropdown">
    <b-collapse id="collapse-search" class="search-dropdown__body">
      <b-button
        class="search-dropdown__close"
        v-b-toggle.collapse-search
        size="sm"
        ><b-icon icon="x" scale="2" class="m-1"
      /></b-button>
      <b-col class="p-0">
        <b-row class="p-2">
          <b-col class="col-9 search-dropdown__body_title p-2">
            <b-input
              v-model="$attrs.value"
              class="search-dropdown__input-search"
            />
          </b-col>
          <b-col class="col-2 py-2 px-1 text-center">
            <b-button class="search-dropdown__button-search">
              <b-icon
                icon="search"
                aria-hidden="true"
                variant="white"
                class="search-block__icon"
              />
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="search-dropdown__body_block py-3 px-4 m-0">
              <div class="text-muted mb-2">JOBS</div>
              <TrackedJobItemVue
                v-for="group in getGroup('jobs')"
                :key="group.name"
                :data="group"
              />
              <a class="link-block mb-2"
                >ALL JOBS ({{ searchResult.jobs.length }})</a
              >
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="search-dropdown__body_block py-3 px-4 m-0">
              <div class="text-muted mb-2">USERS</div>
              <VisitorCardVue
                v-for="group in getUserVisitors.data.slice(0, 2)"
                :key="group.name"
                :data="group"
              />
              <a class="link-block mb-2"
                >ALL USERS ({{ getUserVisitors.data.length }})</a
              >
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="search-dropdown__body_block py-3 px-4 m-0">
              <div class="text-muted mb-2">ARTICLES</div>
              <GaleryItemVue
                v-for="group in getArticles.data.slice(0, 2)"
                :key="group.name"
                :data="group"
              />
              <a class="link-block mb-2"
                >ALL ARTICLES ({{ getArticles.data.length }})</a
              >
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="search-dropdown__body_block">
              <b-row>
                <b-col>
                  <NewArticleButtonVue
                    :text="'All results (' + allResults() + ')+'"
                  />
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-collapse>
  </div>
</template>

<script>
import NewArticleButtonVue from "../Body/FEED/NewArticleButton.vue";
import TrackedJobItemVue from "../Body/JOBS/TrackedJobItem.vue";
import GaleryItemVue from "../Body/Profile/GaleryItem.vue";
import VisitorCardVue from "../Body/Profile/VisitorCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "SearchDropDown",
  components: {
    NewArticleButtonVue,
    TrackedJobItemVue,
    VisitorCardVue,
    GaleryItemVue,
  },
  data() {
    return {
      searchResult: {
        jobs: [
          {
            name: "UX/UI Designer",
            employer: "Upwork",
            avatar: "upWork.png",
            link: "link",
          },
          {
            name: "Product designer",
            employer: "Facebook",
            avatar: "facebook.png",
            link: "link",
          },
          {
            name: "Product designer",
            employer: "Facebook",
            avatar: "facebook.png",
            link: "link",
          },
          {
            name: "Product designer",
            employer: "Facebook",
            avatar: "facebook.png",
            link: "link",
          },
          {
            name: "Product designer",
            employer: "Facebook",
            avatar: "facebook.png",
            link: "link",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["getUserVisitors", "getArticles"]),
  },
  methods: {
    allResults() {
      let sum = 0;
      for (const el in this.searchResult) {
        sum += this.searchResult[el].length;
      }
      return sum;
    },
    getGroup(types) {
      return this.searchResult[types].slice(0, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-dropdown {
  position: absolute;
  height: auto;
  top: -20px;
  left: 0px;
  z-index: 20;
  color: #000;
  width: 100%;
  height: auto;
  background: rgb(250, 250, 250);
  &__close {
    color: #000;
    font-weight: 700;
    background: rgb(255, 255, 255);
    border: none;
    position: absolute;
    z-index: 30;
    width: 40px;
    height: 40px;
    top: 90px;
    right: 0%;
    @media (max-width: 450px) {
      right: 50px;
    }
  }
  &__body {
    hr {
      margin: 0 auto;
      width: 90%;
    }
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: block;

    &_block {
      width: 100%;
      height: auto;
    }
  }
  &__button-search {
    background: var(--blue-background);
  }
  &__input-search {
    border: none;
  }
}
</style>