import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    // initialState:null,
    initialState: {
        nowPlayingMovies: [],  // ✅ Ensure it's an object with an empty array
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export const{addNowPlayingMovies,addTrailerVideo}=moviesSlice.actions
export default moviesSlice.reducer