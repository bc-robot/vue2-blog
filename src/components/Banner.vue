<template>
    <div class="b-header-banner" id="banner">
        <img src="../assets/banner.png">
    </div>
</template>

<style>

</style>

<script>
    export default {
        created() {
        },
        mounted() {
//            if(this.$route.path == '/register' || this.$route .path == '/login') {
//                Velocity($(this.$el).find('img'), { height: '160px',width:'430px', fontSize: '1.4em' }, { duration: 3000 })
//            }
        },
        updated() {
            console.log('banner updated - - - -');
        }
    }
</script>