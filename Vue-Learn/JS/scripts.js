var app = new Vue({
    el: '#app',
    data: {
        list: [],
        taskName: '',
        disabled: true,
    },
    methods: {
        addTask(){
            this.list.push(this.taskName);
            this.taskName = '';
        },
        removeTask(index){
            this.list.splice(index, 1);
        },
        modifyTask(index){
            console.log(this.list[index]);
            this.list[index].disabled = false;
            console.log(this.list[index].disabled);
        },
        saveTask(){

        }
    }
});