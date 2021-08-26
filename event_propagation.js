new Vue({
    el: '#app',
    data: {
      
    },
    created: function () {
    },
    methods: {
        onParentClickedCapture: function (e) {
            console.log("capture: parent");
        },
        onMyClickedCapture: function (e) {
            console.log("capture: my");
        },
        onChildClickedCapture: function (e) {
            console.log("capture: child");
        },
        onChildClicked: function (e) {
            console.log("bubble : child");
        },
        onMyClicked: function (e) {
            console.log("bubble : my");
        },
        onParentClicked: function (e) {
            console.log("bubble : parent");
        },
    }
});
