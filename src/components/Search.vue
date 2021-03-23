<template>
  <v-form @submit.prevent="submit" ref="filterFormRef">
    <v-text-field
      type="number"
      v-model="days"
      placeholder="Days (min: 7, max: 365)"
      clearable
      :rules="[rules.required, rules.min, rules.max]"
      rounded
      dense
      flat
      hide-details
      solo-inverted
    />
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      days: null,
      rules: {
        required: (value) => !!value || "Value is required",
        min: (value) => value >= 7 || "Minimum value is 7",
        max: (value) => value <= 365 || "Maximum value is 365",
      },
    };
  },

  methods: {
    submit() {
      const isValid = this.$refs.filterFormRef.validate();
      console.log({ isValid });
      if (isValid) {
        this.getThemes({ limit: this.days });
      }
    },
    ...mapActions(["getThemes"]),
  },
};
</script>