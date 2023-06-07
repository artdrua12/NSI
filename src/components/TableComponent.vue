<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="dataTable"
    :footer-props="{
      'items-per-page-options': [4, 7, 10, 20, -1],
    }"
    :items-per-page="itemsPerPage"
    item-key="code"
    show-select
    class="elevation-3 px-5 mt-10 ma-5"
  >
    <template v-slot:top>
      <v-row align="center">
        <v-col cols="3">
          <v-select
            v-model="selectedAction"
            @change="changeAction"
            :disabled="selected.length != 1"
            :items="actions"
            label="Выбор действия"
            item-text="text"
            item-value="text"
            return-object
            outlined
          >
          </v-select>
        </v-col>
        <v-col cols="4"> </v-col>

        <v-col cols="5">
          <v-select
            v-model="selectSetingTable"
            :items="setingTable"
            label="Настройки таблицы"
            item-text="text"
            item-value="value"
            return-object
            multiple
            chips
            solo
          ></v-select>
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Table-component",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      selectSetingTable: [],
      setingTable: [
        { text: "Дата начала действия", value: "dataStart" },
        { text: "Дата окончания действия", value: "dataEnd" },
      ],
      selectedAction: {},
      actions: [
        { text: "Создать справочник", disabled: false },
        {
          text: "Просмотреть справочник",
          value: "Просмотреть справочник",
          disabled: true,
        },
        {
          text: "Редактировать паспорт/структуру справочника",
          disabled: true,
        },
        { text: "Просмотр свойст справочника", disabled: true },
        { text: "Архивировать", disabled: true },
        { text: "Удалить", disabled: true },
        { text: "Загрузить JSON/CSV/XML", disabled: false },
        { text: "Загрузить JSON/CSV/XML через API", disabled: false },
        { text: "Выгрузить реестр НСИ", disabled: false },
        { text: "Выгрузить справочник", disabled: false },
      ],
      // selected: [],
      inisializeHeaders: [
        {
          text: "Код справочника",
          value: "code",
        },
        { text: "Тип справочника", value: "type" },
        { text: "Наименование справочника", value: "name" },
      ],
      headers: [],
    };
  },
  computed: {
    dataTable() {
      return this.$store.getters.findDataTable;
    },
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.$store.commit("set", { name: "selected", value: value });
      },
    },
  },
  mounted() {
    this.updateHeaders();
  },
  watch: {
    selectSetingTable() {
      this.updateHeaders();
    },
  },
  methods: {
    updateHeaders() {
      this.headers = [...this.inisializeHeaders, ...this.selectSetingTable];
    },
    changeAction() {
      if (this.selectedAction.text == "Создать справочник") {
        this.$router.push("/create");
      } else {
        this.$router.push("/loadDischarge");
      }
    },
  },
};
</script>

<style scoped>
</style>