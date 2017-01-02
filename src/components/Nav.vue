<template>
    <div class="b-nav">
        <div class="mysign">孙清波</div>
        <div class="nav-stage">
            <div class="nav-container">
                <div class="nav-item nav-item-1">
                    <router-link :to="{ path: '/', activeClass: 'nav-active', exact: true }">博客首页</router-link>
                </div>
                <div class="nav-item nav-item-2">
                    <router-link :to="{ path: '/blog', activeClass: 'nav-active', exact: true }">博文目录</router-link>
                </div>
                <div class="nav-item nav-item-3">
                    <router-link :to="{ path: '/pic', activeClass: 'nav-active', exact: true }">图片分享</router-link>
                </div>
                <div class="nav-item nav-item-4">
                    <router-link :to="{ path: '/book', activeClass: 'nav-active', exact: true }">订阅信息</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">

    .nav-active {
        background: yellow;
    }

    @media all and (min-width: 1200px) {
        .b-nav {
            float: left;
            z-index: 100;
            margin-top: 20px;
            margin-bottom: 60px;
            position: relative;
            width: 100%;
            font-size: 14px;
            font-weight: 600;

            .mysign {
                width: 200px;
                float: left;
            }

            .nav-container {
                width: 100%;
                min-height: 30px;
                padding-right: 40px;
                position: relative;

                .nav-item {
                    -webkit-transition: position,-webkit-transform 3s;
                    -moz-transition: position,-moz-transform 3s;
                    -ms-transition: position,-ms-transform 3s;
                    -o-transition: position,-o-transform 3s;
                    transition: position,transform 3s;
                    width: 120px;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 25px;
                    word-spacing: 8px;
                    letter-spacing: 1px;
                    background: #FFF;
                    float: right;
                    text-align: center;
                    cursor: pointer;
                    &:hover {
                         background: rgba(0,0,0,1);
                        a {
                            color: #FFFFFF;
                            text-decoration: none;
                        }
                    }
                    a {
                        font-size: 14px;
                        font-weight: 700;
                        color: #3E3E3E;
                        text-decoration: none;
                    }
                }

            }
        }
    }

    @media all and (max-width: 1200px) {

        @keyframes roateAlways {
            0% {
                -webkit-transform: rotate3d(0,1,0,0deg);
                -moz-transform: rotate3d(0,1,0,0deg);
                -ms-transform: rotate3d(0,1,0,0deg);
                -o-transform: rotate3d(0,1,0,0deg);
                transform: rotate3d(0,1,0,0deg);
            }
            12.5% {
                -webkit-transform: rotate3d(0,1,0,45deg);
                -moz-transform: rotate3d(0,1,0,45deg);
                -ms-transform: rotate3d(0,1,0,45deg);
                -o-transform: rotate3d(0,1,0,45deg);
                transform: rotate3d(0,1,0,45deg);
            }
            25% {
                -webkit-transform: rotate3d(0,1,0,90deg);
                -moz-transform: rotate3d(0,1,0,90deg);
                -ms-transform: rotate3d(0,1,0,90deg);
                -o-transform: rotate3d(0,1,0,90deg);
                transform: rotate3d(0,1,0,90deg);
            }
            37.5% {
                -webkit-transform: rotate3d(0,1,0,135deg);
                -moz-transform: rotate3d(0,1,0,135deg);
                -ms-transform: rotate3d(0,1,0,135deg);
                -o-transform: rotate3d(0,1,0,135deg);
                transform: rotate3d(0,1,0,135deg);
            }
            50% {
                -webkit-transform: rotate3d(0,1,0,180deg);
                -moz-transform: rotate3d(0,1,0,180deg);
                -ms-transform: rotate3d(0,1,0,180deg);
                -o-transform: rotate3d(0,1,0,180deg);
                transform: rotate3d(0,1,0,180deg);
            }
            62.5% {
                -webkit-transform: rotate3d(0,1,0,225deg);
                -moz-transform: rotate3d(0,1,0,225deg);
                -ms-transform: rotate3d(0,1,0,225deg);
                -o-transform: rotate3d(0,1,0,225deg);
                transform: rotate3d(0,1,0,225deg);
            }
            75% {
                -webkit-transform: rotate3d(0,1,0,270deg);
                -moz-transform: rotate3d(0,1,0,270deg);
                -ms-transform: rotate3d(0,1,0,270deg);
                -o-transform: rotate3d(0,1,0,270deg);
                transform: rotate3d(0,1,0,270deg);
            }
            87.5% {
                -webkit-transform: rotate3d(0,1,0,315deg);
                -moz-transform: rotate3d(0,1,0,315deg);
                -ms-transform: rotate3d(0,1,0,315deg);
                -o-transform: rotate3d(0,1,0,315deg);
                transform: rotate3d(0,1,0,315deg);
            }
            100% {
                -webkit-transform: rotate3d(0,1,0,360deg);
                -moz-transform: rotate3d(0,1,0,360deg);
                -ms-transform: rotate3d(0,1,0,360deg);
                -o-transform: rotate3d(0,1,0,360deg);
                transform: rotate3d(0,1,0,360deg);
            }
        }


        .b-nav {
            float: left;
            z-index: 100;
            margin-top: 20px;
            margin-bottom: 60px;
            position: relative;
            width: 100%;
            font-size: 14px;
            font-weight: 600;

            .mysign {
                width: 200px;
                float: left;
            }

            .nav-stage {
                width: 900px;
                min-height: 20px;
                margin: auto;
                position: relative;
                -webkit-perspective: 800px;
                -moz-perspective: 800px;
                -ms-transform: perspective(800px);
            }

            .nav-container:hover {
                -webkit-animation-play-state: paused;
                -moz-animation-play-state: paused;
                -o-animation-play-state: paused;
                animation-play-state: paused;
            }

            .nav-container {
                -webkit-animation: roateAlways 6s infinite;
                -o-animation: roateAlways 6s infinite;
                animation: roateAlways 6s infinite;
                width: 120px;
                height: 50px;
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d;
                -ms-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transition: -webkit-transform 1s;
                -moz-transition: -moz-transform 1s;
                -ms-transition: -ms-transform 1s;
                -o-transition: -o-transform 1s;
                transition: transform 1s;
                position: absolute;
                left: 30%;
                text-align: center;
            }

            .nav-item {
                -webkit-transition: position,-webkit-transform 3s;
                -moz-transition: position,-moz-transform 3s;
                -ms-transition: position,-ms-transform 3s;
                -o-transition: position,-o-transform 3s;
                transition: position,transform 3s;
                width: 120px;
                -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
                -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
                box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
                position: absolute;
                height: 30px;
                line-height: 30px;
                margin-left: 25px;
                word-spacing: 8px;
                letter-spacing: 1px;
                background: #FFF;
                text-align: center;
                cursor: pointer;
                &:hover {
                   background: rgba(0,0,0,1);
                    a {
                        color: #FFFFFF;
                        text-decoration: none;
                    }
                }
                a {
                    font-size: 14px;
                    font-weight: 700;
                    color: #3E3E3E;
                    text-decoration: none;
                }
            }

            .nav-item-1 {
                -webkit-transform: rotate3d(0, 1, 0, 0deg) translate3d(0, 0, 115.4px);
                -moz-transform: rotate3d(0, 1, 0, 0deg) translate3d(0, 0, 115.4px);
                -ms-transform: rotate3d(0, 1, 0, 0deg) translate3d(0, 0, 115.4px);
                -o-transform: rotate3d(0, 1, 0, 0deg) translate3d(0, 0, 115.4px);
                transform: rotate3d(0, 1, 0, 0deg) translate3d(0, 0, 115.4px);
            }

            .nav-item-2 {
                -webkit-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 115.4px);
                -moz-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 115.4px);
                -ms-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 115.4px);
                -o-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 115.4px);
                transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 115.4px);
            }

            .nav-item-3 {
                -webkit-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 115.4px);
                -moz-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 115.4px);
                -ms-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 115.4px);
                -o-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 115.4px);
                transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 115.4px);
            }

            .nav-item-4 {
                -webkit-transform: rotate3d(0, 1, 0, 270deg) translate3d(0, 0, 115.4px);
                -moz-transform: rotate3d(0, 1, 0, 270deg) translate3d(0, 0, 115.4px);
                -ms-transform: rotate3d(0, 1, 0, 270deg) translate3d(0, 0, 115.4px);
                -o-transform: rotate3d(0, 1, 0, 270deg) translate3d(0, 0, 115.4px);
                transform: rotate3d(0, 1, 0, 270deg) translate3d(0, 0, 115.4px);
            }
        }
    }
