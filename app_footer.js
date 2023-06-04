const app_footer = Vue.createApp(
    {
        data() {
            return {
                name: 'Laura',
                surname: 'Gonzalez',
                mail: 'laura.gonzmau@gmail.com',
                org: 'Mind Soul Heart'
            }
        }
    }
)

app_footer.mount('#app_footer')