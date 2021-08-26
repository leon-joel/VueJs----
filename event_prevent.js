new Vue({
    el: '#app',
    data: {
        email: "test@email.com",
        result: null,
    },

    created: function () {
    },
    methods: {
        onSubmit: function (e) {
            if (!confirm("OK?")) {
                console.log("Sended!");
                e.preventDefault();
                return;
            }
            console.log("Sended!");
        },

        onCLick: function (e) {
            this.result = Math.floor(Math.random() * 100) + 1;
            console.log("clicked!")
        }
    }
});
