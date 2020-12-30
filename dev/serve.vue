<template>
  <div id="app">
    <div class="bg-gray-100">
      <div class="bg-white">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img src="./vantage-ui-logo-dark.svg" class="h-24 p-2" />
              <div
                class="ml-2 font-lg text-4xl tracking-normal font-sans text-gray-800"
              >
                Vantage UI
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-gray-400">
                v0.1.0
              </div>
              <div class="p-4">
                <svg
                  style="width:24px;height:24px"
                  class="text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="m-4">
          <v-card heading="Accordion" :padding="false" :headingBorder="false">
            <v-accordion :items="questionsAndAnswers"></v-accordion>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Avatar" :headingBorder="true" :padding="true">
            <v-avatar name="John Doe"></v-avatar>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Badge" :headingBorder="true" :padding="true">
            <v-badge>This is the badge</v-badge>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Date Range Picker"
            :headingBorder="true"
            :padding="true"
          >
            <v-date-range-picker
              v-model:start="startDate"
              v-model:end="endDate"
              position="right"
            />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Button" :headingBorder="true" :padding="true">
            <div class="p-2">
              <v-button size="xs" class="m-2">Submit Me</v-button>
              <v-button size="sm" class="m-2">Submit Me</v-button>
              <v-button size="md" class="m-2">Submit Me</v-button>
              <v-button size="lg" class="m-2">Submit Me</v-button>
              <v-button size="xl" class="m-2">Submit Me</v-button>
            </div>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Card" :headingBorder="true" :padding="true">
            This is a card content.
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Checkbox" :padding="true" :headingBorder="true">
            <v-check-box
              label="Vue"
              value="vue"
              v-model="checkBoxItems"
            ></v-check-box>
            <v-check-box
              label="React"
              value="react"
              v-model="checkBoxItems"
            ></v-check-box>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Countdown" :headingBorder="true">
            <v-countdown
              :time="new Date(new Date().getUTCFullYear() + 1, 1, 1)"
            ></v-countdown>
          </v-card>
        </div>
        <div class="m-4">
          <v-data-table :items="dataTableItems" title="Data Table">
            <template v-slot:price="{ item }">
              <v-badge :color="item > 700 ? 'red' : 'green'"
                >$ {{ item }}</v-badge
              >
            </template>
          </v-data-table>
        </div>
        <div class="m-4">
          <v-card
            heading="Description List"
            :padding="false"
            :headingBorder="true"
          >
            <v-description-list
              :items="descriptionListItems"
            ></v-description-list>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Input" :padding="true" :headingBorder="true">
            <v-input
              placeholder="Full Name"
              label="Name"
              v-model="input"
              :rules="['max:255', 'required', 'min:2']"
            ></v-input>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Radio" :padding="true" :headingBorder="true">
            <v-radio label="Vue" value="vue" v-model="radio"></v-radio>
            <v-radio label="React" value="react" v-model="radio"></v-radio>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Ping" :padding="true" :headingBorder="true">
            <v-ping color="pink"></v-ping>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Progress Bar" :padding="true" :headingBorder="true">
            <v-progress-bar v-model="progressBarValue"></v-progress-bar>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Progress Spinner"
            :padding="true"
            :headingBorder="true"
          >
            <v-progress-spinner :size="8" />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Search Select" :padding="true" :headingBorder="true">
            <v-search-select
              v-model="searchSelected"
              :items="searchItems"
              placeholder="Search Color"
            >
              <template v-slot:default="{ item }">
                <div class="flex items-center">
                  <div
                    :class="`h-4 w-4 rounded-full bg-${item}-600 mr-2`"
                  ></div>
                  <div :class="` hover:text-white text-${item}-600`">
                    {{ item }}
                  </div>
                </div>
              </template>
            </v-search-select>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Toggle" :padding="true" :headingBorder="true">
            <v-toggle v-model="toggle"></v-toggle>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Tabs">
            <v-tabs v-model="tabid">
              <v-tab :tabId="1">First tab</v-tab>
              <v-tab :tabId="2">Second tab</v-tab>
              <v-tab :tabId="3">Third tab</v-tab>

              <v-tab-content :tabId="1">First content</v-tab-content>
              <v-tab-content :tabId="2">Second content</v-tab-content>
              <v-tab-content :tabId="3">Third content</v-tab-content>
            </v-tabs>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Stats" :padding="true" :headingBorder="true">
            <div class="flex w-full my-4">
              <v-stats
                class="m-2 flex-1"
                heading="Users"
                :first-metric="446"
                :second-metric="345"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Followers"
                :first-metric="47"
                :second-metric="50"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Subscribers"
                :first-metric="10"
                :second-metric="10"
              ></v-stats>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tabid: 1,
      startDate: null,
      endDate: null,
      input: "",
      radio: "Vue",
      checkBoxItems: [],
      searchSelected: "red",
      progressBarValue: 75,
      searchItems: [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
        "fdsfdsa",
        "gfdsgfds",
        "hgdsgrafds"
      ],
      toggle: false,
      descriptionListItems: [
        {
          key: "First Item",
          value: "$1500"
        },
        {
          key: "Second Item",
          value: "150 Subscribers"
        },
        {
          key: "Third Item",
          value: "Hail Dale"
        },
        {
          key: "Fourth Item",
          value: "Number 4 is the best."
        }
      ],
      questionsAndAnswers: [
        {
          key: "What's the best thing about Switzerland?",
          value: "I don't know, but the flag is a big plus."
        },
        {
          key: "How do you make holy water?",
          value: "You boil the hell out of it."
        },
        {
          key: "What do you call someone with no body and no nose?",
          value: "Nobody knows."
        },
        {
          key: "Why do you never see elephants hiding in trees?",
          value: "Because they're so good at it."
        }
      ],
      dataTableItems: [
        {
          title: "Intro to CSS",
          name: "Derek",
          price: 858
        },
        {
          title: "Backend API's",
          name: "Adam",
          price: 112
        },
        {
          title: "Intro to JavaScript",
          name: "Chris",
          price: 1280
        },
        {
          title: "Learning SQL",
          name: "John",
          price: 858
        },
        {
          title: "ASP",
          name: "Joe",
          price: 1078
        },
        {
          title: "Its GO time",
          name: "Lee",
          price: 645
        },
        {
          title: "Rust 101",
          name: "Mac",
          price: 90
        }
      ]
    };
  }
};
</script>
