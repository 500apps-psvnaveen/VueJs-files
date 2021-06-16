const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        boxAClasses() {
            return ['demo', { active: this.boxASelected }];
        },
        boxBClasses() {
            return ['demo', { active: this.boxBSelected }];
        },
        boxCClasses() {
            return ['demo', { active: this.boxCSelected }];
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
                this.boxBSelected = false;
                this.boxCSelected = false;
            } else if (box === 'B') {
                this.boxASelected = false;
                this.boxBSelected = !this.boxBSelected;
                this.boxCSelected = false;
            } else {
                this.boxASelected = false;
                this.boxBSelected = false;
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');