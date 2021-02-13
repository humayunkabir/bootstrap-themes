<template>
  <v-container v-if="theme">
    <v-row justify="center">
      <v-col cols="5">
        <v-card>
          <v-img :src="theme.thumb" />
          <v-card-title>
            {{ theme.title }}
          </v-card-title>
          <v-card-text>
            <ul>
              <li>
                Bootstrap:
                <v-chip color="primary" class="font-weight-bold" dark x-small>{{
                  theme.bootstrap
                }}</v-chip>
              </li>
              <li>Category: {{ theme.category }}</li>
              <li>Purchases: {{ theme.purchases }}</li>
              <li>Rank: {{ theme.rank }}</li>
              <li>Released: {{ theme.released }}</li>
              <li>Reviews: {{ theme.reviews }}</li>
              <li>
                Version:
                <v-chip color="primary" class="font-weight-bold" dark x-small>{{
                  theme.version
                }}</v-chip>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      theme: null,
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/themes/${this.id}`)
      .then((response) => {
        console.log(response);
        this.theme = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
