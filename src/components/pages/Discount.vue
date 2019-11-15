<template>
    <div id="discount">
        <div class="container">
        <div class="mb-3">優惠專區</div>
            <div class="row">
                <router-link tag="div" to="" class="col-md-4 mb-4">
                    <div class="border-0 shadow-md shop_info box">
                        <img src="../../images/discount/pai.jpg">
                        <div class="info">
                            <p>NEWS | MEMORY GAME翻牌對對碰</p>
                            <button>PLAY GAME</button>
                        </div>
                    </div>
                </router-link>
                <router-link tag="div" to="" class="col-md-4 mb-4">
                    <div class="border-0 shadow-md shop_info box">
                        <img src="../../images/discount/laba.jpg">
                        <div class="info">
                            <p>NEWS | 不給糖就搗蛋 萬聖節拉霸GAME</p>
                            <button>PLAY GAME</button>
                        </div>
                    </div>
                </router-link>
                <router-link tag="div" to="" class="col-md-4 mb-4">
                    <div class="border-0 shadow-md shop_info box">
                        <img src="../../images/discount/turn.jpg">
                        <div class="info">
                            <p>NEWS | HAPPY BIRTHDAY轉轉雙十國慶</p>
                            <button>PLAY GAME</button>
                        </div>
                    </div>
                </router-link>
                <router-link tag="div" to="" class="col-md-4 mb-4">
                    <div class="border-0 shadow-md shop_info box">
                        <img src="../../images/discount/scratch.png">
                        <div class="info">
                             <p>NEWS | 刮出沁涼一夏 ♥ 連假小確幸</p>
                            <button>PLAY GAME</button>
                        </div>
                    </div>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" second>
    #discount{
        .box{
            padding: 2%;
            background: #2c2c3232;
            text-align: center;
            border-radius:10px;
            cursor: pointer;
        }
        .info{
            p{
                margin:2% auto;
                line-height:1.2rem;
                text-align:justify;
                color:#fff;
            }
            button{
                background-color: #70c7be;
                border-radius: 6px;
                border: 0;
                color: #ffffff !important;
                display: inline-block;
                font-weight: 400;
                height: 2.85em;
                line-height: 2.95em;
                padding: 0 1.5em;
                text-align: center;
                text-decoration: none;
                white-space: nowrap;
                width: 100%;
                &:hover{
                    opacity: 0.7;
                }
            }
        }
    }
</style>

