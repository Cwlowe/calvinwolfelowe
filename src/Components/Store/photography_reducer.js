import {get_Storage_image} from '../../Api/google_storage'

//Action types
const SET_PHOTOS = 'SET_PHOTOS'

//Initial State
const initialState = {}

//Action Creators
const setWorkouts = (photos)=>
(
    {
        type: SET_PHOTOS,
        photos
    }
)

export const fetchPhotos = () =>{
    return async(dispatch) => {
        try {
            let photos = get_Storage_image()
            dispatch(setWorkouts(photos))
        } catch (err){
          console.log(err)
        }
      }
};

//Reducer
export default function workoutReducer(state = initialState, action){
    switch(action.type){
        case SET_PHOTOS:
            return {...state, photos:action.photos}
        default:
            return state
    }
}