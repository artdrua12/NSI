<template>
  <div>
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
      class="elevation-1"
    >
      <template v-slot:top>
        <v-row align="center">
          <v-col cols="3">
            <v-select
              :items="items"
              label="Выбор действия"
              solo
              :menu-props="{ with: 200 }"
            ></v-select>
          </v-col>
          <v-col cols="6"> </v-col>

          <v-col cols="3">
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
              full-width="false"
            ></v-select>
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </div>
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
      items: [
        { text: "Создать справочник", disabled: false },
        { text: "Просмотреть справочник", disabled: true },
        { text: "Редактировать паспорт/структуру справочника", disabled: true },
        { text: "Просмотр свойст справочника", disabled: true },
        { text: "Архивировать", disabled: true },
        { text: "Удалить", disabled: true },
        { text: "Загрузить JSON/CSV/XML", disabled: false },
        { text: "Загрузить JSON/CSV/XML через API", disabled: false },
        { text: "Выгрузить реестр НСИ", disabled: false },
        { text: "Выгрузить справочник", disabled: false },
      ],
      selected: [],
      inisializeHeaders: [
        {
          text: "Код справочника",
          value: "code",
        },
        { text: "Тип справочника", value: "type" },
        { text: "Наименование справочника", value: "name" },
      ],
      headers: [],
      dataTable: [
        {
          code: 123,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 321,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 345,
          type: "Защищенный",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 678,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 910,
          type: "Технологический",
          name: "Справочник2",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 1234,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 3210,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 3445,
          type: "Защищенный",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 6786,
          type: "Пользовательский",
          name: "Справочник",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
        {
          code: 9170,
          type: "Технологический",
          name: "Справочник2",
          dataStart: "24.06.2009",
          dataEnd: "24.06.2009",
        },
      ],
    };
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
  },
};
</script>

<style scoped>

</style>