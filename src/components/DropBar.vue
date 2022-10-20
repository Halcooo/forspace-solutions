<template>
  <select class="decorated" v-model="selected" @change="translatePage">
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

select {
  margin-right: 2vw;
  outline: 0;
  border: 0;
  box-shadow: none;
  padding: 0 1em;
  color:#25435b;
  background-color: rgba(248, 248, 255, 0.75);
  cursor: pointer;
  font-size: large;
  border-radius: 3px;
}
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
   &:focus{
    border:none;
   }
}
.select::after {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  background-color: #34495e;
  transition: 0.5s all ease;
  pointer-events: none;
}
select:hover {
       background-color: rgba(248, 248, 255, 0.75);
    }



</style>
