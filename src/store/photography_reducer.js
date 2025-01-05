import {
    get_Storage_images,
    get_Storage_image
} from '../api/google_storage'

//Action types
const SET_PHOTOS = 'SET_PHOTOS'
const GET_PHOTO = 'GET_PHOTO'
//Initial State
const initialState = {}

//Action Creators
const setPhotos = (photos)=>
(
    {
        type: SET_PHOTOS,
        photos
    }
)

const getPhoto = (photoURL)=>(
    {
        type:GET_PHOTO,
        photoURL
    }
)

export const fetchPhotos = () =>{
    return async(dispatch) => {
        try {
            let photos = get_Storage_images()
            dispatch(setPhotos(photos))
        } catch (err){
          console.log(err)
        }
      }
};

export const fetchPhoto = (location)=>{
    return async(dispatch) =>{
        try{
            let imageurl = await get_Storage_image(location)
            dispatch(getPhoto(imageurl))
        }catch(err){
            console.log(err)
        }
    }
}

//Reducer
export default function workoutReducer(state = initialState, action){
    switch(action.type){
        case SET_PHOTOS:
            return {...state, photos:action.photos}
        case GET_PHOTO:
            return{...state, photoURL: action.photoURL}
        default:
            return state
    }
}