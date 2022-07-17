<template>
  <div class="bg-white overflow-hidden" :class="[statShadow, statRounded]">
    <div class="px-4 py-5 sm:p-6 w-full">
      <dl>
        <dt class="text-base leading-6 font-normal text-gray-900">
          {{ heading }}
        </dt>
        <dd class="mt-1 justify-between items-baseline md:block lg:flex">
          <div
            :class="`flex items-baseline text-2xl leading-8 font-semibold text-${statColor}-600`"
          >
            {{ firstMetric }}
            <span
              v-if="secondMetric"
              class="ml-2 text-sm leading-5 font-medium text-gray-500"
            >
              from {{ secondMetric }}
            </span>
          </div>
          <div class="" v-if="firstMetric && secondMetric">
            <div
              v-if="parseFloat(firstMetric) < parseFloat(secondMetric)"
              class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
            >
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only"> Decreased by </span>
              {{ percentChange }} %
            </div>
            <div
              v-if="parseFloat(firstMetric) > parseFloat(secondMetric)"
              class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
            >
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only"> Increased by </span>
              {{ percentChange }} %
            </div>
            <div
              v-if="parseFloat(firstMetric) === parseFloat(secondMetric)"
              class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800 md:mt-2 lg:mt-0"
            >
              <span class="sr-only"> No change </span>
              {{ percentChange }} %
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import theme from "./theme";
export default {
  name: "Stats",
  props: {
    heading: {
      type: String,
      required: true,
    },
    firstMetric: {
      type: Number,
      required: true,
    },
    secondMetric: {
      type: Number,
      required: false,
    },
    rounded: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    shadow: {
      type: String,
      required: false,
    },
  },
  computed: {
    percentChange() {
      return Math.abs(
        Math.round(
          (parseFloat(this.firstMetric) / parseFloat(this.secondMetric)) * 100
        ) - 100
      );
    },
    statColor() {
      return this.color || theme.color;
    },
    statRounded() {
      return this.rounded || theme.rounded;
    },
    statShadow() {
      return this.shadow || theme.shadow;
    },
  },
};
</script>
