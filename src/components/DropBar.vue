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
select {
}
</style>
