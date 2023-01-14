// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries






import {
    getFirestore, collection, getDocs,addDoc, deleteDoc, doc, onSnapshot,
    query, where, orderBy, serverTimestamp, getDoc, updateDoc, increment
} from  'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprVHZEwhyFSbrSv5yfPap1p6NoIier6o",
  authDomain: "counter-26cbb.firebaseapp.com",
  projectId: "counter-26cbb",
  storageBucket: "counter-26cbb.appspot.com",
  messagingSenderId: "1073680437987",
  appId: "1:1073680437987:web:72082b1f75bd92ab7f2bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
const colRef = collection(db, 'counters')

//CREATE
async function addCounter(title,count=0){


    try {
        const slip = await addDoc(colRef,{
            title,count, createdAt:serverTimestamp()
        })
        console.log(slip) 
    } catch (error) {
        console.log('there was some err', error)
    }
   
 
    
      }

    

//READ

async function getCounters(){
   
    const docSnap = await getDocs(colRef);
    const counters = []
    docSnap.forEach(doc=>{
        counters.push({...doc.data(), id:doc.id})
    })
    return counters
 }                    
function getLiveCounters(callback){
    const unsub = onSnapshot(colRef, (shot) => {
        const counters= []
        shot.forEach(item=>{
            counters.push({...item.data(), id:item.id})
        })
        callback(counters)
     
    });
}

async function getCounter(id){
    const docRef = doc(db, "counters", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data()
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}
//UPDATE

async function updateCounter(id,updates={},size){

    if(size){
     updates =   {...updates, count:increment(size)}
    }
    const docRef = doc(db, "counters",id);

    try {
       await updateDoc(docRef, updates)
       
    } catch (error) {
        console.log('an err occurred while updating...', error)
    }
}


//DELETE
console.log(increment)

async function deleteCounter(id){

    
        await deleteDoc(doc(db, "counters", id));
 
   
}

export {getCounters, updateCounter, getLiveCounters,getCounter, addCounter, deleteCounter}
deleteCounter("j9Ql4nY4FG4ry983fvF5")