<template>
  <v-card class="ma-5">
    <v-card-title>Создание/Редактирование справочника</v-card-title>
    <v-form ref="form" class="directory">
      <v-text-field
        v-model="nsi.name"
        :counter="100"
        label="Наименование"
        filled
        class="fullWidth"
      ></v-text-field>

      <v-select
        v-model="nsi.type"
        :items="typesNSI"
        filled
        label="Тип справочника"
        menu-props="auto"
      ></v-select>

      <v-text-field
        v-model="nsi.code"
        :counter="30"
        label="Код"
        filled
      ></v-text-field>

      <v-menu
        v-model="menuStart"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateStart"
            label="Дата начала действия"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateStart"
          locale="ru-ru"
          first-day-of-week="1"
          @input="menuStart = false"
          color="orange"
        ></v-date-picker>
      </v-menu>

      <v-menu
        v-model="menuEnd"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateEnd"
            label="Дата окончания действия"
            icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateEnd"
          @input="menuEnd = false"
          locale="ru-ru"
          first-day-of-week="1"
        ></v-date-picker>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        width="220"
        color="primary"
        @click="close"
        class="jSelfEnd"
        >Закрыть</v-btn
      >
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "CreateComponent",
  data() {
    return {
      nsi: {},
      typesNSI: ["Пользовательский", "Технологический", "Защищенный"],
      dateStart: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menuStart: false,
      dateEnd: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menuEnd: false,
    };
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.nsi = this.$route.query.nsi;
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