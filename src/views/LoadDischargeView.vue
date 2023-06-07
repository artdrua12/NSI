<template>
  <v-card class="ma-5">
    <v-card-title>Загрузка справочника</v-card-title>
    <v-form ref="form" class="directory">
      <v-text-field
        :counter="100"
        label="Пример поля для Загрузки/Выгрузки"
        filled
        class="fullWidth"
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-btn
        depressed
        width="220"
        color="primary"
        @click="$router.go(-1)"
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
    return {};
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