<template>
<div class="w-1/3">
  <div class="flex">
    <div class="flex-1">
      <div class="flex">
        <div class="flex items-center justify-between w-full">
          <div @click="previousMonth()" class="mx-6 my-2 p-2 border rounded cursor-pointer">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
          </div>
          <div class="flex-1 text-center py-2 text-gray-500">
            {{ months[month] }} {{ year }}
          </div>
          <div @click="nextMonth()" class="mx-6 my-2 p-2 border rounded cursor-pointer">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex text-gray-400">
        <div class="h-10 w-full flex items-center" v-for="day in daysOfTheWeek" :key="day">
          <div class="mx-auto">
            {{ day }}
          </div>
        </div>
      </div>

      <div class="flex justify-items-center items-center cursor-pointer" v-for="week in calendar" :key="week">
        <div 
          :class="[
            'w-full py-2 flex items-center my-1',
            day.getTime() === (selectedDate ? selectedDate.getTime() : null) ? `text-white bg-${themeColor}-600` : '',
            month === day.getMonth() ? '' : 'text-gray-400',
            (now.getDate() === day.getDate() && now.getFullYear() === day.getFullYear() && now.getMonth() === day.getMonth()) ? `bg-gray-200` : '',
            ((startDate && endDate) && ((day.getTime() >= startDate.getTime()) && (day.getTime() <= endDate.getTime()))) ? `bg-${themeColor}-500 text-white` : '', 
            (startDate ? (startDate.getDate() === day.getDate() && startDate.getFullYear() === day.getFullYear() && startDate.getMonth() === day.getMonth()) : false) ? `bg-${themeColor}-700 text-white rounded-l-3xl` : '',
            (endDate ? (endDate.getDate() === day.getDate() && endDate.getFullYear() === day.getFullYear() && endDate.getMonth() === day.getMonth()) : false) ? `bg-${themeColor}-700 text-white  rounded-r-3xl` : '',
            `hover:bg-${themeColor}-200`
          ]"
          @click="selectDate(day)" 
          v-for="day in week" 
          :key="day">
          <div class="mx-auto">
            {{ day.getDate() }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex-initial border-l">
      <div class="flex flex-col">
        <div @click="selectToday()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Today
        </div>
        <div @click="selectYesterday()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Yesterday
        </div>
        <div @click="selectTomorrow()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Tomorrow
        </div>
        <div @click="selectThisWeek()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          This Week
        </div>
        <div @click="selectThisMonth()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          This Month
        </div>
        <div @click="selectThisYear()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          This Year
        </div>
        <div @click="selectLastWeek()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Last Week
        </div>
        <div @click="selectLastMonth()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Last Month
        </div>
        <div @click="selectLastYear()" :class="`p-2 hover:bg-${themeColor}-500 active:bg-${themeColor}-600 hover:text-white cursor-pointer`">
          Last Year
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- <div>
    Start date {{ startDate }}
  </div>
  <div>
    End date {{ endDate }}
  </div> -->
</template>

<script>
  /* eslint-disable */
  import theme from "./../theme";
  export default {
    name: "DateRangePicker",
    props: {
      modelValue: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        selectedDate: null,
        startDate: null,
        endDate: null,
        month: (new Date()).getMonth(),
        year: (new Date()).getFullYear(),
        now: new Date(),
        calendar: [],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        daysOfTheWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      }
    },
    created() {
      this.updateCalendar(new Date());
    },
    methods: {
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
          this.displayCorrectMonth(day)
          return;
        }
      },
      displayCorrectMonth(day) {
        if (day.getMonth() != this.month) {
          this.month = day.getMonth();
          this.year = day.getFullYear();
          this.updateCalendar(new Date(this.year, this.month))
        }
      },
      nextMonth() {
        if (this.month === 11) {
          this.month = 0
          this.year++
        } else {
          this.month++
        }
        this.updateCalendar(new Date(this.year, this.month))
      },
      previousMonth() {
        if (this.month === 0) {
          this.month = 11
          this.year--
        } else {
          this.month--
        }
        this.updateCalendar(new Date(this.year, this.month))
      },
      updateCalendar(date) {
        this.calendar = [];

        let thisMonth = date.getMonth();
        
        let thisYear = date.getFullYear();
        let firstDayOfCurrentMonth = new Date(thisYear, thisMonth, 1);
        let lastDayOfCurrentMonth = new Date(thisYear, thisMonth, 0);
        let firstDayOfPreviousMonth = new Date(thisYear, thisMonth - 1, 1);
        let lastDayOfThePreviousMonth = new Date(thisYear, thisMonth - 1, 0);
        let dayOfWeek = firstDayOfPreviousMonth.getDay()

        //Logic to get sunday to be the first day of the month
        let lastDayOfTheWeekThisMonth = lastDayOfCurrentMonth.getDate()
        let startDay = firstDayOfPreviousMonth.getDay() - (dayOfWeek + firstDayOfCurrentMonth.getDay() - 1)
        if (startDay > lastDayOfTheWeekThisMonth)
          startDay -= 7
        // if (dayOfWeek === lastDayOfThePreviousMonth)
        //   startDay = daysInLastMonth - 6;

        let calendar = []
        for (let i = 0; i < 6; i++) {
          calendar[i] = [];
        }

        let curDate = new Date(thisYear, thisMonth, startDay, 12, 0, 0);

        for (let i = 0, col = 0, row = 0; i < 6 * 7; i++, col++, curDate.setDate(curDate.getDate() + 1)) {
          if (i > 0 && col % 7 === 0) {
            col = 0;
            row++;
          }
          calendar[row][col] = new Date(curDate.getTime())
        }
        
        this.calendar = calendar;
      },
      selectToday() {
        this.startDate = new Date()
        this.endDate = new Date()
      },
      selectYesterday() {
        //86400000 = one day 24 * 60 * 60 * 1000
        let yesterday = new Date(Date.now() - 86400000)
        this.startDate = yesterday
        this.endDate = yesterday
      },
      selectTomorrow() {
        //86400000 = one day 24 * 60 * 60 * 1000
        let yesterday = new Date(Date.now() + 86400000)
        this.startDate = yesterday
        this.endDate = yesterday
      },
      selectThisWeek() {
        var now = new Date;
        this.startDate = new Date(now.setDate(now.getDate() - now.getDay()));
        this.endDate = new Date(now.setDate(now.getDate() - now.getDay() + 6));
      },
      selectLastWeek() {
        //604800000 = one week 24 * 60 * 60 * 1000 * 7
        var sevenDaysAgo = new Date(Date.now() - 604800000);
        this.startDate = new Date(sevenDaysAgo.setDate(sevenDaysAgo.getDate() - sevenDaysAgo.getDay()));
        this.endDate = new Date(sevenDaysAgo.setDate(sevenDaysAgo.getDate() - sevenDaysAgo.getDay() + 6));
      },
      selectThisMonth() {
        var now = new Date;
        this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      },
      selectLastMonth() {
        var now = new Date;
        let lastMonth = 0;
        if (now.getMonth() == 0) {
          lastMonth = 11
        } else {
          lastMonth = now.getMonth()
        }
        this.startDate = new Date(now.getFullYear(), (lastMonth - 1), 1);
        this.endDate = new Date(now.getFullYear(), lastMonth, 0);
      },
      selectThisYear() {
        var now = new Date;
        this.startDate = new Date(now.getFullYear(), 0);
        this.endDate = new Date(now.getFullYear(), 11, 31)
      },
      selectLastYear() {
        var now = new Date;
        this.startDate = new Date(now.getFullYear() - 1, 0);
        this.endDate = new Date(now.getFullYear() - 1, 11, 31)
      }
    },
    computed: {
      themeColor() {
        return this.color || theme.color;
      }
    }
  }
</script>