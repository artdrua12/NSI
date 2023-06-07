<template>
  <v-card class="ma-5">
    <v-card-title>Создание/Редактирование справочника</v-card-title>
    <v-form ref="form" class="directory">
      <v-text-field
        v-if="selected[0]"
        v-model="selected[0].name"
        :counter="100"
        label="Наименование"
        filled
        class="fullWidth"
      ></v-text-field>

      <v-select
        v-if="selected[0]"
        v-model="selected[0].type"
        :items="typesNSI"
        filled
        label="Тип справочника"
        menu-props="auto"
      ></v-select>

      <v-text-field
        v-if="selected[0]"
        v-model="selected[0].code"
        :counter="30"
        label="Код"
        filled
      ></v-text-field>

      <v-menu
        v-if="selected[0]"
        v-model="menuStart"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selected[0].dataStart"
            label="Дата начала действия"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="selected[0].dataStart"
          locale="ru-ru"
          first-day-of-week="1"
          @input="menuStart = false"
          color="orange"
        ></v-date-picker>
      </v-menu>

      <v-menu
        v-if="selected[0]"
        v-model="menuEnd"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selected[0].dataEnd"
            label="Дата окончания действия"
            icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="selected[0].dataEnd"
          @input="menuEnd = false"
          locale="ru-ru"
          first-day-of-week="1"
        ></v-date-picker>
      </v-menu>
      <h3 v-else class="fullWidth pb-5">
        Страница была перезагружена. Данные не подрузились, нажмите закрыть !
      </h3>
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
      typesNSI: ["Пользовательский", "Технологический", "Защищенный"],
      menuStart: false,
      menuEnd: false,
    };
  },

  computed: {
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.$store.commit("set", { name: "selected", value: value });
      },
    },
  },
  methods: {
    close() {
      this.$router.go(-1);
      this.$store.commit("set", {
        name: "message",
        value: {
          color: "green",
          text: "Данные успешно обновлены",
          run: true,
        },
      });
    },
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