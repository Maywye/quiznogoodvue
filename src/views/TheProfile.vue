<template>
    <div class="overflow-y-auto grid grid-cols-12" v-if="getCurrentUser">
        <HeLLo />
        <ChooseAvatar />
        <EditInfo />
    </div>
</template>
<script>
import HeLLo from '@/components/HeLLo.vue';
import { mapGetters } from 'vuex';
import ChooseAvatar from '@/components/ChooseAvatar.vue';
import EditInfo from '@/components/EditInfo.vue';
export default {
    name: 'TheProfile',
    components: {
        HeLLo,
        ChooseAvatar,
        EditInfo
    },
    computed : {
        ...mapGetters(["getCurrentUser"])
    }
}
</script>
<style>
    
</style>