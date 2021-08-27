new Vue({
    el: '#app',
    data: {
        show_menu: false,
        pos : {
            left: 0,
            top: 0,
        }
    },
    created: function () {
    },
    methods: {
        onRightClick: function (e) {
            console.log("onRightClick");
            this.pos = {
                top: e.pageY + 'px',
                left: e.pageX + 'px',
            }
            this.show_menu = true;
            console.log(`top: ${this.pos.top}, left: ${this.pos.left}`);
        },
        onClick: function (e) {
            console.log("onClick")
            this.show_menu = false;
        }
    }
});
