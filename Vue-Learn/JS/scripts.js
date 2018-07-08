var app = new Vue({
    el: '#app',
    data: {
        list: [],
        taskName: ''
    },
    methods: {
        addTask(){
            let elem = this.taskName;
            this.list.push(elem);
            elem = '';
            console.log(this.list)
        },
        removeTask(index){
            this.list.splice(index, 1);
            console.log(index);
        }
    }
});