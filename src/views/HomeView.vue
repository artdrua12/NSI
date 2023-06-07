<template>
  <v-card class="pa-5">
    <v-card-title>Реестр справочников</v-card-title>
    <v-form ref="form" class="directory">
      <v-select
        v-model="type"
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
      ></v-select>
      <v-btn text width="220" @click="reset">Очистить форму</v-btn>
      <v-btn width="120" class="jSelfEnd" @click="find"
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
      name: "",
      code: "",
      type: "",
      typesNSI: ["Пользовательский", "Технологический", "Защищенный"],
      items: ["активен", "не активен"],
    };
  },
  computed: {
    dataTable() {
      return this.$store.getters.findDataTable;
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.find();

      this.$store.commit("set", {
        name: "message",
        value: {
          color: "orange darken-2",
          text: "Фильтры поиска сброшены",
          run: true,
        },
      });
    },

    find() {
      this.$store.commit("set", {
        name: "type",
        value: this.type,
      });

      this.$store.commit("set", {
        name: "code",
        value: this.code,
      });

      this.$store.commit("set", {
        name: "name",
        value: this.name,
      });

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
