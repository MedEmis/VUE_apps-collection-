<template>
  <form ref="reference">
    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @input="validator.country.$touch()"
            type="country"
            class="form-control balloon"
            :class="countryStatus(validator)"
            id="country"
            v-model="$attrs.value.country"
          />
          <label for="country" class="form-label">Country</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.country.required"
            class="invalid-profileback"
            v-text="tips.country.required"
          />
          <div
            v-if="!validator.country.alpha"
            class="invalid-profileback"
            v-text="tips.country.symbols"
          />
          <div
            v-if="!validator.country.maxLength"
            class="invalid-profileback"
            v-text="tips.country.length"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>
    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @input="validator.city.$touch()"
            type="city"
            class="form-control balloon"
            :class="cityStatus(validator)"
            id="city"
            v-model="$attrs.value.city"
          />
          <label for="city" class="form-label">City</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.city.required"
            class="invalid-profileback"
            v-text="tips.city.required"
          />
          <div
            v-if="!validator.city.alpha"
            class="invalid-profileback"
            v-text="tips.city.symbols"
          />
          <div
            v-if="!validator.city.maxLength"
            class="invalid-profileback"
            v-text="tips.city.length"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>

    <div class="d-flex justify-content-around">
      <button @click.prevent="backStepfn" class="btn btn-primary">Back</button>
      <button
        @click.prevent="submitFormfn"
        :disabled="validator.$invalid"
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
const tips = {
  country: {
    required: "Required field.",
    symbols: "No numeric symbols",
    length: "Max length 35 symbols.",
  },
  city: {
    required: "Required field.",
    symbols: "No numeric symbols",
    length: "Max length 35 symbols.",
  },
};
export default {
  name: "FormStep3",
  props: ["submitFormfn", "backStepfn", "validator"],
  data() {
    return {
      tips: tips,
    };
  },
  methods: {
    countryStatus(validator) {
      return [
        validator.country.$error ? "is-invalid red-invalid" : "",
        validator.country.required &&
        validator.country.alpha &&
        validator.country.maxLength
          ? "is-valid green-valid"
          : "",
      ];
    },
    cityStatus(validator) {
      return [
        validator.city.$error ? "is-invalid red-invalid" : "",
        validator.city.required &&
        validator.city.alpha &&
        validator.city.maxLength
          ? "is-valid green-valid"
          : "",
      ];
    },
  },
};
</script>

<style>
</style>





