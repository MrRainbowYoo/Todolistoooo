<template>
    <transition name="message">
        <div class="the-message" v-show="visible">
            <div class="message-wrap">
                <h3 class="message-title flex-content">友情提示</h3>
                <div class="message-content flex-content">{{msg}}</div>
                <div class="message-button-wrap flex-content">
                    <div class="message-button">
                        <span @click="handleAction('yes')" style="fontWeight:bold;">确认</span>
                    </div>
                    <div class="message-button cancel" v-show="showCancel">
                        <span @click="handleAction('no')">取消</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            showCancel: false,
            promiseStatus: null,
            msg: "你能不能写点东西啊？"
        }
    },
    methods: {
        myConfirm() {
            return new Promise((resolve,reject)=>{
                this.promiseStatus = { resolve,reject }
            })
        },
        handleAction(action) {
            this.visible = false
            if(action == 'yes')
                this.promiseStatus && this.promiseStatus.resolve(action)
            else
                this.promiseStatus && this.promiseStatus.reject(action)
            setTimeout(() => {
                this.$destroy()
                this.$el.parentNode.removeChild(this.$el)                
            }, 1000);
        }
    }
}
</script>

<style lang="less">
    .the-message {
        width: 100vw;
        height: 100vh;
        background-color: rgba(122, 122, 122, .6);
        // background-color: transparent;
        position: fixed;
        left: 0;
        top: 0;

        @keyframes moveUp {
            from{
                transform: translate(-50%,-30%);
            }
            to{
                transform: translate(-50%,-50%);
            }
        }

        .message-wrap {
            width: 300px;
            height: 180px;
            background-color: #fff;
            border-radius: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            cursor: default;
            animation: moveUp .5s ease-out;

            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .flex-content {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .message-content {
                align-items: flex-start;
            }

            .message-button-wrap {
                border-top: 1px solid rgb(226, 224, 224);

                .message-button {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .message-button span{
                    cursor: pointer;
                    color: #335eea;
                }

                .cancel{
                    border-left: 1px solid rgb(226, 224, 224);
                }                
            }
        }
    }

    .message-enter, .message-leave-to {
        opacity: 0;
    }

    .message-enter-active, .message-leave-active {
        transition: opacity .5s ease-in;
    } 
</style>