<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          LASTME
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>NAVIGATION</q-list-header>
        <q-item to="/search">
          <q-item-side icon="search" />
          <q-item-main label="Search" sublabel="Search people" />
        </q-item>
        <q-item to="/setting">
          <q-item-side icon="settings" />
          <q-item-main label="Settings" sublabel="Add friends" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <div id="q-app">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'App',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
