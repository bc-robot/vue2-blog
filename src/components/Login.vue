<template>
    <div class="b-login">
        <div class="b-login-box">
            <div class="b-login-title">个人博客系统</div>
            <div class="b-form">
                <div class="b-username">
                    <input type="text" placeholder="请输入用户名">
                </div>
                <div class="b-password">
                    <input type="password" placeholder="请输入密码">
                </div>

                <div class="b-save">
                    <input type="checkbox">
                    <span>
                        记住密码
                    </span>
                </div>
                <button type="button" class="b-login-in">登录</button>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .b-login {
        position: relative;
        margin-top: 50px;
        border: 1px solid #BBEAE9;
        width: 60%;
        max-width: 700px;
        left: 20%;
        text-align: center;
        background: #AAE5EF;
        border-top-left-radius: 100px;
        border-bottom-right-radius: 100px;

        .b-login-box {
            margin: 40px;
        }

        .b-login-title {
            color: #FFF;
            margin-top: 40px;
            margin-bottom: 10px;
            font-size: 16px;
        }

        .b-form {
            width: 60%;
            margin: 0 auto;
            input[type="text"], input[type="password"] {
                margin-top: 10px;
                width: 100%;
                height: 30px;
                padding: 0 10px;
                border: none;
                border: 1px solid #B2E4E9;
                border-radius: 20px;
            }

            .b-save {
                text-align: left;
                font-size: 10px;
                color: #FFF;
                margin: 10px 0;
            }
            .b-login-in {
                border: none;
                width: 100%;
                height: 30px;
                border-radius: 20px;
                background: #50B4E9;
                font-size: 14px;
                color: #FFFFFF;
            }
        }
    }
</style>

<script>

</script>