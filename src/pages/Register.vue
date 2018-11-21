<template>
  <q-page padding class="row">
      <div style="width: 100%; max-width: 90vw;">
        <q-input v-model="name" type="text" float-label="Name" />
        <q-input v-model="email" type="email" float-label="Email" />
        <q-input v-model="mobile" type="text" float-label="Mobile" />
        <p></p>
        <q-btn outline color="primary" label="Register" />
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      model: ''
    }
  }
}
</script>
