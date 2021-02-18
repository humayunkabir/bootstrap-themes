<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      color="purple darken-4"
      app
    >
      <v-list shaped dark>
        <v-row align="center" no-gutters class="mb-2">
          <v-col cols="auto">
            <v-img
              src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png"
              width="40"
            />
          </v-col>
          <v-col>
            <v-subheader class="font-weight-bold white--text">
              Bootstrap Themes
            </v-subheader>
          </v-col>
        </v-row>
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
    <v-app-bar app color="purple darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-row align="center" no-gutters v-if="!drawer">
        <v-col cols="auto">
          <v-img
            src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png"
            width="40"
            class="mr-2"
          />
        </v-col>
        <v-col>
          <v-toolbar-title class="font-weight-bold">
            Bootstrap Themes
          </v-toolbar-title>
        </v-col>
      </v-row>
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
    mini: true,
    navs: [
      { text: "Themes", icon: "mdi-clock", path: "/" },
      { text: "Analytics", icon: "mdi-chart-line", path: "/analytics" },
    ],
  }),
};
</script>