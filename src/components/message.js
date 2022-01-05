import Vue from 'vue';
import MessageComponent from './TheMessage.vue'

let MessageConstructor = Vue.extend(MessageComponent);

const Message = (options) => {
    let instance = new MessageConstructor({
        data: {
            ...options,
        }
    });
    instance.$mount()
    document.body.appendChild(instance.$el)
    instance.visible = true

    return instance.myConfirm()
}

export { Message }