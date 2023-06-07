<template>
  <v-card>
    <v-card-title>Реестр справочников</v-card-title>
    <v-form ref="form" class="directory">
      <v-select
        :items="typesNSI"
        filled
        label="Тип справочника"
        menu-props="auto"
      ></v-select>

      <v-text-field
        v-model="name"
        :counter="100"
        label="Наименование"
        filled
      ></v-text-field>

      <v-text-field
        v-model="code"
        :counter="30"
        label="Код"
        filled
      ></v-text-field>

      <v-select
        :items="items"
        filled
        label="Статус на текущую дату"
        menu-props="auto"
        hide-details=""
      ></v-select>
      <v-btn text width="220" @click="reset">Очистить форму</v-btn>
      <v-btn width="120" class="jSelfEnd"
        ><v-icon>mdi-magnify</v-icon>Поиск</v-btn
      >
    </v-form>
    <table-component class="fullWidth" />
  </v-card>
</template>

<script>
import TableComponent from "../components/TableComponent";

export default {
  name: "HomeViews",
  data() {
    return {
      typesNSI: ["Пользовательский", "Технологический", "Защищенный"],
      name: "",
      code: "",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
  components: {
    TableComponent,
  },
};
</script>

<style scoped>
.directory {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 30px;
  padding: 20px;
}
</style>
