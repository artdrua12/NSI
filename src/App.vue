<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span>VUE +</span>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-snackbar
      v-model="snackbar.run"
      :color="snackbar.color"
      :timeout="2000"
      right="right"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar.run = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.get("message");
      },
      set() {
        this.$store.commit("setMessange", { color: "", text: "", run: false });
      },
    },
  },
};
</script>

<style>
.fullWidth {
  grid-column: 1/-1;
}
.jSelfEnd {
  justify-self: end;
}
</style>
