<template>
  <div class="row row-wrapper">
    <div class=" col-lg-6 col-md-8 col-sm-8 col-xs-10 multi-form-wrapper">
      <div class="col-sm-8 p-3">
        <ProgressStepVue
          v-model="forms"
          :step="step"
          :currentProgress="currentProgress"
          :progressStep="progressStep"
        />
      </div>
      <div class="col-sm-8 p-3">
        <transition name="slide-fade">
          <div v-show="step === 1" class="step">
            <FormStep1Vue
              v-model.trim="formOne"
              :resetfn="formReset"
              :nextStepfn="nextStep"
              :validator="$v.formOne"
            />
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-show="step === 2" class="step">
            <FormStep2Vue
              v-model="formTwo"
              :nextStepfn="nextStep"
              :backStepfn="backStep"
              :validator="$v.formTwo"
            />
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-show="step === 3" class="step">
            <FormStep3Vue
              v-model="formThree"
              :backStepfn="backStep"
              :submitFormfn="submitForm"
              :validator="$v.formThree"
            />
          </div>
        </transition>
      </div>
      <b-list-group v-if="userData && step === 1">
        <b-list-group-item>Your data</b-list-group-item>
        <b-list-group-item v-for="(value, name) in userData" :key="name"
          >{{ name }} : {{ value }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </div>
</template>

<script>
// import { required, minLength, between } from 'vuelidate/lib/validators'
import {
  required,
  maxLength,
  minLength,
  email,
  helpers,
  sameAs,
} from "vuelidate/lib/validators";
import FormStep1Vue from "./FormStep1.vue";
import FormStep2Vue from "./FormStep2.vue";
import FormStep3Vue from "./FormStep3.vue";
import ProgressStepVue from "./ProgressStep.vue";
const alpha = helpers.regex(
  "alpha",
  /^[a-zA-Zа-яёА-ЯЁА-Яа-щА-ЩЬьЮюЯяЇїІіЄєҐґ]*$/
);
export default {
  name: "MultiStepFormVue",
  components: {
    FormStep1Vue,
    FormStep2Vue,
    FormStep3Vue,
    ProgressStepVue,
  },
  data() {
    return {
      step: 1,
      currentProgress: 1,
      forms: { formOne: 1, formTwo: 2, formThree: 3 },
      formOne: { firstname: "", lastname: "", email: "" },
      formTwo: { password: "", confirmPassword: "" },
      formThree: { country: "", city: "" },
      userData: null,
    };
  },

  validations: {
    formOne: {
      firstname: { required, maxLength: maxLength(50), alpha },
      lastname: { required, maxLength: maxLength(50), alpha },
      email: { required, email },
    },
    formTwo: {
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAs: sameAs("password") },
    },
    formThree: {
      country: { required, alpha, maxLength: maxLength(35) },
      city: { required, alpha, maxLength: maxLength(35) },
    },
  },
  methods: {
    nextStep() {
      if (this.step >= 1 && this.step <= 3) {
        this.step++;
      }
      if (this.step > this.currentProgress) {
        return (this.currentProgress = this.step);
      }
    },
    backStep() {
      if (this.step >= 1 && this.step <= 3) {
        this.step--;
      }
    },

    progressStep(nextStep) {
      if (nextStep <= this.currentProgress && nextStep > 0) {
        this.step = nextStep;
      }
    },
    formReset() {
      this.currentProgress = 1;
      this.formOne.firstname = "";
      this.formOne.lastname = "";
      this.formOne.email = "";
      this.formTwo.password = "";
      this.formTwo.confirmPassword = "";
      this.formThree.country = "";
      this.formThree.city = "";
      this.$v.$reset(); //validation reset
    },
    submitForm() {
      this.step = 1;
      this.userData = {
        Firstname: this.formOne.firstname,
        Lastname: this.formOne.lastname,
        Email: this.formOne.email,
        Password: this.formTwo.password,
        Country: this.formThree.country,
        City: this.formThree.city,
      };
      this.formReset();
      return this.userData;
    },
  },
};
</script>

<style lang="scss">
.row-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;	
}
.multi-form-wrapper {
  background: rgb(190, 191, 194);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.red-invalid {
  background: rgba(122, 16, 16, 0.089) !important;
}
.green-valid {
  background: rgba(96, 168, 62, 0.205) !important;
}

.balloon {
  display: inline-block;
  width: 100%;
  padding: 10px 0 10px 15px;
  font-family: "Open Sans", sans;
  font-weight: 400;
  color: #377d6a;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 60px;
  transition: all 0.3s ease-in-out;
}

.balloon.wide {
  text-indent: 200px;
}

.balloon::-webkit-input-placeholder {
  color: #efefef;
  text-indent: 0;
  font-weight: 300;
}

.balloon + label {
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 0;
  bottom: 8px;
  padding: 5px 10px;
  color: #032429;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0);
  transition: all 0.3s ease-in-out;
  border-radius: 3px;
  background: rgba(122, 184, 147, 0);
}

.balloon + label:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  margin-left: -3px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid rgba(122, 184, 147, 0);
  transition: all 0.3s ease-in-out;
}

.balloon:focus,
.balloon:active {
  color: #377d6a;
  text-indent: 0 !important;
  background: #fff;
}

.balloon:focus::-webkit-input-placeholder,
.balloon:active::-webkit-input-placeholder {
  color: #aaa;
}

.balloon:focus + label,
.balloon:active + label {
  color: #fff;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  background: #7ab893;
  transform: translateY(-40px);
  padding-bottom: 20px;
}

.balloon:focus + label:after,
.balloon:active + label:after {
  border-top: 4px solid #7ab893;
}

.inputblock span {
  width: 100%;
  position: relative;
  display: inline-block;
  margin: 10px 0;
}
</style>




