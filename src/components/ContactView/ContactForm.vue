@author Halid Lihovac
<template>
  <div class="form-div">
    <div class="mt-5 mb-5" data-aos="fade" data-aos-duration="1000">
      <h3>{{ $t("find_us_on_map") }}</h3>
    </div>
    <h3>{{ $t("contact_header") }}</h3>
    <form ref="form">
      <div class="form-group">
        <div class="form-group-flex">
          <div class="flex-item">
            <label for="name" :class="{ active: activeName }">{{
              $t("contact_form_name")
            }}</label>
            <input
              @input="validateName"
              @click="nameActive"
              @focusout="nameFocusOut"
              type="text"
              v-model="name"
              id="name"
              class="form-control-custom"
              name="from_name"
            />
            <div class="form-group-flex">
              <div class="flex-item">
                <div class="warning" v-if="nameInvalid">
                  <small style="color: orangered">{{
                    $t("contact_form_nameInvalid")
                  }}</small>
                </div>
              </div>
            </div>
            <div class="flex-item">
              <label for="email" :class="{ active: activeEmail }">{{
                $t("contact_form_email")
              }}</label>
              <input
                @input="validateEmail"
                @click="emailActive"
                @focusout="emailFocusOut"
                type="email"
                v-model="email"
                id="email"
                class="form-control-custom"
                name="from_email"
              />
              <div class="flex-item">
                <div class="warning" v-if="emailInvalid">
                  <small style="color: orangered">{{
                    $t("contact_form_emailInvalid")
                  }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="text" :class="{ active: activeMessage }">{{
          $t("contact_form_text")
        }}</label>
        <textarea
          @input="validateMessage"
          @click="messageActive"
          @focusout="messageFocusOut"
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
      <div class="form-group d-flex gap-3 submit">
        <button class="read-more" type="submit" @click.prevent="submitForm">
          {{ $t("submit") }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import BaseButton from "../Forms/buttons/BaseButton.vue";
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  components: { BaseButton },
  data() {
    return {
      routes: { route: "form", name: "form" },
      activeName: false,
      activeEmail: false,
      activeMessage: false,
      email: "",
      name: "",
      message: "",
      emailInvalid: false,
      nameInvalid: false,
      messageInvalid: false,
    };
  },
  methods: {
    messageFocusOut() {
      this.message.length > 0
        ? (this.activeMessage = true)
        : (this.activeMessage = false);
    },
    messageActive() {
      this.activeMessage = true;
    },
    emailFocusOut() {
      this.email.length > 0
        ? (this.activeEmail = true)
        : (this.activeEmail = false);
    },
    emailActive() {
      this.activeEmail = true;
    },
    nameActive() {
      this.activeName = true;
    },
    nameFocusOut() {
      this.name.length > 0
        ? (this.activeName = true)
        : (this.activeName = false);
    },
    submitForm(event) {
      this.validateMessage();
      this.validateName();
      this.validateEmail();
      if (!this.emailInvalid && !this.nameInvalid && !this.messageInvalid) {
        this.sendEmail();
      } else {
        this.$toast.error(this.$t("fill_the_form"));
      }
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_59dlwku",
          "template_8x1dw07",
          this.$refs.form,
          "bS_JQ-oO8aZ_UBccV"
        )
        .then(
          (result) => {
            console.log("poslali smo mail", result);
            this.$toast.success(this.$t("email_sent"));
            (this.email = ""), (this.name = ""), (this.message = "");
          },
          (error) => {
            console.log("error", error);
            alert(error);
            this.$toast.error(this.$t("error"));
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
.read-more {
  position: relative;
  transition: all 0.5s;
  padding: 12px 40px;
  color: rgb(2, 2, 2);
  border: 1px solid rgb(0, 0, 0);
}
.read-more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.141);
  transition: all 0.3s;
}
.read-more:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.763);
  transform: scale(1.2, 1.2);
}
.read-more:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
.submit {
  flex-direction: row-reverse;
}
h2 {
  text-align: center;
}
.map-wrapper {
  padding: 0px;
  margin: 0px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.form-div {
  width: 50%;

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
      transform: translate(0px, -13px) scale(0.8);
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
        margin: 15px 0px 10px 0px;
      }
    }
    label {
      transform: translate(6px, 27px);
    }
    .active {
      transform: translate(0px, -11px) scale(0.8) !important;
    }
  }
}
</style>
