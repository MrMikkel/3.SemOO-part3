Vue.createApp({

    data() {

        return {

            // add here

            stringToManipulate: null,
            original:null,
            lowercaser:null,
            uppercase:null,
            capitalized:null,
            endCapitalized:null,
            reversed:null
            

        }

    },

    methods: {

        // add here
        manipulate(){
            if (typeof this.stringToManipulate!="string") {
                this.stringToManipulate="Det var ikke en string"
            }
            this.original=this.stringToManipulate;
            this.lowercaser=this.stringToManipulate.toLowerCase();
            this.uppercase=this.stringToManipulate.toUpperCase();
            this.capitalized=this.stringToManipulate.charAt(0).toUpperCase() + this.stringToManipulate.slice(1).toLowerCase()
            this.endCapitalized=this.stringToManipulate.slice(0,-1).toLowerCase() + this.stringToManipulate.slice(-1).toUpperCase()
            this.reversed=this.stringToManipulate.split("").reverse().join("")

        }

    }

}).mount("#app")