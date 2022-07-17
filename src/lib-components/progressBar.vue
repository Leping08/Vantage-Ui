<template>
  <div :class="`w-full bg-${barColor}-200 ${barRounded} h-${height}`">
    <div
      :style="`width: ${percent}%`"
      :class="`bg-${barColor}-600 ${barRounded} h-${height} transition-all duration-1000 ease-in-out`"
    ></div>
  </div>
</template>

<script>
import theme from "./theme";
export default {
  name: "Progress Bar",
  props: {
    percent: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    rounded: {
      type: String,
      required: false,
    },
    height: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  computed: {
    barColor() {
      return this.color || theme.color;
    },
    barRounded() {
      return this.rounded || theme.rounded;
    },
  },
};
</script>
