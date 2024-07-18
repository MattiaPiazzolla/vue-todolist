
// CREO L'SPA VUE
const { createApp } = Vue;

createApp({
    data(){
        return{
            // DEFINISCO UN VARIABILE, NELLA QUALE ANDRO A PUSHARE IL VALORE INSERITO CON IMPUT
            newTask: null,
            // DEFINISCO L'ARRAY DI OGGETTI
            todolist : [
                {
                    text: 'Lezione della mattina 09:30 - 13:00',
                    done: true,
                },
                {
                    text: 'Allenamento',
                    done: false,
                },
                {
                    text: 'Esercizi pomeridiani',
                    done: false,
                },
                {
                    text: 'Pausa caffe',
                    done: false,
                },
                {
                    text: 'Accompagnare Elisa a fare delle commissioni',
                    done: true,
                },
                {
                    text: 'Editare video per il 18',
                    done: false,
                },
                {
                    text: 'Uscire con Argo',
                    done: true,
                },
                
            ]
        }
    },
    methods: {
        // AGGIUNGO IL METODO CHE INVERTE IL VALORE DI DONE AL CLICK 
        checkDone(index){
            if (this.todolist[index].done) {
                this.todolist[index].done = false;
            } else {
                this.todolist[index].done = true;
            }
        },
        // DEFINISCO IL METODO DELETE TASK
        deleteTask(index){
            // VADO A PRENDERE L'ELEMENTO CHE DEVO ELIMINARE E GLI APPLICO SPLICE
            this.todolist.splice(index, 1);
        },
        // DEFINISCO IL METODO ADDNEWTASK
        addNewTask(){
            // PUSHO IL VALORE DI NEWTASK NELLA TODOLIST 
            this.todolist.push({text:this.newTask, done:false});
            // RESETTO IL CAMPO TESTO UNA VOLTA INSERITA LA NUOVA TASK
            this.newTask = null;
        }
        
    },
}).mount('#app');