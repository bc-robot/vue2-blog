<template>
        <div class="b-bcard-box">
            <bcard></bcard>
            <bcard></bcard>
            <bcard></bcard>
            <bcard></bcard>
            <bcard></bcard>
        </div>
</template>
<style>
</style>
<script>
    import bcard from './bcard/bcard.vue'

    export default{
        props: ['name'],
        data(){
            return {
                visible: true
            }
        },
        components: {
            bcard
        },
//        beforeRouteEnter(to, from, next) {
//            console.log('route in - - - ');
//            next(vm => {
//                vm.data
//            })
//        },
//        beforeRouteLeave(to, from, next) {
//            console.log('route out - - - ');
//        }
    }
</script>
