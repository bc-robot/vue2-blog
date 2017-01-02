<template>
    <el-row class="el-row-style">
        <div v-for="(o, index) in dt" :class="{'el-first': index%4==0,'el-first-else': index%4!=0}"  class="col-width">
            <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/hamburger.png" class="image">
                <div style="padding: 14px;">
                    <span>孙清波 苏州大学 2008-2012</span>
                    <div></div>
                    <span>按钮</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </el-row>

</template>

<style>
    @media all and (min-width: 1024px){
        .el-first {
            margin-left: 2.5%;
        }
        .el-first-else {
            margin-left: 5%;
        }
        .col-width {
            width: 20%;
            display: inline-flex;
            margin-bottom: 20px;
            -webkit-transition: width 1s ease;
            -moz-transition: width 1s ease;
            -o-transition: width 1s ease;
            -ms-transition: width 2s ease;
            transition: width 1s ease;
        }
        .el-row-style {
        }
        .navbar input {
            float: right;
            position: absolute;
            right: 6%;
            top: 16px;
            border: none;
            border: 1px solid #E7E7E7;
            border-radius: 2px;
        }
    }

    @media all and (min-width: 800px) and (max-width: 1024px){
        .col-width {
            width: 25%;
            margin-left: 6%;
            display: inline-flex;
            flex-direction: row;
            margin-bottom: 20px;
            -webkit-transition: width 1s ease;
            -moz-transition: width 1s ease;
            -o-transition: width 1s ease;
            -ms-transition: width 2s ease;
            transition: width 1s ease;
        }
        .navbar input {
            float: right;
            position: absolute;
            right: 6%;
            top: 16px;
            border: none;
            border: 1px solid #E7E7E7;
            border-radius: 2px;
        }
    }

    @media all and (min-width: 400px) and (max-width: 800px){
        .el-first {
            margin-left: 6.6666%;
        }
        .el-first-else {
            margin-left: 6.6666%;
        }
        .col-width {
            width: 40%;
            display: inline-flex;
            flex-direction: row;
            margin-bottom: 20px;
            -webkit-transition: width 1s ease;
            -moz-transition: width 1s ease;
            -o-transition: width 1s ease;
            -ms-transition: width 2s ease;
            transition: width 1s ease;
        }
        .navbar input {
            float: right;
            position: absolute;
            right: 6%;
            top: 16px;
            border: none;
            border: 1px solid #E7E7E7;
            border-radius: 2px;
        }
    }

    @media all and (max-width: 400px) {
        .col-width {
            width: 100%;
            /*display: inline-flex;*/
            /*flex-direction: row;*/
            margin-bottom: 20px;
            -webkit-transition: width 1s ease;
            -moz-transition: width 1s ease;
            -o-transition: width 1s ease;
            -ms-transition: width 2s ease;
            transition: width 1s ease;
        }
        .navbar input {
            float: right;
            position: absolute;
            right: 6%;
            top: 16px;
            border: none;
            border: 1px solid #E7E7E7;
            border-radius: 2px;
        }
    }



    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                dt: [
                    {
                        bb:'cbb',
                        mm:'amm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    },
                    {
                        bb:'bbb',
                        mm:'bmm'
                    }
                ]
            };
        }
    }
</script>