<template>
    <ul class="list-group col-md-4">
        <VideoListItem             
            v-for="video in videos"
            :video="video"
            :key="video.etag"
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
    name:'VideoList', 
    methods:{
        onVideoSelect (video){
            this.$emit('videoSelect', video)
        }
    },  
    components:{
        VideoListItem
    },
    props: ['videos']
}
</script>

<style>

</style>
