new Vue({
    el: '#app',
    data: {
        name: 'test',
        upperName: '',
    },

    created: function () {
        // delayFuncが最後に呼び出されてから 2000ms 経過後に getUpper を呼び出す。
        // 但し、2000ms以内に再度呼び出されたら、タイマーを2000msにリセットする。
        // this.delayFunc = _.debounce(this.getUpper, 2000);

        let that = this;
        this.delayFunc = _.debounce(this.getUpper, 2000);
        let unwatch = this.$watch('name', function (newValue, oldValue) {
            that.delayFunc(), { immediate: true, };
        })
    },

    watch: {
        // name: {
        //     handler: function (newValue, oldValue) {
        //         // nameが変更されたら delayFunc を呼び出す
        //         this.delayFunc();
        //     },
        //     deep: true,
        //     // immediate: false,
        //     immediate: true, // ←一応動作はするが、trueだと「delayFuncが関数じゃない」というエラーが1回だけ発生する。createdが走るタイミングの問題？
        // },
        // computed: {
        //     upperName: function () {
        //         return this.name.toUpperCase();
        //     }
        // },
    },

    methods: {
        getUpper: function () {
            this.upperName = this.name.toUpperCase();
        },
    }
})
