new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun'
    },
    methods: {
        greet: function(time) {
            this
            return 'Good ' + time + ' ' + this.name;
        }
    }
});