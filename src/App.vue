

<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn-icons-png.flaticon.com/512/2642/2642978.png"
          transition="scale-transition"
          width="40"
        />

      <p class="titulo"> Github Vuewer </p>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/marcelavie"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <GithubVuewer/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVuewer from './components/GithubVuewer';
export default {
  name: 'App',
  components: {
    GithubVuewer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.titulo{

  font-weight: bold;
}
</style>