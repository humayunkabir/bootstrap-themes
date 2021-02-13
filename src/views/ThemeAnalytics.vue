<template>
  <v-container class="black cyan--text font-weight-bold rounded">
    <pre v-if="themes">{{ JSON.stringify(themes, null, 2) }}</pre>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["loading", "themes"]),
};
</script>