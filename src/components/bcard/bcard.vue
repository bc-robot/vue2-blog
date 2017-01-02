<template>
    <div class="b-card">
        <img src="../../assets/travel.png">
        <div class="b-card-content">
            <div class="pencil-box">
                <div class="b-icon-pencil">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </div>
            </div>

            <div class="b-category">旅游那点事儿</div>
            <div class="b-title">最刺激的历险记</div>
            <div class="b-time">
                2016.05.21
            </div>
            <div class="b-brief">
                不知道从何时起,每个人都在谈论"一场说走就走的旅行"。有人说过,一生中至少要有两次冲动,以此为奋不顾身的爱情;一次位说走就走的旅行。我现在正值花样年华,
                青春年盛,年少轻狂是我们最贴切的形容词,再不疯狂我们都老了。
            </div>
            <div class="b-read">
                <span class="b-brown">| </span> 阅读全文 <span class="b-brown"> |</span>
            </div>
        </div>

        <div class="b-bottom-tip">
            <div class="b-favor"><i class="fa fa-star-o"></i>收藏</div>
            <div class="b-msg"><i class="fa fa-commenting-o"></i>123</div>
            <div class="b-share"><i class="fa fa-share-alt"></i>360</div>
            <div class="b-honor"><i class="fa fa-thumbs-o-up"></i>560</div>
        </div>
    </div>
</template>

<style lang="less">
    .b-card {
        /*background: #FFF;*/
        position: relative;
        width: 20%;
        min-width: 210px;
        text-align: center;
        display: inline-block;
        margin-bottom: 20px;
        margin-left: 4%;

        -webkit-transition: width 1s ease;
        -moz-transition: width 1s ease;
        -o-transition: width 1s ease;
        -ms-transition: width 2s ease;
        transition: width 1s ease;

    img {
        width: 100%;
        -moz-box-shadow: 4px 4px 2px #F5F5F7; /* 老的 Firefox */
        box-shadow: 4px 4px 2px #F5F5F7;
    }

    .b-card-content {
        border: 1px solid #F5F5F7;
        background: #FFFFFF;
        -moz-box-shadow: 4px 0px 2px #F5F5F7; /* 老的 Firefox */
        box-shadow: 4px 0px 2px #F5F5F7;
        .pencil-box {
            width: inherit;
            position: relative;
            .b-icon-pencil {
                top: -15px;
                left: 45%;
                position: absolute;
                width: 10%;
                min-width: 30px;
                height: 28px;
                line-height: 25px;
                font-size: 14px;
                font-weight: 300;
                background: #1E1E1E;
                color: #FFF;
                text-align: center;
                border: 1px solid #9E9E9E;
                margin: 0 auto;
            }
        }

        .b-category {
            margin-top: 40px;
            font-size: 12px;
            color: #B5B5B5;
        }

        .b-title {
            font-size: 14px;
            color: #3B3B3B;
            margin: 10px auto;
            font-weight: 600;
        }

        .b-time {
            font-size: 12px;
            color: #B5B5B5;
        }

        .b-brief {
            text-indent: 2em;
            font-size: 12px;
            /*text-align: justify;*/
            /*text-justify: inter-word;*/
            /*-ms-text-justify: inter-word; !*IE9*!*/
            /*-moz-text-align-last:justify; !*Firefox*!*/
            /*-webkit-text-align-last:justify;*/
            /*word-break: break-all;*/
            /*word-wrap:break-word;*/
            /*text-align:justify;*/
            /*text-justify:distribute-all-lines;*/
            text-align: left;
            margin-top: 20px;
            padding: 0 20px;
            max-height: 140px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /*.b-brief:after {*/
        /*content: '';*/
        /*display: inline-block;*/
        /*width: 100%;*/
        /*}*/
        .b-read {
            color: #3B3B3B;
            font-size: 12px;
            font-weight: 600;
            margin: 25px 0;

            .b-brown {
                color: #E6E6E6;
                white-space: pre;
            }

        }
    }

    .b-bottom-tip {
        border: 1px solid #F5F5F7;
        text-align: left;
        -moz-box-shadow: 4px 4px 2px #F5F5F7; /* 老的 Firefox */
        box-shadow: 4px 4px 2px #F5F5F7;
        background: #ffffff;
        div {
            display: inline-block;
            color: #B2B2B2;
            width: 20%;
            margin: 10px 0;
            margin-left: 3%;
            text-align: center;
        }
        div.b-honor {
            text-align: left;
        }
    }

    }

    @media all and (max-width: 400px){
        .b-card {
            width: 80%;
            margin-left: 10%;
        }
    }

    @media all and (min-width: 400px ) and (max-width: 800px){
        .b-card {
            width: 40%;
            margin-left: 6%;
        }
    }

    @media all and (min-width: 800px ) and (max-width: 1024px){
        .b-card {
            width: 25%;
            margin-left: 6%;
        }
    }
</style>

<script>

</script>