<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary" inverted
        text-color="faded"
      >
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <router-link :to="{name: 'home'}">
            My Schedules
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <dl>
        <dt>App developed by:</dt>
        <dd>Afonso Dias</dd>
        <dt>Github:</dt>
        <dd>https://github.com/adocs2</dd>
        <dt>Email:</dt>
        <dd>afonso-dias2011@hotmail.com
        <dt>Quasar Guide:</dt>
        <dd>https://quasar-framework.org/guide/</dd>
        <dt>Vue.js Guide:</dt>
        <dd>https://vuejs.org/v2/guide/</dd>
      </dl>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: #777;
  }
</style>
