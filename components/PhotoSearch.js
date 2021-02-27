app.component('search',{
    props: {
        cartoon:{
            type: Array,
            require: true
        }
    },
    data(){
        return{
            click: false,
            input: ''
        }
    },
    /*html*/
    template:
    `
    <div class="text-center">
      <div v-if="click" class="text-center mb-10">
        <input v-model="input" @input="search" class="bg-gray-100 pl-16 pr-20 py-2 ml-14 text-center text-gray-800 border-2" 
        placeholder="Enter Text For Search" type="text">
        <button class="bg-blue-300 ml-4 py-2 rounded-sm p-2 text-gray-500" v-on:click="searchinput">Cancel</button>
      </div>
      <i class="material-icons text-4xl mb-10 mr-80" v-on:click="searchinput" v-else>search</i>
      </div>
    `,
    methods:{
        searchinput(){
            this.click = !this.click;
            this.input = '';
            this.$emit('search',this.input);
        },
        search(){
            this.$emit('search',this.input);
        }
    }
})