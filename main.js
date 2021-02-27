const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',

            cartoon: [{image: 'images/Doraemon.jpg',name: 'Doraemon',done: false},
            {image: 'images/Mr-Bean.jpg',name: 'Mr.Bean' ,done: false},
            {image: 'images/Tom-and-jerry.jpg',name: 'Tom and Jerry' ,done: false}
        ], 
        click: false,
        input: '',
        searchFound: false,
        showImg: false,
        imgIndex: 0
        }
    },
    methods: {
        toggleDone(index){
            this.cartoon[index].done = !this.cartoon[index].done
        },
        search(search) {
          this.input = search;
        },
        searchinput(){
            this.click = !this.click;
            if(click = false){
                this.input = '';
            }
        },
        showImages(index){
            this.showImg = true,
            this.imgIndex = index
        },
        closeImages(){
            this.showImg = false
        }
    },
    computed: {
        countDone(){
            return this.cartoon.filter( t => t.done ).length
        },
        filterSearch(){
            this.searchFound = false;
            if(this.input == ''){
                return this.cartoon
            } else {
                let s = this.cartoon.filter(cartoon => this.input.toLowerCase().split(' ').every(v => cartoon.name.toLowerCase().includes(v)))
                if(s == ''){
                    this.searchFound = true
                } else {
                    return s
                }
            }
        }
    }

})


// Vue.createApp(app).mount('#app')