</style>

<script>

    var transform = function(element, value, key) {
        key = key || 'Transform';
        ["Moz", "O", "Ms", "Webkit", ""].forEach(function(prefix) {
            element.style[prefix + key] = value;
        })
        return element;
    }

    var deg = -45;
    var i = 1;
    function rollNav() {
        var timer = setInterval(function() {
            transform($(".nav-container")[0], "rotateY(" + (deg * i++) +"deg)")
        }, 1000);
        return timer;
    }

    var timer;

    export default {
        data() {
            return {
                bodyWidth: $('body').width()
            }
        },
        created: function() {

//            console.log($('body').width(), 'this created resize!i am ready!');
//            if($('body').width() < 1200) {
//                clearInterval(timer);
//                timer = rollNav();
//            }else {
//                clearInterval(timer)
//                transform($(".nav-container")[0], "rotateY(" + (0) +"deg)")
//            }
//            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy: function() {
//            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
//            handleResize(event) {
//                console.log(event, 'this is handleResize event')
//                this.bodyWidth = $('body').width()
//            }

//            over($event) {
//                console.log($event, ' i am hoving')
//            }
        },
        watch: {
//            bodyWidth(newBodyWidth) {
//
//                if(newBodyWidth < 1200) {
//                    clearInterval(timer);
//                    timer = rollNav();
//                }else {
//                    clearInterval(timer)
//                    transform($(".nav-container")[0], "rotateY(" + (0) +"deg)")
//                }
//                console.log(newBodyWidth, 'i am new bodywidth')
//            }
        }
    }
</script>