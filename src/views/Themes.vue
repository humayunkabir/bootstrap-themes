<template>
  <v-container>
    <v-progress-linear v-if="loading" indeterminate />
    <div class="overflow-x-auto">
      <v-data-table
        v-if="themes"
        :headers="[
          { text: 'Rank', align: 'start text-no-wrap', value: 'index' },
          { text: 'Title', sortable: false, value: 'title' },
          { text: `Last ${dayLimit} days`, align: 'center text-no-wrap', value: 'total' },
          ...Object.keys(themes[0].purchases)
            .filter((key) => key.includes('/'))
            .map((key) => ({
              text: key.slice(2).split('/').reverse().join('/'),
              align: 'center text-no-wrap',
              value: key,
            })),
          {
            text: 'Category',
            align: 'center text-no-wrap',
            value: 'category',
          },
          {
            text: 'Released',
            align: 'end text-no-wrap',
            sortable: false,
            value: 'released',
          },
        ]"
        :items="themes.map((t, i) => ({ ...t, ...t.purchases, index: i + 1 }))"
        :items-per-page="10"
        class="elevation-5"
      >
        <template v-slot:item.title="{ item }">
          <v-row align="center" class="flex-nowrap">
            <v-col cols="auto">
              <v-img :src="item.thumb" width="40" />
            </v-col>
            <v-col
              style="cursor: pointer"
              class="primary--text text-no-wrap"
              @click="$router.push(`themes/${item.themeId}`)"
            >
              {{ item.title }}
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["loading", "themes", "dayLimit"]),
};
</script>
