
// CREO L'SPA VUE
const { createApp } = Vue;

createApp({
    data(){
        return{
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
        
    },
}).mount('#app');