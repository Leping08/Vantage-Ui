<template>
  <div id="app">
    <div class="p-4 bg-gray-100">
      <div class="m-4">
        <v-card heading="Avatar" :headingBorder="true">
          <v-avatar name="John Doe"></v-avatar>
        </v-card>
      </div>
      <div class="m-4">
        <v-card heading="Badge" :headingBorder="true">
          <v-badge>This is the badge</v-badge>
        </v-card>
      </div>
      <div class="m-4">
        <v-card heading="Card" :headingBorder="true">
          This is a card content.
        </v-card>
      </div>
      <div class="m-4">
        <v-card heading="Countdown" :headingBorder="true">
          <v-countdown></v-countdown>
        </v-card>
      </div>
      <div class="m-4">
        <v-card heading="Description List" :padding="false" :headingBorder="true">
          <v-description-list :items="descriptListItems"></v-description-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
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
      ]
    }
  }
};
</script>
