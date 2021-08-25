new Vue({
    el: '#app',
    data: {
        unit: { name: '一兆', size: 1000000000000 }
    },
    created: function () {
    },
    methods: {
        onChange: function () {
            console.log(this.unit.name + ' : ' + this.unit.size);
        }
    }
});
