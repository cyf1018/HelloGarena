<template>
    <div class="page">
        <div class="pcTop">
            <img class="bg" alt="" v-lazy="require('../../static/img/bg.png')" />
            <img class="logo" src="../../static/img/logo.png" alt="" />
            <div class="pcNav">
                <a v-for="(item, index) in navList" :key="index" :href="item.path" :class="{ on: index == navIndex }">{{ item.name }}</a>
            </div>
        </div>
        <div class="mTop">
            <img class="logo" src="../../static/img/logo.png" alt="" />
            <div class="menus">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="content">
            <div class="character">
                <div class="t"></div>
                <div class="m">CHARACTER</div>
                <div class="b"></div>
            </div>
            <div class="imgList">
                <ul>
                    <template v-if="mockData.mainList">
                        <li v-for="(item, index) in mockData.mainList" :key="index" class="nomalLi">
                            <img v-lazy="item.url" alt="" />
                            <div class="tip">{{ item.info }}</div>
                        </li>
                    </template>
                    <li v-if="mockData.smallList" class="lastli">
                        <ul class="miniUl">
                            <li v-for="(item, index) in mockData.smallList" :key="index" class="miniLi">
                                <img v-lazy="item.url" alt="" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="layer">
            <img class="tipImg" alt="" :src="require('../../static/img/scape.png')" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            navIndex: 0,
            navList: [
                { name: 'HOME', path: '/' },
                { name: 'NEWS', path: '/' },
                { name: 'WEAPONS', path: '/' },
                { name: 'MAP', path: '/' },
                { name: 'CHARACTERS', path: '/' },
                { name: 'WALLPAPER', path: '/' }
            ],
            mockData: {
                mainList: [
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' }
                ],
                smallList: [
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' },
                    { url: '../../static/img/img-1.jpg', info: 'test......' }
                ]
            }
        };
    },
    mounted() {},
    computed: {},
    methods: {
        // 第三题 原生Ajax请求
        AjaxRequest() {
            let request = new XMLHttpRequest();
            request.open('get', '/xxx');
            request.send();
            request.onreadystatechange = () => {
                if (request.responseState === 4) {
                    if (request.satatus >= 200 && request.status < 300) {
                        let object = window.JSON.parse(request.responseText);
                        console.log('请求成功', object);
                    } else if (request.status >= 400) {
                        console.log('请求失败');
                    }
                }
            };
        }
    }
};
</script>

