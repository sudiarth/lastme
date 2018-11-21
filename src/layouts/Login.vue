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
          LOGIN
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
        <q-list-header>LOGIN / REGISTER</q-list-header>
        <q-item link to="/auth/login">
          <q-item-side icon="lock" />
          <q-item-main label="Login" sublabel="already member" />
        </q-item>
        <q-item link to="/auth/register">
          <q-item-side icon="people" />
          <q-item-main label="Register" sublabel="new member" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page padding class="justify-center">
      <router-view />
    </q-page>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Login',
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
