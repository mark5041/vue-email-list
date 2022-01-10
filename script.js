

const app = new Vue (
    {
        el: '#app',
        data: {
            email: [],
        },
        methods: {

        },
        watch: 
        {

        },
        created()
        {
            for(let i = 0; i < 10; i++)
            {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        this.email.push(response.data.response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            console.log(this.email);
        }
    }
)
  