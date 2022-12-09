<template>
  <div id="app">
    <div class="flex flex-col h-screen bg-[#502F4C]">
      <TheHeader />
      <router-view ></router-view>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/HeaderVue.vue';
import TheFooter from './components/FooterVue.vue';
import QuestionsModal from './components/QuestionsModal.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    QuestionsModal
  }
}
</script>

<style>

</style>
