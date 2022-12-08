<template lang="">
    <div>
        <h1>PARTIE RAPIDE</h1>
        <h1>MEILLEUR SCORE</h1>

        <QuestionsModal v-show="displayQuest"/>


    </div>
</template>

<script>
import QuestionsModal from '../components/QuestionsModal.vue';

export default {
    name: 'TheHome',
    components : {
        QuestionsModal,
    }
}
</script>

<style lang="">
    
</style>