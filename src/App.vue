<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-btn to="/" text>
          Themes
        </v-btn>
        <v-btn to="/analytics" text>
          <v-icon left>mdi-chart-line</v-icon>
          Analytics
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>