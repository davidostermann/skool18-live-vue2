<template>
  <div>
    <svg
      v-for="(color, index) in colors"
      :key="index"
      xmlns="http://www.w3.org/2000/svg"
      width="110"
    >
      <path :fill="color" d="M1,44h107l-87,63 33-102 33,102z" />
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import { Rating } from "../types";
export default defineComponent({
  props: {
    rating: Number // can not type this more
  },
  setup(props: { rating: Rating }) {
    const colors = computed(() => {
      const colors = [];
      let i = 0;
      while (i++ < 5) {
        colors.push(i < props.rating ? "yellow" : "grey");
      }
      return colors.map((c, i) => {
        return i < props.rating ? "yellow" : "grey";
      });
    });
    return { colors };
  }
});
</script>

<style></style>
