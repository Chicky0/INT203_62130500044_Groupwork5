app.component('view-photo',{
    props:{
        cartoon:{
            type: Array,
            require: true
        },
        'filter-search': Array,
        'img-index': Number,
        'show-img': Boolean
    },
    /*html*/
    template:
    `
    <div v-if="showImg" class="mb-20 flex justify-between">
    <div></div>
    <div class="flex bg-black"><img :src="filterSearch[imgIndex].image" class="h-72 w-96 mx-auto pl-6 py-2">
    <i class="material-icons text-4xl text-white" v-on:click="closeImages">clear</i>
    <br>
    </div>
    <div></div>
  </div>
    `,
    methods:{
        closeImages(){
            this.$emit('close-image')
        }
    }
})
