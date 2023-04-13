const {createApp} = Vue;

createApp({
    data() {
        return{
            title: 'Pictures Carousel',
            pictures : [
                'assets/img/01.jpg',
                'assets/img/02.jpg',
                'assets/img/03.jpg',
                'assets/img/04.jpg',
                'assets/img/05.jpg',
            ],
            counter: 0,
        }
    },

    methods: {
        arrow (isNext) {
            // utilizzo dell'operatore ternario per realizzare il toggle 
            isNext ? this.counter++ : this.counter--;
            // loop infinito che fa in modo che una volta arrivati all'ultima immagine
            // si torni alla prima
            if (this.counter === this.pictures.length) this.counter = 0;
            if (this.counter < 0) this.counter = this.pictures.length -1;
        }
    }
}).mount('#app');