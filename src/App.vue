<template>
  <div id="app">
    <div class="flex flex-col h-screen bg-[#502F4C]">
      <TheHeader />
      <div class="flex justify-center ">
        <router-view ></router-view>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/HeaderVue.vue';
import TheFooter from './components/FooterVue.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  methods : {
    ...mapActions(["storeCurrent"])
 
  },
  mounted(){
    if(localStorage.getItem('userId') != null)
    this.storeCurrent()
    }
  }
</script>

<style>
@font-face {
    font-family: youreGone;
    src: url(assets/fonts/youregone/youregone.ttf);
}
@font-face {
    font-family: sourceCodePro;
    src: url(assets/fonts/sourcecode/sourcecodepro-regular.ttf);
}
@font-face {
    font-family: sourceCodeProBold;
    src: url(assets/fonts/sourcecode/SourceCodePro-Bold.ttf);
}
.sourceCode{
  font-family: 'sourceCodePro';
}
.sourceCodeB{
  font-family: 'sourceCodeProBold';
}

h2{
    font-family: 'youregone';
}
</style>
