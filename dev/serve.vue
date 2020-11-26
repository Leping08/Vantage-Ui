<template>
  <div id="app">
    <div class="bg-gray-100">
      <div class="bg-white">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img src="./vantage-ui-logo.svg" class="h-24 p-6" />
              <div
                class="ml-2 font-lg text-4xl tracking-normal font-sans text-gray-500"
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
            <v-accordion :items="questionandAnswers"></v-accordion>
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
          <v-card heading="Button" :headingBorder="true" :padding="true">
            <v-button>Submit Me</v-button>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Card" :headingBorder="true" :padding="true">
            This is a card content.
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
          <v-card heading="Data Table" :headingBorder="true">
            <v-data-table :items="dataTableItems" title="Classes">
              <template v-slot:price="{ item }">
                <v-badge :color="item > 700 ? 'red' : 'green'"
                  >$ {{ item }}</v-badge
                >
              </template>
            </v-data-table>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Description List"
            :padding="false"
            :headingBorder="true"
          >
            <v-description-list :items="descriptListItems"></v-description-list>
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
            <v-progress-spinner size="8" />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Search Select" :padding="true" :headingBorder="true">
            <v-search-select
              v-model="searchSelected"
              :items="searchItems"
              placeholder="Search Color"
            ></v-search-select>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Toggle" :padding="true" :headingBorder="true">
            <v-toggle v-model="toggle"></v-toggle>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Stats" :padding="true" :headingBorder="true">
            <div class="flex w-full my-4">
              <v-stats
                class="m-2 flex-1"
                heading="Users"
                :first-metric="4"
                :second-metric="1"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Followers"
                :first-metric="50.34"
                :second-metric="3.29"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Subscribers"
                :first-metric="5"
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
      input: "",
      searchSelected: "",
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
      descriptListItems: [
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
      questionandAnswers: [
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
          price: 858,
          edit: ""
        },
        {
          title: "Backend API's",
          name: "Adam",
          price: 112,
          edit: ""
        },
        {
          title: "Intro to JavaScript",
          name: "Chris",
          price: 1280,
          edit: ""
        },
        {
          title: "Learning SQL",
          name: "John",
          price: 858,
          edit: ""
        },
        {
          title: "ASP",
          name: "Joe",
          price: 1078,
          edit: ""
        },
        {
          title: "Its GO time",
          name: "Lee",
          price: 645,
          edit: ""
        },
        {
          title: "Rust 101",
          name: "Mac",
          price: 90,
          edit: ""
        }
      ]
    };
  }
};
</script>
