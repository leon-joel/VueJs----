new Vue({
    el: '#app',
    data: {
        email: "test@email.com"
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
        }
    }
});
