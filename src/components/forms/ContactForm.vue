@author Halid Lihovac
<template lang="">
  <div class="container col-6">
    <form>
      <h3 class="mt-4">Pošaljite nam poruku</h3>
      <div class="form-group m-4">
        <label for="name">Your name:</label>
        <input
          @change="validateName"
          class="form-control"
          type="text"
          v-model="name"
        />
        <div class="warning" v-if="nameInvalid">Molimo unesite vaše ime.</div>
      </div>
      <div class="form-group m-4">
        <label>Your e-mail:</label>
        <input
          @change="validateEmail"
          class="form-control"
          type="email"
          v-model="email"
          reqired
        />
        <div class="warning" v-if="emailInvalid">
          Molimo unesite validan email.
        </div>
      </div>
      <div class="form-group m-4">
        <label for="">Your Message:</label>
        <textarea
          @change="validateMessage"
          class="form-control"
          rows="5"
          v-model="message"
        ></textarea>
        <div class="warning" v-if="messageInvalid">Molimo unesite poruku.</div>
      </div>
      <div class="col-auto">
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
      disabledSubmit: true,
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
.warning {
  color: red;
}
label {
  float: left;
}
</style>
