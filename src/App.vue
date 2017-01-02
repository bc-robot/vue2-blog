<template>
    <!--整个首页背景-->
    <div id="b-wrapper" class="b-wrapper">
        <!--背景头部-->
        <div class="b-header">
            <!--背景头部工具-->

            <!--背景头部遮挡文字-->
            <div class="b-header-wordtip">

            </div>
        </div>

        <!--背景下部-->
        <div class="b-body">

        </div>


        <div class="b-container">
            <div class="b-header-toptip">
                <div class="b-header-toptip-logo-dropdown">
                    <button type="button">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <!--<span class="b-header-centerword">-->
                SUCHINGFOOL
                <!--</span>-->

                <div class="search b-header-toptip-icon">
                    <i class="glyphicon glyphicon-search"></i>
                    <!--<router-link to="/login">lilililililink111111111111</router-link>-->
                    <!--<router-link to="/register">lilililililink111111111</router-link>-->
                    <!--<router-link to="/">lilililililink111111111111</router-link>-->
                </div>
                <div class="share b-header-toptip-icon">
                    <i class="fa fa-share-alt"></i>
                </div>
                <div class="plus b-header-toptip-icon">
                    <i class="glyphicon glyphicon-plus"></i>
                </div>
            </div>

            <banner></banner>
               <!--<div v-if="$route.path=='/register'||$route.path=='/login'">-->
                   <!--456-->
               <!--</div>-->
            <transition
                    :enter="enter"
            >
                <navbar v-if="['login','register'].indexOf($route.name) < 0">1234</navbar>
            </transition>


            <!--<div class="b-bcard-box">-->
                <!--<bcard></bcard>-->
                <!--<bcard></bcard>-->
                <!--<bcard></bcard>-->
                <!--<bcard></bcard>-->
                <!--<bcard></bcard>-->
            <!--</div>-->

            <router-view></router-view>
        </div>

        <!--底部-->
        <div class="b-bottom">
            <div class="b-weather">
                <span class="b-day">今日</span>天气:
                <span class="b-weather-detail">
                    666
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @icon-border-color : #282B34;
    .b-wrapper {
        position: relative;
    .b-header {
        /*background: #212429;*/
        background: #212429;
        height: 188px;
    }
    .b-body {
        background: #FFFFFF;
    }

    .b-container {
        position: absolute;
        width: 90%;
        right: 5%;
        margin: 0 auto;
        text-align: center;
        /*background: #F9F9FB;*/
        top: 0;
        .b-header-toptip {
            border: 1px solid @icon-border-color;
            position: relative;
            height: 28px;
            margin: 0 auto;
            /*padding-top: 4px;*/
            line-height: 24px;
            text-align: center;
            color: #E0E0E0;

        .b-header-toptip-logo-dropdown {
            background-color: transparent;
            background-image: none;
            float: left;
            position: absolute;
            top: 0;

            button {
                border: none;
                background: #2C2C2C;
                height: 28px;
                width: 28px;
                border: 1px solid @icon-border-color;

                /*border-bottom: none;*/
                .icon-bar {
                    display: block;
                    height: 2px;
                    width: 16px;
                    background: #CBCCCC;
                    margin-top: 2px;
                }
            }
        }
        .b-header-toptip-icon {
            border: 1px solid @icon-border-color;
            position: absolute;
            height: 28px;
            /*line-height: 28px;*/
            /*display: inline-block;*/
            float: right;
            display: inline;
            width: 28px;
            font-size: 10px;
        &.search {
            top: 0;
            right: 0;
        }

        &.share {
            top: 0;
            right: 28px;
        }

        &.plus {
            top: 0;
            right: 56px;
        }

    }
    }

    .b-header-banner {
        width: 100%;
        position: relative;
    }

        .b-header-banner img{
            width: 100%;
            min-height: 160px;
            position: relative;
        }

        .b-bcard-box {
            width: 100%;
            background: #F7F7F7;
            padding-top: 110px;
            position: relative;
            text-align: left;
        }
    }
    }


    .b-bottom {
        background: #212429;
        width: 100%;
        height: 188px;
        position: fixed;
        bottom: 0;
        color: #FFFFFF;
        .b-weather {
            padding: 30px 20px;
        }
    }

</style>

<script>
    import bcard from './components/bcard/bcard.vue'
    import banner from './components/Banner.vue'
    import navbar from './components/Nav.vue'
    export default {
        name: 'app',
        components: {
            banner,navbar,bcard
        },
        methods: {
            enter(el,done) {
                console.log('app enter',el);
                done()
            },
            leave(el,done) {
                done()
            }
        }
    }
</script>

