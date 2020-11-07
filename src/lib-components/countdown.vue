<template>
  <div v-if="!expired">
    <div class="flex text-center">
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ days }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Days
        </div>
      </div>
      <div class="border-r my-5 border-gray-200"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ hours }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Hours
        </div>
      </div>
      <div class="border-r my-5  border-gray-200"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ minutes }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Minutes
        </div>
      </div>
      <div class="border-r my-5  border-gray-200"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ seconds }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Seconds
        </div>
      </div>
    </div>
  </div>
  <div v-if="expired" class="p-2 text-2xl font-semibold text-indigo-600">
    Expired
  </div>
</template>

<script>
import theme from "./theme";
export default {
  name: "Countdown",
  props: {
    time: {
      type: Date,
      required: true,
      default: new Date(new Date().getUTCFullYear() + 1, 1, 1)
    },
    color: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      end: null,
      distance: null,
      expired: false
    };
  },
  computed: {
    days() {
      return Math.floor(this.distance / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor(
        (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    },
    minutes() {
      return Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.distance % (1000 * 60)) / 1000);
    },
    timerColor() {
      if (this.color) {
        return this.color;
      } else {
        return theme.color;
      }
    }
  },
  created() {
    //Set the end time for use later
    this.end = new Date(this.time).getTime();

    setInterval(() => {
      // Dertmine the difference between now and the end time prop
      this.distance = this.end - new Date().getTime();

      //Check if the count down is finished
      if (this.distance < 0) {
        clearInterval();
        this.expired = true;
      }
    }, 1000);
  }
};
</script>
