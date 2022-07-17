<template>
  <div>
    <button
      id="date-range-picker-button"
      @click="showPicker = true"
      :class="[
        ` bg-white h-10 appearance-none block px-3 py-2 shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none sm:text-sm w-full ${themeRounded} text-gray-600 text-${position}`,
        showPicker
          ? `border-2 border-${themeColor}-500 ring-${themeColor}-500`
          : 'border',
      ]"
    >
      <template v-if="!(startDate || endDate)">
        <span class="text-gray-400"> Select Dates </span>
      </template>
      {{
        startDate
          ? monthsAbbreviations[startDate.getMonth()] +
            " " +
            startDate.getDate() +
            ", " +
            startDate.getFullYear()
          : ""
      }}
      {{ endDate ? "-" : "" }}
      {{
        endDate
          ? monthsAbbreviations[endDate.getMonth()] +
            " " +
            endDate.getDate() +
            ", " +
            endDate.getFullYear()
          : ""
      }}
    </button>
  </div>

  <div
    class="fixed inset-0 w-screen z-10"
    v-if="showPicker"
    @click="showPicker = false"
  ></div>

  <transition
    enter-from-class="-translate-y-4 opacity-0"
    enter-active-class="transform transition ease-in-out duration-300"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-active-class="transform transition ease-in-out duration-300"
    leave-to-class="-translate-y-4 opacity-0"
  >
    <div class="relative w-full">
      <div
        :class="`sm:w-9/12 md:w-7/12 lg:5/12 xl:w-4/12 border absolute top-0 ${position}-0 bg-white z-20 ${themeShadow} ${themeRounded}`"
        v-if="showPicker"
      >
        <div class="flex">
          <div class="flex-1">
            <div class="flex">
              <div class="flex items-center justify-between w-full">
                <div
                  @click="previousMonth()"
                  :class="`mx-6 my-2 p-2 border border-gray-300 ${themeRounded} cursor-pointer hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white`"
                >
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                    />
                  </svg>
                </div>
                <div
                  class="flex-1 text-center py-2 text-sm leading-5 text-gray-500"
                >
                  {{ monthsFullNames[month] }} {{ year }}
                </div>
                <div
                  @click="nextMonth()"
                  :class="`mx-6 my-2 p-2 border border-gray-300 ${themeRounded} cursor-pointer hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white`"
                >
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              class="flex bg-gray-50 border-t border-b text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              <div
                class="h-10 w-full flex items-center"
                v-for="day in daysOfTheWeek"
                :key="day"
              >
                <div class="mx-auto">
                  {{ day }}
                </div>
              </div>
            </div>

            <div
              class="flex justify-items-center items-center cursor-pointer text-sm leading-5"
              v-for="week in calendar"
              :key="week"
            >
              <div
                :class="[
                  'w-full py-2 flex items-center my-1',
                  day.getTime() ===
                  (selectedDate ? selectedDate.getTime() : null)
                    ? `text-white bg-${themeColor}-600`
                    : '',
                  month === day.getMonth() ? '' : 'text-gray-400',
                  now.getDate() === day.getDate() &&
                  now.getFullYear() === day.getFullYear() &&
                  now.getMonth() === day.getMonth()
                    ? `bg-gray-200`
                    : '',
                  startDate &&
                  endDate &&
                  day.getTime() >= startDate.getTime() &&
                  day.getTime() <= endDate.getTime()
                    ? `bg-${themeColor}-500 text-white`
                    : '',
                  (
                    startDate
                      ? startDate.getDate() === day.getDate() &&
                        startDate.getFullYear() === day.getFullYear() &&
                        startDate.getMonth() === day.getMonth()
                      : false
                  )
                    ? `bg-${themeColor}-700 text-white rounded-l-3xl`
                    : '',
                  (
                    endDate
                      ? endDate.getDate() === day.getDate() &&
                        endDate.getFullYear() === day.getFullYear() &&
                        endDate.getMonth() === day.getMonth()
                      : false
                  )
                    ? `bg-${themeColor}-700 text-white rounded-r-3xl`
                    : '',
                  `hover:bg-${themeColor}-200`,
                ]"
                @click="selectDate(day)"
                v-for="day in week"
                :key="day"
              >
                <div
                  class="mx-auto"
                  :qa-data="`${day.getMonth() + 1}/${day.getDate()}`"
                >
                  {{ day.getDate() }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex-initial border-l text-sm leading-5 text-gray-500">
            <div class="flex flex-col">
              <div
                @click="selectToday()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Today
              </div>
              <div
                @click="selectYesterday()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Yesterday
              </div>
              <div
                @click="selectTomorrow()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Tomorrow
              </div>
              <div
                @click="selectThisWeek()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                This Week
              </div>
              <div
                @click="selectThisMonth()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                This Month
              </div>
              <div
                @click="selectThisYear()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                This Year
              </div>
              <div
                @click="selectLastWeek()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Last Week
              </div>
              <div
                @click="selectLastMonth()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Last Month
              </div>
              <div
                @click="selectLastYear()"
                :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`"
              >
                Last Year
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import theme from "./../theme";
export default {
  name: "DateRangePicker",
  emits: ["update:start", "update:end"],
  props: {
    start: {
      type: Date,
      required: false,
    },
    end: {
      type: Date,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: false,
      default: "right",
    },
  },
  watch: {
    startDate(newDate) {
      this.$emit("update:start", newDate);
    },
    endDate(newDate) {
      this.$emit("update:end", newDate);
    },
  },
  data() {
    return {
      selectedDate: null,
      startDate: null,
      endDate: null,
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      now: new Date(),
      showPicker: false,
      calendar: [],
      monthsAbbreviations: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      monthsFullNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      daysOfTheWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    };
  },
  created() {
    //TODO set the start and end dates if they are passed in as valid props
    this.updateCalendar(new Date());
  },
  methods: {
    onClickAway(event) {
      console.log(event);
      this.showPicker = false;
    },
    selectDate(day) {
      //Check if this is the first click on the component and set the start date
      if (!this.startDate) {
        this.startDate = day;
        this.displayCorrectMonth(day);
        return;
      }

      //The start date is set but the end date is not set
      if (this.startDate && !this.endDate) {
        if (this.startDate.getTime() < day.getTime()) {
          //The user has selected a start date and the end date is after the start date
          this.endDate = day;
        } else {
          //The user has selected a start date and the end date before the start date so we need to swap the dates
          this.endDate = this.startDate;
          this.startDate = day;
        }
        this.displayCorrectMonth(day);
        return;
      }

      //The start date and end date are both set so we reset the dates and we just need to set the start date
      if (this.startDate && this.endDate) {
        this.startDate = day;
        this.endDate = null;
        this.displayCorrectMonth(day);
        return;
      }
    },
    displayCorrectMonth(day) {
      if (day.getMonth() != this.month) {
        this.month = day.getMonth();
        this.year = day.getFullYear();
        this.updateCalendar(new Date(this.year, this.month));
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
      this.updateCalendar(new Date(this.year, this.month));
    },
    previousMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
      this.updateCalendar(new Date(this.year, this.month));
    },
    updateCalendar(date) {
      this.calendar = [];

      let thisMonth = date.getMonth();

      let thisYear = date.getFullYear();
      let firstDayOfCurrentMonth = new Date(thisYear, thisMonth, 1);
      let lastDayOfCurrentMonth = new Date(thisYear, thisMonth, 0);
      let firstDayOfPreviousMonth = new Date(thisYear, thisMonth - 1, 1);
      //let lastDayOfThePreviousMonth = new Date(thisYear, thisMonth - 1, 0);
      let dayOfWeek = firstDayOfPreviousMonth.getDay();

      //Logic to get sunday to be the first day of the month
      let lastDayOfTheWeekThisMonth = lastDayOfCurrentMonth.getDate();
      let startDay =
        firstDayOfPreviousMonth.getDay() -
        (dayOfWeek + firstDayOfCurrentMonth.getDay() - 1);
      if (startDay > lastDayOfTheWeekThisMonth) startDay -= 7;
      // if (dayOfWeek === lastDayOfThePreviousMonth)
      //   startDay = daysInLastMonth - 6;

      let calendar = [];
      for (let i = 0; i < 6; i++) {
        calendar[i] = [];
      }

      let curDate = new Date(thisYear, thisMonth, startDay, 12, 0, 0);

      for (
        let i = 0, col = 0, row = 0;
        i < 6 * 7;
        i++, col++, curDate.setDate(curDate.getDate() + 1)
      ) {
        if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
        }
        calendar[row][col] = new Date(curDate.getTime());
      }

      this.calendar = calendar;
      this.displayCorrectMonth(date);
    },
    selectToday() {
      this.startDate = new Date();
      this.endDate = new Date();
      this.updateCalendar(this.startDate);
    },
    selectYesterday() {
      //86400000 = one day 24 * 60 * 60 * 1000
      let yesterday = new Date(Date.now() - 86400000);
      this.startDate = yesterday;
      this.endDate = yesterday;
      this.updateCalendar(this.startDate);
    },
    selectTomorrow() {
      //86400000 = one day 24 * 60 * 60 * 1000
      let yesterday = new Date(Date.now() + 86400000);
      this.startDate = yesterday;
      this.endDate = yesterday;
      this.updateCalendar(this.startDate);
    },
    selectThisWeek() {
      var now = new Date();
      this.startDate = new Date(now.setDate(now.getDate() - now.getDay()));
      this.endDate = new Date(now.setDate(now.getDate() - now.getDay() + 6));
      this.updateCalendar(this.startDate);
    },
    selectLastWeek() {
      //604800000 = one week 24 * 60 * 60 * 1000 * 7
      var sevenDaysAgo = new Date(Date.now() - 604800000);
      this.startDate = new Date(
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - sevenDaysAgo.getDay())
      );
      this.endDate = new Date(
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - sevenDaysAgo.getDay() + 6)
      );
      this.updateCalendar(this.startDate);
    },
    selectThisMonth() {
      var now = new Date();
      this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      this.updateCalendar(this.startDate);
    },
    selectLastMonth() {
      var now = new Date();
      let lastMonth = 0;
      if (now.getMonth() == 0) {
        lastMonth = 11;
      } else {
        lastMonth = now.getMonth();
      }
      this.startDate = new Date(now.getFullYear(), lastMonth - 1, 1);
      this.endDate = new Date(now.getFullYear(), lastMonth, 0);
      this.updateCalendar(this.startDate);
    },
    selectThisYear() {
      var now = new Date();
      this.startDate = new Date(now.getFullYear(), 0);
      this.endDate = new Date(now.getFullYear(), 11, 31);
      this.updateCalendar(this.startDate);
    },
    selectLastYear() {
      var now = new Date();
      this.startDate = new Date(now.getFullYear() - 1, 0);
      this.endDate = new Date(now.getFullYear() - 1, 11, 31);
      this.updateCalendar(this.startDate);
    },
  },
  computed: {
    themeColor() {
      return this.color || theme.color;
    },
    themeShadow() {
      return theme.shadow || "";
    },
    themeRounded() {
      return theme.rounded || "";
    },
  },
};
</script>
