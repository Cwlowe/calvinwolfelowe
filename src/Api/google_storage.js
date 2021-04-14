import firebase from './firebase.js';
import "firebase/storage";

export const get_Storage_images = ()=>{
    let storage = firebase.storage();
    let storageRef = storage.ref('photography');
    let images = [];
    storageRef.listAll()
    .then((res)=>{
        res.items.forEach((item)=>{
            storageRef.child(item.name).getDownloadURL()
            .then((url)=>{
                images.push(url)
            })
        })
    }).catch((err)=>{
        console.log(err)
    })
    return images
}

 export const  get_Storage_image = async (location)=>{
    let storage = firebase.storage();
    let imageRef = storage.ref(location);
    let image = {}
    imageRef.getDownloadURL()
    .then((url)=>{
        image = {url:url}
    }).catch((error)=>{
        switch (error.code) {
            case 'storage/object-not-found':
                image = {url:undefined, message:"Item not found",error:error.code};
                break;
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
                image = {url:undefined, message:"No permission",error:error.code};
                break;
            case 'storage/canceled':
                image = {url:undefined, message:"Not uploaded",error:error.code}
                break;
            case 'storage/unknown':
                image = {url:undefined, message:"Unkown error",error:error.code}
                break;
            default:
                image = {url:undefined, message:error.code}
                break;
        }
    })
    return new Promise(
        resolve=>{
            setTimeout(function() {
            resolve(image)
        }, 1000)
    })
}