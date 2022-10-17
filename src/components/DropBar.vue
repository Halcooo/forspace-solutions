<template>
  <select name="Any" id="any" v-model="selected" @change="translatePage">
    <option v-for="lang in fetchDropData" :value="lang.abr">
      {{ lang.langauge }}
    </option>
  </select>
</template>

<script>
export default {
  name: "DropBar",
  data() {
    return {
      selected: "bs",
      languages: [
        { langauge: "English", abr: "en" },
        { langauge: "Bosanski", abr: "bs" },
        { langauge: "Njemački", abr: "de" },
      ],
    };
  },
  computed: {
    fetchDropData() {
      return this.languages;
    },
  },
  methods: {
    translatePage() {
      return (this.$i18n.locale = this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  --background-gradient: linear-gradient(30deg, #f39c12 30%, #f1c40f);
  --gray: #34495e;
  --darkgray: #2c3e50;
}

select {
  outline: 0;
  border: 0;
  box-shadow: none;
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background-color: #162250;
  background-image: none;
  cursor: pointer;
  font-size: large;
}
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
}
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  background-color: #34495e;
  transition: 0.25s all ease;
  pointer-events: none;
}
</style>
