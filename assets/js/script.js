const {createApp} = Vue;

createApp({
    data() {
        return{
            title           : 'Pictures Carousel',
            pictures        : [
                            'assets/img/01.jpg',
                            'assets/img/02.jpg',
                            'assets/img/03.jpg',
                            'assets/img/04.jpg',
                            'assets/img/05.jpg',
            ],
            counter         : 0,
            removeOpacity   : 'spotlight',
            keepOpacity     : null,
            play            : null

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
        },

        // questa funzione fa in modo che, all'aumentare del contatore cambi anche 
        // l'immagine visualizzata con un intervallo di 3 secondi
        autoPlay () {
            this.play = setInterval(() => {
                this.counter++
                if (this.counter === this.pictures.length) {
                    this.counter = 0;
                }
            }, 3000);
        },

        // con questa funzione, che parte nel momento in cui si va col mouse sopra, viene 
        // clearato il setInterval
        mouseOver () {
            clearInterval(this.play)
        },
        // con questa funzione, che parte nel momento in cui si va VIA col mouse sopra, 
        // si fa ripartire il setInterval
        mouseOut () {
            this.autoPlay()
        }
    },

    mounted() {

        this.autoPlay()

    }

}).mount('#app');