<template>
    <div class="container">
        <h3>Video Browser App</h3>
        <hr />
        <SearchBar @termChange="onTermChange"></SearchBar>
        
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


//Youtube API Key
const API_KEY = 'AIzaSyAqBfR0fnwBGs27tc109XcNIt_8eCffRz4';//'<Google API KEY>';

export default {
    name:'App',
    components: {
        SearchBar, VideoList, VideoDetail
    },
    data() {
        return { videos: [], selectedVideo: null }
    },
    methods: {
        onVideoSelect(video){
            this.selectedVideo = video;
        },
        onTermChange:function(searchTerm){
            //https://www.googleapis.com/youtube/v3/search
            //file:///C:/wamp64/www/Vue-Projects/video-browser/src/stubbed/youtube.json
            
            //console.log("Count - "+searchTerm.length)
            if(searchTerm.length > 6){
                axios.get('https://www.googleapis.com/youtube/v3/search',{
                    params:{
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                }).then(response => {
                    this.videos = response.data.items
                })
            }
        }
    }
}
</script>
