<template>
    <div class="todolist-item" :class="{'item-completed':isCompleted}">
        <div class="todolist-item-content">
            <slot></slot>
        </div>
        <div class="todolist-item-options">
            <span class="iconfont icon-wancheng1 completed" title="完成" @click="completeItem" :style="{display:isCompleted ? 'none' : 'flex'}"></span>
            <span class="iconfont icon-bianji edit" title="编辑"  @click="editItem" :style="{display:isCompleted ? 'none' : 'flex'}"></span>
            <span class="iconfont icon-ashbin delete" title="删除" @click="deleteItem"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodolistItem',
    props: [ "isCompleted" ],
    methods: {
        completeItem(){
            this.$emit('completeItem')
        },
        deleteItem(){
            this.$emit('deleteItem')
        },
        editItem(){
            this.$emit('editItem')
        }
    }
}
</script>

<style lang="less">
    .todolist-item {
        background-color: #fff;
        padding: 1rem;
        text-align: left;
        margin: .5rem 0;
        font-size: 1rem;
        color: #2c3e50;
        // font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        position: relative;
        display: flex;
        align-items: center;
        cursor: default;

        &::before {
            content: "";
            width: 3px;
            height: 100%;
            background-color: #27ae60;
            position: absolute;
            left: 0;
            top: 0;
        }

        &:hover &-options {
            display: flex;
        }

        &:hover {
            box-shadow: 0 0 15px 5px rgba(0, 0, 0, .1);
        }

        &-content {
            flex: 1;
            overflow: hidden;
        }

        &-options {
            display: flex;
            justify-content: flex-end;
            font-size: 1rem;
            display: none;

            .iconfont {
                cursor: pointer;
                font-size: 1rem;
                margin: 0 5px;
            }

            .completed {
                color: #27ae60;
            }

            .edit {
                color: #7f8c8d;
            }

            .delete {
                color: #e74c3c;
            }
        }
    }

    .item-completed {
        color: #95a5a6;

        .todolist-item-content {
            text-decoration: line-through;
        }

        &::before {
            background-color: #95a5a6;
        }
    }
</style>