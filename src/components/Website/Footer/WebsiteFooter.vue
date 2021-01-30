<template>
  <footer class="bg-light text-lg-start pb-2">
    <!-- Grid container -->
    <b-container class="py-3">
      <!--Grid row-->
      <b-row class="py-1">
        <b-col class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
          <a class="p-0" href="#">
            <img src="@/assets/linkedIn/Logo.png" height="46" alt="logo" />
            <h5 class="mb-0 py-2 text-dark">
              Linked<span class="text-info">In</span>
            </h5>
          </a>
        </b-col>
        <!--Grid column-->
        <b-col
          class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 navigation-block"
        >
          <b-row>
            <h5 class="footer-title">Navigation</h5>
          </b-row>
          <b-row>
            <b-col class="col-lg-4 col-md-4 col-sm-4 col-12 p-0">
              <ul class="list-unstyled link-list">
                <li>
                  <router-link class="link" to="#!">About</router-link>
                </li>
                <li>
                  <router-link class="link" to="#!">Carrers</router-link>
                </li>
                <li>
                  <router-link class="link" to="#!">Advertiding</router-link>
                </li>
                <li>
                  <router-link class="link" to="#!">Small Business</router-link>
                </li>
              </ul>
            </b-col>
            <b-col class="col-lg-4 col-md-4 col-sm-4 col-12 p-0">
              <ul class="list-unstyled link-list">
                <li>
                  <router-link class="link" to="#!"
                    >Talent Solutions</router-link
                  >
                </li>
                <li>
                  <router-link class="link" to="#!"
                    >Marketing Solutions</router-link
                  >
                </li>
                <li>
                  <router-link class="link" to="#!"
                    >Sales Solutions</router-link
                  >
                </li>
                <li>
                  <router-link class="link" to="#!">Safety Center</router-link>
                </li>
              </ul>
            </b-col>
            <b-col class="col-lg-4 col-md-4 col-sm-4 col-12 p-0">
              <ul class="list-unstyled link-list">
                <li>
                  <router-link class="link" to="#!"
                    >Community Gudelines</router-link
                  >
                </li>
                <li>
                  <router-link class="link" to="#!"
                    >Privasy & Terms</router-link
                  >
                </li>
                <li>
                  <router-link class="link" to="#!">Mobile App</router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12 mb-4 mb-md-0 button-block"
        >
          <b-row>
            <h5 class="footer-title">Fast access</h5>
          </b-row>
          <b-row class="pr-5">
            <b-button
              variant="info"
              block
              class="text-uppercase py-2 d-flex justify-content-between align-items-center access-buttons"
              >Questions?<b-icon icon="question-circle" aria-hidden="true"
            /></b-button>
            <b-button
              variant="outline-primary"
              block
              class="text-uppercase py-2 text-left d-flex justify-content-between align-items-center access-buttons"
            >
              Settings <b-icon icon="gear" aria-hidden="true"
            /></b-button>
          </b-row>
        </b-col>
        <!--Grid column-->
        <b-col
          class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12 mb-4 mb-md-0 language-block"
        >
          <b-row>
            <h5 class="footer-title">Language</h5>
          </b-row>
          <b-row>
            <b-form-select
              class="font-weight-bold"
              id="initial-sort-select"
              :options="languages"
              value="English"
              size="sm"
            ></b-form-select>
          </b-row>
        </b-col>
      </b-row>
      <!--Grid row-->
    </b-container>
    <!-- Grid container -->
  </footer>
</template>

<script>
export default {
  name: "WebsiteFooter",
  components: {},
  data() {
    return {
      languages: ["English", "Russian", "Spanish"],
    };
  },
};
</script>

<style lang="scss" scoped>
.access-buttons {
  font-size: 12px;
}
.footer-title {
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 20px;
}
.link {
  color: #000;
}
.link-list {
  & li {
    margin-bottom: 5px;
  }
}
@media (max-width: 570px) {
  .navigation-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-block {
    padding: 0 40px;
  }
  .language-block {
    padding: 0 40px;
  }
}
@media (max-width: 440px) {
  .navigation-block {
    padding: 0 50px;
  }
}
</style>


