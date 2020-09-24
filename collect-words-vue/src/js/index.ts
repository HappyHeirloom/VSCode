new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        word: "",
        greeting: "",
        words: []
    },
    methods: {
        saveWord(){
            if(this.word == ""){
                alert("Enter a word.")
            }else{
                this.words.push(this.word)
            }
        },
        clearArray(){
            this.words = []
        }

    }
})