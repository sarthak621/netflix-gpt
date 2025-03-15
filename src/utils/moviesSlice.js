import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    // initialState:null,
    initialState: {
        nowPlayingMovies: [],  // ✅ Ensure it's an object with an empty array
        trailerVideo: null,
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
    }
})

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions
export default moviesSlice.reducer