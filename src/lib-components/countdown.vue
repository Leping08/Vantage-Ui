<template>
  <div v-if="!expired">
    <div class="flex text-center">
      <div class="p-2">
        <div
          :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`"
          :qa-data-days="days"
        >
          {{ days }}
        </div>
        <div
          class="px-6 py-2 whitespace-nowrap text-sm leading-5 text-gray-500"
        >
          Days
        </div>
      </div>
      <div class="border-r my-5 border-gray-200"></div>
      <div class="p-2">
        <div
          :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`"
          :qa-data-hours="hours"
        >
          {{ hours }}
        </div>
        <div
          class="px-6 py-2 whitespace-nowrap text-sm leading-5 text-gray-500"
        >
          Hours
        </div>
      </div>
      <div class="border-r my-5 border-gray-200"></div>
      <div class="p-2">
        <div
          :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`"
          :qa-data-minutes="minutes"
        >
          {{ minutes }}
        </div>
        <div
          class="px-6 py-2 whitespace-nowrap text-sm leading-5 text-gray-500"
        >
          Minutes
        </div>
      </div>
      <div class="border-r my-5 border-gray-200"></div>
      <div class="p-2">
        <div
          :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`"
          :qa-data-seconds="seconds"
        >
          {{ seconds }}
        </div>
        <div
          class="px-6 py-2 whitespace-nowrap text-sm leading-5 text-gray-500"
        >
          Seconds
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="expired"
    :class="`p-2 text-2xl font-semibold text-${timerColor}-600`"
  >
    {{ expiredMessage }}
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
    },
    color: {
      type: String,
      required: false,
    },
    expiredMessage: {
      type: String,
      default: "Expired",
      required: false,
    },
  },
  data() {
    return {
      end: null,
      distance: null,
      expired: false,
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
      return this.color || theme.color;
    },
  },
  created() {
    this.setCountdownEnd();
  },
  watch: {
    time() {
      this.setCountdownEnd();
    },
  },
  methods: {
    //TODO figure out time zones
    setCountdownEnd() {
      //Clear any already going intervals
      clearInterval();
      this.expired = false;

      //Set the end time for use later
      this.end = new Date(this.time).getTime();

      //TODO Don't duplicate the logic to check if the time has expired
      //Determine the difference between now and the end time prop
      this.distance = this.end - new Date().getTime();

      //Check if the count down is finished
      if (this.distance < 0) {
        clearInterval();
        this.expired = true;
      }

      setInterval(() => {
        //Determine the difference between now and the end time prop
        this.distance = this.end - new Date().getTime();

        //Check if the count down is finished
        if (this.distance < 0) {
          clearInterval();
          this.expired = true;
        }
      }, 1000);
    },
  },
};
</script>
