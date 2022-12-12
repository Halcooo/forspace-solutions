@author Halid Lihovac
<template>
  <div class="form-div">
    <h3>{{ $t("contact_header") }}</h3>

    <form ref="form">
      <div class="form-group">
        <div class="form-group-flex">
          <div class="flex-item">
            <label for="name" :class="{ active: active_name }">{{
              $t("contact_form_name")
            }}</label>
            <input
              @input="validateName"
              @click="
                () => {
                  this.active_name = true;
                }
              "
              @focusout="
                () => {
                  if (this.name.length > 0) {
                    this.active_name = true;
                  } else {
                    this.active_name = false;
                  }
                }
              "
              type="text"
              v-model="name"
              id="name"
              class="form-control-custom"
              name="from_name"
            />
          </div>
          <div class="flex-item">
            <label for="email" :class="{ active: active_email }">{{
              $t("contact_form_email")
            }}</label>
            <input
              @input="validateEmail"
              @click="
                () => {
                  this.active_email = true;
                }
              "
              @focusout="
                () => {
                  if (this.email.length > 0) {
                    this.active_email = true;
                  } else {
                    this.active_email = false;
                  }
                }
              "
              type="email"
              v-model="email"
              id="email"
              class="form-control-custom"
              name="from_email"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-flex">
          <div class="flex-item">
            <div class="warning" v-if="nameInvalid">
              <small style="color: orangered">{{
                $t("contact_form_nameInvalid")
              }}</small>
            </div>
          </div>
          <div class="flex-item">
            <div class="warning" v-if="emailInvalid">
              <small style="color: orangered">{{
                $t("contact_form_emailInvalid")
              }}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="text" :class="{ active: active_text }">{{
          $t("contact_form_text")
        }}</label>
        <textarea
          @input="validateMessage"
          @click="
            () => {
              this.active_text = true;
            }
          "
          @focusout="
            () => {
              if (this.message.length > 0) {
                this.active_text = true;
              } else {
                this.active_text = false;
              }
            }
          "
          name="user_message"
          id="text"
          cols="30"
          max-cols="50"
          rows="6"
          v-model="message"
          class="form-control-custom"
        ></textarea>
        <div class="warning" v-if="messageInvalid">
          <small style="color: orangered">{{
            $t("contact_form_messageInvalid")
          }}</small>
        </div>
      </div>
      <div class="form-group d-flex gap-3">
        <button type="submit"  @click.prevent="submitForm">{{ $t('submit')}}</button>
        <!-- <BaseButton :to="routes.route" :name="routes.name" /> -->
        <button type="button" @click="showMap()">
          {{ $t("contact_form_google_map") }}
        </button>
      </div>
    </form>
    <TheLocationMap :showMap="showMap" />
  </div>
</template>
<script>
import BaseButton from "../Forms/buttons/BaseButton.vue";
import TheLocationMap from "../TheLocationMap.vue";
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  components: { BaseButton, TheLocationMap },
  data() {
    return {
      routes: { route: "form", name: "form" },
      active_name: false,
      active_email: false,
      active_text: false,
      email: "",
      name: "",
      message: "",
      emailInvalid: false,
      nameInvalid: false,
      messageInvalid: false,
    };
  },
  methods: {
    submitForm(event) {
    console.log(this.$refs.form);  
      this.validateMessage();
      this.validateName();
      this.validateEmail();
      if(!this.emailInvalid && !this.nameInvalid && !this.messageInvalid){
        this.sendEmail();
       }
       else{
        console.log('Email data not ok');
       }
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_59dlwku",
          "template_8x1dw07",
          this.$refs.form,
          "bS_JQ-oO8aZ_UBccV",
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert('poslali smo mail');
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    validateName() {
      this.name.trim() === ""
        ? (this.nameInvalid = true)
        : (this.nameInvalid = false);

      this.active_name = true;
    },
    validateEmail() {
      if (
        this.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
        this.email.trim() !== ""
      ) {
        this.emailInvalid = false;
      } else {
        this.emailInvalid = true;
      }
    },
    validateMessage() {
      this.message.trim() === ""
        ? (this.messageInvalid = true)
        : (this.messageInvalid = false);
    },
    showMap() {
      if (this.$store.getters.getMapState) {
        this.$store.commit("setMapState", false); // vuex store must be used like this with getters and mutations and separate modules!!
      } else {
        this.$store.commit("setMapState", true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
.form-div {
  width: 50%;
  height: 60vh;
  margin: auto;
  padding: 25px;
  form {
    margin-top: 5%;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0% 100%;
    color: darkgray;
    transform: translate(7px, 20px);
    transition: transform 0.2s ease-out, color 0.2s ease-out;
  }
  h3 {
    color: gray;
    border-radius: 5px;
  }
  .form-group {
    width: 100%;
    position: relative;
    margin-top: 10px;
    .form-group-flex {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
      .flex-item {
        position: relative;
        width: 100%;
      }
    }
    .form-control-custom {
      background: rgba(218, 215, 215, 0.552);
      width: 100%;
      margin: 10px 0px 20px 0px;
      padding: 10px 2px 10px 2px;
      border: none;
      border-radius: 2px;
    }

    input,
    textarea {
      &:focus {
        outline: none;
      }
    }

    .active {
      transform: translate(0px, -22px) scale(0.8);
      color: gray;
      transition: transform 0.2s ease-out, color 0.2s ease-out;
    }
  }

  @media screen and (max-width: 567px) {
    width: 100%;
    height: 100%;
    .form-group-flex {
      flex-direction: column;
    }
    .form-group {
      margin: 0;
      .form-control-custom {
        margin: 5px 0px 10px 0px;
      }
    }
    label {
      transform: translate(6px, 16px);
    }
  }
}
button {
  border: 2px solid rgba(8, 40, 67, 0.6);
  color: rgba(8, 40, 67, 0.6);
  background: transparent;
  padding: 20px 40px;

  transition: 0.3s ease-out;
  &:hover {
    background: white;
    color: rgb(0, 119, 128);
    border: 2px solid rgb(0, 119, 128);
  }
}
</style>
