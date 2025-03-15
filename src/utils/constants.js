

export const LOGO=
   " https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const USER_AVATAR=
"https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTIONS={

        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
        },

}

export const IMG_CDN=
"https://image.tmdb.org/t/p/w780"

export const BG_URL=
"https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"

export const SUPPORTED_LANGAUGES=[
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},
  {identifier:"chinese",name:"Chinese"},

]



export const GEMINI_KEY=process.env.REACT_APP_GEMINI_KEY