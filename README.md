Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione: Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1 Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

SCOMPOSIZIONE PROBLEMA
>Definisco un array di oggetti con 2 proprietà (6/7 oggetti)
>Creo l'app vue
    >>inserisco as suo interno l'array di oggetti che abbiamo appena creato
>Definisco la destinazione delle informazioni nel dom 
>preparo lo stile finale della mia todo list (che poi andro a sostituire con un ciclo v-for con gli elementi dell'array)
    >>metto a vista gli elementi attivi nel dom 
        >>>Definisoc le condizioni per le quali se il valore della proprietà done è true, applico una decorazione per sbarrare il testo corrispondente
    >>Aggiungo la funzionalità (metodo) per cancellare la task al click di un pulsante dedicato 
        >>>Al click del pulsante passo l'indice dell'elemento cliccato 
        >>>Attraverso questo indice, recupero l'elemnto corrispondente nell'array 
        >>>Modifico il valore booleano 
        >>>attraverso il binding della classe, verifico che classe aggiungere o rimuovere in base al valore del valore booleano 
    >>Gestisco il campo imput ed il pulsante legato ad esso 
        >>>definisco un elemento con valore null
        >>>creo la funzione per aggungere il contenuto dell'input all'elemento appena creato
        >>>Procedo anche lo la pulizzia della barra imput 
