app.component('list-photo',{
    emits:['show-images','show-img','toggle-done'],
    props: {
        cartoon:{
            type: Array,
            require: true
        },
        'filter-search': Array,
        'search-found': Boolean
    },
    data(){
        return{
            showImg: false,
            imgIndex: 0  
        }
    },
    /*html*/
    template:
    `
    <div class="flex justify-between">
      <div></div>
      <div v-for="(cartoon,index) in filterSearch">
        <img :src="cartoon.image" v-on:dblclick="toggleDone(index)" @click="showImages(index)" class="h-64 w-80 ml-20 mr-36"/>
        <div class="flex">
        <div class="ml-20 text-lg">{{cartoon.name}}</div>
        <i class="material-icons text-red-400 ml-4"  v-show="cartoon.done">
          favorite
        </i>
      </div>
      </div>
      <div></div>
    </div>
    <div v-if="searchFound" class="text-center mt-4 text-4xl">Sorry... But Not Found</div>
    `,
    methods: {
        toggleDone(index){
            this.$emit('toggle-done',index)
        },
        showImages(index){
            this.imgIndex = index
            this.showImg = true
            this.$emit('show-images',this.imgIndex);
            this.$emit('show-img',this.showImg)
        }
    }
})