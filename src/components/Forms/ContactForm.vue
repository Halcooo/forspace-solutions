@author Halid Lihovac
<template>
  <div class="form-div">
    <h3 class="">Pošaljite nam poruku</h3>
    <form>
      <div class="form-group">
        <div class="form-group-flex">
          <div class="flex-item">
            <label for="name" :class="{ active: active_name }">Vaše ime</label>
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
            />
          </div>
          <div class="flex-item">
            <label for="email" :class="{ active: active_email }"
              >Vaš email</label
            >
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
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-flex">
          <div class="flex-item">
            <div class="warning" v-if="nameInvalid">
              <small style="color: orangered">Molimo unesite Vase ime</small>
            </div>
          </div>
          <div class="flex-item">
            <div class="warning" v-if="emailInvalid">
              <small style="color: orangered">Molimo unesite Vas email</small>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="text" :class="{ active: active_text }">Text poruke</label>
        <textarea
          @input="validateMessage"
          @click="
            () => {
              this.active_text = true;
            }
          "
          @focusout="
            () => {
              this.active_text = false;
            }
          "
          name=""
          id="text"
          cols="30"
          rows="6"
          v-model="message"
          class="form-control-custom"
        ></textarea>
        <div class="warning" v-if="messageInvalid">
          <small style="color: orangered">Molimo unesite poruku</small>
        </div>
      </div>
      <div class="form-group">
        <BaseButton :to="routes.route" :name="routes.name" />
      </div>
    </form>
  </div>
  <!-- <div class="top">
    <form>
      <h3 class="">Pošaljite nam poruku</h3>
      <div class="form-group">
        <label for="name">Your name:</label>
        <input
          @input="validateName"
          class="form-control"
          type="text"
          v-model="name"
        />
        <div class="warning" v-if="nameInvalid">
          Molimo unesite vaše ime.
          <div class="sec"></div>
        </div>
      </div>
      <div class="form-group">
        <label>Your e-mail:</label>
        <input
          @input="validateEmail"
          class="form-control"
          type="email"
          v-model="email"
          reqired
        />
        <div class="warning" v-if="emailInvalid">
          Molimo unesite validan email.
          <div class="sec"></div>
        </div>
      </div>
      <div class="form-group">
        <label for="">Your Message:</label>
        <textarea
          @input="validateMessage"
          class="form-control"
          v-model="message"
        ></textarea>
      </div>
      <div class="warning" v-if="messageInvalid">
        Molimo unesite poruku.
        <div class="sec"></div>
      </div>
      <div class="col-auto">
        <BaseButton :to="routes.route" :name="routes.name" />
      </div>
    </form>
  </div> -->
</template>
<script>
import BaseButton from "./buttons/BaseButton.vue";
export default {
  name: "ContactForm",
  components: { BaseButton },
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
      this.validateMessage();
      this.validateName();
      this.validateEmail();
      console.log(event.target, this.name, this.email, this.message);
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
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
.form-div {
  width: 50%;
  margin: auto;
  padding: 25px;
  label {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0% 100%;
    color: #9e9e9e;
    transform: translate(5px, 22px);

    transition: transform 0.2s ease-out, color 0.2s ease-out;
  }
  h3 {
    margin-bottom: 5%;
  }
  .form-group {
    width: 100%;
    position: relative;
    margin-top: 16px;
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
      background: rgba(247, 247, 247, 0.552);
      width: 100%;
      margin: 10px 0px 20px 0px;
      padding: 10px 2px;
      border: none;
      border-bottom: 2px solid rgb(189, 189, 189);
    }

    input,
    textarea {
      &:focus {
        outline: none;
        border-bottom: 2px solid $lightgreen;
      }
    }

    .active {
      transform: translate(0px, -22px) scale(0.8);
      color: $lightgreen;
      transition: transform 0.2s ease-out, color 0.2s ease-out;
    }
  }
}
// @keyframes sec {
//   from {
//     width: 0;
//   }

//   to {
//     width: 100%;
//   }
// }

// .top {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
// }

// form {
//   width: 50%;

//   margin: auto;
//   padding: 20px;
// }
// .sec::after {
//   position: absolute;
//   top: 10%;
//   left: 50%;
//   transform: translateX(-50%);
//   height: 2px;
//   width: 0px;
//   content: "";
//   background: #f16822;
//   animation: sec 1500ms 1;
// }

// .form-control {
//   box-shadow: none;
// }
// // @media only screen and (max-width: 1050px) {
// //   .col-6 {
// //     width: 95%;
// //   }
// // }
// .warning {
//   color: #f16822;
//   font-size: small;
// }
// input {
//   &:focus {
//     border: none;
//     border: 1px solid #f16822;
//   }
// }
// textarea:focus {
//   border: 1px solid #f16822;
// }
// label {
//   float: left;
// }
</style>
