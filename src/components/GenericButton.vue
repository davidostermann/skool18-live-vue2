<template>
  <button :type="type" @click="send">{{ label }}</button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "click"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props, context) {
    const send = () => {
      context.emit("click");
    };
    return {
      send
    };
  }
});
</script>

<style scoped>
button {
  outline: none;
  padding: 1em;
  border: none;
  background-color: #41b883;
  color: #fafafa;
  font-family: "Century Gothic";
  font-weight: 700;
  cursor: pointer;
}
</style>
