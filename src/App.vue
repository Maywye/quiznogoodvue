<template>
  <div id="app">
    <div class="flex flex-col h-screen bg-[#502F4C]">
      <TheHeader />
      <div class="mx-auto">
        <router-view ></router-view>
      </div>
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
@font-face {
    font-family: youreGone;
    src: url(assets/fonts/youregone/youregone.ttf);
}
  h2{
    font-family: 'youregone';
  }
</style>
