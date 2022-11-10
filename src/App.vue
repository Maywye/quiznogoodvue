<template>
  <div id="app">
    <div class="flex flex-col h-screen bg-[#502F4C]">
      <TheHeader />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/HeaderVue.vue';
import TheFooter from './components/FooterVue.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>

</style>
