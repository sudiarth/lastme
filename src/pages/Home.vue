<template>
  <q-page padding class="row">
      <div style="width: 100%; max-width: 90vw;">
        <q-search v-model="terms">
          <q-autocomplete
            separator
            @search="search"
            @selected="selected"
          />
        </q-search>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      model: ''
    }
  }
}
</script>
