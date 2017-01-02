<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>

<template>
    <div>
        123
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="bounce">
            <p v-if="show">
                123398434897347890
            </p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
//        beforeRouteEnter(to, from, next) {
//            console.log('route in - - - ');
//
////            next(vm => {
////                console.log(vm.$route, 'i am in route in i n in');
////            })
//            next();
//        },
//        beforeRouteLeave(to, from, next) {
//            console.log('route out - - - ');
//            next();
//        }
        watch:{
            show(newShow) {
                console.log(newShow, 'i am show');
            }
        }
    }
</script>