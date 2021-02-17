<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="primary darken-4">
      <v-list shaped dark>
        <v-subheader class="font-weight-bold">Bootstrap Themes</v-subheader>
        <v-list-item-group color="white">
          <v-list-item v-for="(nav, i) in navs" :key="i" :to="nav.path">
            <v-list-item-icon>
              <v-icon v-text="nav.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="nav.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold" v-if="!drawer">Bootstrap Themes</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    navs: [
      { text: "Themes", icon: "mdi-clock", path: "/" },
      { text: "Analytics", icon: "mdi-chart-line", path: "/analytics" },
    ],
  }),
};
</script>