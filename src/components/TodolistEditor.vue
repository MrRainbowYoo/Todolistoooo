<template>
    <div class="todolist-editor">
        <div class="todolist-editor-wrap">
            <span class="close-editor" @click="$emit('hideEditor')">X</span>
            <TodolistInput v-model="newMsg" class="editor-input"/>
            <div class="btns">
                <button class="btn confirm-btn" @click="checkInput()&&$emit('setNewMsg',newMsg)">确认</button>
                <button class="btn" @click="$emit('hideEditor')">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import TodolistInput from './TodolistInput'

export default {
    data(){
        return {
            newMsg: this.msg
        }
    },
    components: { TodolistInput },
    props: [ 'msg' ],
    methods: {
        checkInput(){
            if(this.newMsg.replace(/^[ ]+$/g,"").length==0){
                alert('请好好填写！')
                return false
            }
            return true
        }        
    }
}
</script>

<style lang="less">
    .todolist-editor {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .3);
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &-wrap {
            width: 70%;
            height: 400px;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .3);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            .close-editor {
                position: absolute;
                right: 1rem;
                top: 1rem;
                cursor: pointer;
                color: #7f8c8d;
            }
        }

        .editor-input {
            width: 70%;
            margin-bottom: 0;
        }

        .btns {
            width: 40%;
            display: flex;
            justify-content: space-around;

            .btn {
                padding: .5rem 2rem;
                font-size: 1rem;
                border: none;
                cursor: pointer;
                border-radius: 1rem;
            }

            .confirm-btn {
                background-color: #335eea;
                color: #fff;

                &:hover {
                    background-color: #4e72eb;
                }
            }
        }
    }
</style>