<template>
  <div>
    <v-navigation-drawer
    fixed
    right
    clipped
    v-model="drawer"
    app
    >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0">
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>FA Planner</v-toolbar-title>
        <v-toolbar-items>
           <v-btn flat v-for="i in 3" :key="i" ripple>Link {{ i }}</v-btn>
         </v-toolbar-items>
      </v-toolbar>
    </v-container>
      </v-content>
  </div>
</template>

<script>

import VToolbar from 'vuetify/es5/components/VToolbar'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ]
  }),
  props: {
    source: String
  }
}

</script>

<style>
</style>
