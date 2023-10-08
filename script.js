const {createApp} = Vue;
console.log(axios);
createApp({
    data(){
        return{
            titolo: 'Ciao Axios!',
            risultatoChiamataAxios: []
        }
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                console.log(risposta.data.response)
                this.risultatoChiamataAxios.push(risposta.data.response);
            })
            .catch((error) => {
                console.log(errore.code);
                this.risultatoChiamataAxios = 'Errore: ' + errore.code;
            });
        }
    }
}).mount('#app')