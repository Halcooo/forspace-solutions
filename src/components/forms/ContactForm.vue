@author Halid Lihovac
<template lang="">
  <div class="container col-6">
    <form>
      <h3 class="mt-4" >Pošaljite nam poruku</h3>
      <div class="form-group m-4">
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
      <div class="form-group m-4" >
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
      <div class="form-group m-4" >
        <label for="">Your Message:</label>
        <textarea
          @input="validateMessage"
          class="form-control"
          rows="5"
          v-model="message"
        ></textarea>
        <div class="warning" v-if="messageInvalid">
          Molimo unesite poruku.
          <div class="sec"></div>
        </div>
      </div>
      <div class="col-auto">
        <!--  button srediti kao na početnoj što će biti!!!!!!!!!!! to uraditi nakon što je navbar mergan u development!!!! -->
        <button
       
          type="submit"
          @click.prevent="submitForm"
          class="btn btn-primary mb-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
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
@keyframes sec {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
.sec::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: 0px;
  content: "";
  background: #f16822;
  animation: sec 1500ms 1;
}

.form-control {
  box-shadow: none;
}
@media only screen and (max-width: 1050px) {
  .col-6 {
    width: 95%;
  }
}
.warning {
  color: #f16822;
  font-size: small;
}
input {
  &:focus {
    border: none;
    border: 1px solid #f16822;
  }
}
textarea:focus {
  border: 1px solid #f16822;
}
label {
  float: left;
}
</style>
