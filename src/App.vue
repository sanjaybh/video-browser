<template>
    <div class="container">
        <h3>Video Browser App</h3>
        <hr />
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
import axios from 'axios';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

//Youtube API Key
const API_KEY = 'AIzaSyBflVwHGn72p-LTlzFv3ixdrTYGWGa3fQs';

export default {
    name:'App',
    components: {
        SearchBar, VideoList
    },
    data() {
        return { videos: [] }
    },
    methods: {
        onTermChange:function(searchTerm){

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
</script>
