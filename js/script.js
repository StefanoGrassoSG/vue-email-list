
const { createApp } = Vue;

createApp({
    data() {
        return {
            mail: [

            ]
        }
    },

    created() {
       for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const result = response.data;
            this.mail.push(result.response)
        }); 
       }
       console.log(this.mail)  
    }
    
}).mount('#app')