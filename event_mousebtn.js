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
        // 親div要素の外側をクリックされたときにもメニューを消すため
        window.addEventListener('click', this.hideMenu);
    },
    methods: {
        showMenu: function (e) {
            console.log("showMenu");
            this.pos = {
                top: e.pageY + 'px',
                left: e.pageX + 'px',
            }
            this.show_menu = true;
            console.log(`top: ${this.pos.top}, left: ${this.pos.left}`);
        },
        hideMenu: function (e) {
            console.log("hideMenu")
            this.show_menu = false;
        }
    }
});
