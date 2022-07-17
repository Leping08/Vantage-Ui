<template>
  <span :class="`flex h-${size} w-${size}`">
    <span
      :class="`animate-ping absolute inline-flex h-${size} w-${size} rounded-full bg-${pingColor}-400 opacity-75`"
    ></span>
    <span
      :class="`relative inline-flex rounded-full h-${size} w-${size} bg-${pingColor}-500`"
    ></span>
  </span>
</template>

<script>
import theme from "./theme";
export default {
  name: "Ping",
  props: {
    size: {
      type: Number,
      required: false,
      default: 3,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    pingColor() {
      return this.color || theme.color;
    },
  },
};
</script>
