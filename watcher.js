new Vue({
    el: '#app',
    data: {
        name: '',
        upperName: '',
    },

    created: function(){
        // delayFuncが最後に呼び出されてから 2000ms 経過後に getUpper を呼び出す。
        // 但し、2000ms以内に再度呼び出されたら、タイマーを2000msにリセットする。
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },

    watch: {
        name: function(newValue, oldValue) {
            // nameが変更されたら delayFunc を呼び出す
            this.delayFunc();
        }
    },

    methods: {
        getUpper: function () {
            this.upperName = this.name.toUpperCase();
        }
    }
})