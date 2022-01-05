<template>
    <div class="todolist">
        <TodolistInput @addItem="addItem" v-model="msg"/>

        <TodolistFilter />

        <TodolistItem v-for="item in items" :key="item.id" 
                        @deleteItem="deleteItem(item.id)" 
                        @completeItem="completeItem(item.id)"
                        @editItem="editItem(item)"
                        :isCompleted="item.completeTime != null">
            {{item.content}}
        </TodolistItem>

        <transition name="fade">
            <TodolistEditor v-if="showEditor" 
                            :msg="editContent"
                            @hideEditor="showEditor = false"
                            @setNewMsg="setNewMsg" />
        </transition>
    </div>
</template>

<script>
import TodolistInput from './TodolistInput'
import TodolistItem from './TodolistItem'
import TodolistFilter from './TodolistFilter'

const TodolistEditor = () => import('./TodolistEditor')

export default {
    data(){
        return {
            msg: '',
            items: [],
            showEditor: false,
            editContent: "",
            nowItem: null
        }
    },
    components: {
        TodolistInput,
        TodolistItem,
        TodolistFilter,
        TodolistEditor
    },
    methods: {
        getNowTime(){
            const date = new Date()
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2,'0')
            const day = date.getDate().toString().padStart(2,'0')
            const h = date.getHours().toString().padStart(2,'0')
            const m = date.getMinutes().toString().padStart(2,'0')
            const s = date.getSeconds().toString().padStart(2,'0')
            const id = date.getTime()
            return { id, createTime: `${year}-${month}-${day} ${h}:${m}:${s}` }
        },        
        addItem(){
            let item = {
                content: null,
                id: null,
                createTime: null
            }
            item = this.getNowTime()
            item.content = this.msg
            
            this.items.unshift(item)
            this.msg = ''
            this.save()
        },
        deleteItem(id){
            let opt = confirm('确认删除该项吗？')
            if(opt) {
                const filterArr = this.items.filter(item => item.id != id)
                this.items = filterArr
                this.save()
            }
        },
        completeItem(id){
            let index = this.items.findIndex(x => x.id === id)
            let optItem = this.items[index]
            optItem.completeTime = this.getNowTime().createTime
            this.items.splice(index,1)
            this.items.push(optItem)
            this.save()
        },
        editItem(item){
            this.editContent = item.content
            this.showEditor = true
            this.nowItem = item
        },
        setNewMsg(content){
            this.items.map(xx => {  
                if(xx.id == this.nowItem.id)
                    xx.content = content
            })
            this.nowItem = null
            this.showEditor = false
            this.save()
        },
        init(){
            this.items = JSON.parse(localStorage.getItem('clq'))
        },
        save(){
            localStorage.setItem('clq',JSON.stringify(this.items))
        }
    },
    created(){
        this.init()
    }
}
</script>

<style lang="less">
    .todolist {
        width: 60%;
        margin: 4rem auto;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>