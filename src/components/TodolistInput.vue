<template>
    <input type="text" placeholder="你要做什么..." class="todolist-input" :value="value" @input="$emit('input',$event.target.value)" @keyup.enter="addItem">
</template>

<script>
export default {
    methods: {
        addItem(){
            this.checkInput() && this.$emit('addItem')
        },
        checkInput(){
            if(this.value.replace(/^[ ]+$/g,"").length==0){
                alert('请好好填写！')
                return false
            }
            return true
        }
    },
    props: [ 'value' ],
}
</script>

<style lang="less">
    .todolist-input{
        width: 100%;
        outline: none;
        border: none;
        font-size: 1rem;
        color: #7f8c8d;
        padding: 1rem 1.5rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
        border-radius: .5rem;
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .1);
    }
</style>