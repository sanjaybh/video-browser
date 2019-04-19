<template>
    <li class="list-group-item media" @click="onVideoSelect">
       <img class="mr-3" :src="thumbnailURL" />
       <div class="media-body">
        {{ video.snippet.title }}
       </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    methods:{
        onVideoSelect(event){
            //console.log(event.target.value)
            this.$emit('videoSelect',this.video)
        }
    },
    computed:{
        thumbnailURL(){
            return this.video.snippet.thumbnails.default.url;
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }

    li:hover{
        background-color: #eee;
    }
</style>

