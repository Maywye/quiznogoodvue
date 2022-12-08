<template>
    <div class="flex-1 overflow-y-auto grid grid-cols-12">
        <HeLLo />
        <ChooseAvatar />
        <EditInfo />
    </div>
</template>
<script>
import HeLLo from '@/components/HeLLo.vue';
import ChooseAvatar from '@/components/ChooseAvatar.vue';
import EditInfo from '@/components/EditInfo.vue';
export default {
    name: 'TheProfile',
    components: {
        HeLLo,
        ChooseAvatar,
        EditInfo
    }
}
</script>
<style>
    
</style>