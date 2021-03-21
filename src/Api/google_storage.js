import firebase from "./firebase.js"
import "firebase/storage";

export const get_Storage_image = ()=>{
    let storage = firebase.storage();
    let storageRef = storage.ref('photography');
    let images = [];
    storageRef.listAll()
    .then((res)=>{
        res.items.forEach((item)=>{
            storageRef.child(item.name).getDownloadURL()
            .then((url)=>{
                console.log(url)
                images.push(url)
            })
        })
    }).catch((err)=>{
        console.log(err)
    })
    console.log("in storage.js", images)
    return images
}

