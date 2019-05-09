Vue.component('task-list',{
    template:`
        <div>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,

    data() {
        return {
            tasks:[
                {description:'Go to work',completed:false},
                {description:'Go to bank',completed:false},
                {description:'Go to store',completed:false},
            ]
        }
    }
})

Vue.component('task',{
    template:'<li><slot></slot></li>'
});

new Vue({
    el:'#root'
})