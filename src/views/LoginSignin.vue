<template>
    <div class="overflow-y-auto grid grid-cols-12">
        <LogIn />
        <SignIn />
    </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
import SignIn from '@/components/SignIn.vue';

export default {
    name: 'LoginSignin',
    components: {
    SignIn,
    LogIn
}
    
}
</script>
<style>
    
</style>