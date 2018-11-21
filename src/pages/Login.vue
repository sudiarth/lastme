<template>
  <q-page padding class="row">
      <div style="width: 100%; max-width: 90vw;">
        <q-input v-model="email" type="email" float-label="Email" />
        <q-input v-model="password" type="password" float-label="Password" />
        <p></p>
        <q-btn outline color="primary" label="Login" to="/" />
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      model: ''
    }
  }
}
</script>