<style lang="less" scoped>
.page {
    background: rgb(29, 37, 40);
    color: #fff;
    overflow: hidden;
    .pcTop {
        width: 100%;
        height: 260px;
        position: relative;
        z-index: 1;
        background: #efefef;
        .bg {
            width: 100%;
            height: 100%;
        }
        .bg[lazy='loading'] {
            width: 540px;
            height: 134px;
            .center;
            & + img {
                opacity: 0;
            }
        }
        .logo {
            width: 270px;
            height: 60px;
            position: absolute;
            z-index: 2;
            bottom: 60px;
            left: 12%;
        }
        .pcNav {
            .flex-start;
            width: calc(100% - 100px);
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            .centerX;
            top: 40px;
            &:before {
                content: '';
                width: 10px;
                height: 40px;
                background: rgb(226, 158, 51);
                border-radius: 5px 0 0 5px;
                position: absolute;
                left: -10px;
            }
            &:after {
                content: '';
                width: 10px;
                height: 40px;
                background: rgb(226, 158, 51);
                border-radius: 0 5px 5px 0;
                position: absolute;
                right: -10px;
            }
            a {
                text-decoration: none;
                color: #fff;
                padding: 10px;
                margin: 10px;
                font-weight: bold;
                &:hover,
                &.on {
                    color: rgb(226, 158, 51);
                }
            }
        }
    }
    .mTop {
        width: 100%;
        height: 50px;
        background: rgb(18, 19, 19);
        position: relative;
        .flex-start;
        &:before {
            content: '';
            width: 10px;
            height: 50px;
            background: rgb(226, 158, 51);
            position: absolute;
            left: 0px;
        }
        img {
            /* width: 120px; */
            height: 34px;
            padding-left: 25px;
        }
        .menus {
            width: 60px;
            height: 50px;
            background: rgb(226, 158, 51);
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .line {
                width: 20px;
                height: 3px;
                background: #fff;
                & + .line {
                    margin-top: 4px;
                }
            }
        }
    }
    .content {
        margin-top: 70px;
        border-top: 1px solid #505050;
        padding-bottom: 100px;
        position: relative;
        .character {
            .centerX;
            top: -2vw;
            .t {
                width: 0;
                border-right: 1vw solid rgb(14, 18, 21);
                border-top: 2vw solid transparent;
                border-bottom: 2vw solid transparent;
                float: left;
            }
            .m {
                width: 20vw;
                height: 4vw;
                background-color: rgb(14, 18, 21);
                float: left;
                color: #fff;
                font-weight: bold;
                text-align: center;
                line-height: 4vw;
                font-size: 1.5vw;
            }
            .b {
                width: 0;
                border-left: 1vw solid rgb(14, 18, 21);
                border-top: 2vw solid transparent;
                border-bottom: 2vw solid transparent;
                float: left;
            }
        }
        .imgList {
            width: 1200px;
            margin: 80px auto 0;
            ul {
                .flex-start;
                flex-wrap: wrap;
                margin: -45px;
                &.miniUl {
                    margin: -23px;
                }
                li {
                    width: 350px;
                    height: 350px;
                    position: relative;
                    margin: 40px;
                    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.5);
                    &.lastli {
                        box-shadow: none;
                    }
                    &.nomalLi {
                        transition: all 0.5s ease;
                        &:hover {
                            transform: scale(1.05);
                            cursor: pointer;
                        }
                        .tip {
                            width: 100%;
                            height: 8vw;
                            background: rgba(0, 0, 0, 0.85);
                            position: absolute;
                            bottom: 0;
                            padding: 2vw;
                            box-sizing: border-box;
                        }
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    img[lazy='loading'] {
                        width: 270px;
                        height: 68px;
                        .center;
                    }
                    &.miniLi {
                        width: 150px;
                        height: 150px;
                        margin: 23px;
                        img[lazy='loading'] {
                            width: 135px;
                            height: 34px;
                            .center;
                        }
                        transition: all 0.5s ease;
                        &:hover {
                            transform: scale(1.05);
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .layer {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        .tipImg {
            height: 60vw;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            transform: rotate(-90deg);
            animation: myRotate 1s linear;
        }
    }
}

@keyframes myRotate {
    0% {
        transform: rotate(-90deg);
    }

    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-90deg);
    }
}
@-webkit-keyframes myRotate {
    0% {
        transform: rotate(-90deg);
    }

    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-90deg);
    }
}

/*PC*/
@media screen and (min-width: 960px) {
    .page {
        min-width: 1200px;
        min-height: 100vh;
        .layer,
        .mTop,
        .tip {
            display: none;
        }
    }
}

/*手机*/
@media screen and (max-width: 600px) {
    .page {
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        .pcTop {
            display: none;
        }
        .content {
            border-top: 1px solid rgb(13, 13, 15);
            .character {
                .centerX;
                top: -4vw;
                .t {
                    border-right: 3vw solid rgb(14, 18, 21);
                    border-top: 4vw solid transparent;
                    border-bottom: 4vw solid transparent;
                }
                .m {
                    width: 30vw;
                    height: 8vw;
                    line-height: 8vw;
                }
                .b {
                    border-left: 3vw solid rgb(14, 18, 21);
                    border-top: 4vw solid transparent;
                    border-bottom: 4vw solid transparent;
                }
            }
            .imgList {
                width: 62.5vw;
                ul {
                    &.miniUl {
                        margin: -4vw;
                    }
                    li {
                        width: 62.5vw;
                        height: 62.5vw;
                        &.miniLi {
                            width: 27vw;
                            height: 27vw;
                            margin: 4vw;
                        }
                    }
                }
            }
        }
    }
}

/*平板*/
@media screen and (min-width: 600px) and (max-width: 960px) {
    .page {
        width: 100%;
        min-height: 100vh;
        .pcTop,
        .layer {
            display: none;
        }
        .content {
            border-top: 1px solid rgb(13, 13, 15);
            .character {
                .centerX;
                top: -3vw;
                .t {
                    border-right: 2vw solid rgb(14, 18, 21);
                    border-top: 3vw solid transparent;
                    border-bottom: 3vw solid transparent;
                }
                .m {
                    width: 24vw;
                    height: 6vw;
                    line-height: 6vw;
                }
                .b {
                    border-left: 2vw solid rgb(14, 18, 21);
                    border-top: 3vw solid transparent;
                    border-bottom: 3vw solid transparent;
                }
            }
            .imgList {
                width: 100vw;
                margin: 40px auto 0;
                ul {
                    margin: 0;
                    .flex-between;
                    &.miniUl {
                        margin: -2vw;
                        .flex-between;
                    }
                    li {
                        width: 40vw;
                        height: 40vw;
                        margin: 5vw;
                        &.miniLi {
                            width: 18vw;
                            height: 18vw;
                            margin: 2vw;
                        }
                    }
                }
            }
        }
    }
}

/*竖屏*/
@media screen and (orientation: portrait) {
    .layer {
        display: block;
    }
}

/*横屏*/
@media screen and (orientation: landscape) {
    .layer {
        display: none;
    }
}
</style>
