new Vue({
    el: '#app',
    data: {
      
    },
    created: function () {
    },
    methods: {
        onParentClicked: function (e) {
            console.log("parent");
        },
        onMyClicked: function (e) {
            console.log("my");
        },
        onChildClicked: function (e) {
            console.log("child");
        }
    }
});
