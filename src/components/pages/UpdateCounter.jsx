import UpdateCounterForm from "../UpdateCounterForm"
import { getCounter } from "../../firebase/db"
import { useEffect,useState } from "react"
import {useParams, useNavigate} from 'react-router-dom'
import modalStyles from './../DeleteModal.module.css'
import DeleteModal from "../DeleteModal"
import styles from './../Form.module.css'
import updateStyles from './UpdateCount.module.css'


function UpdateCounter(){



const {id} = useParams()
let [title, setTitle] = useState('')
let [count, setCount]  = useState(0)
const [modalToggle, setModalToggle] = useState(false)
const navigate = useNavigate()


function handleDeleteRequest(){

  setModalToggle(!modalToggle)
  console.log(modalToggle, 'modal changed')
}
useEffect(()=>{



  async function loadData(){

    const counterId =  id
 const data = await getCounter(counterId)
 console.log('data: ', data)
  setTitle(data.title)
 setCount(data.count)
  }
console.log('updateCounter: ', {title, count})
loadData()
},[])
    return <div className={updateStyles.container}>
     
        {modalToggle && <div className={modalStyles.modalOn}> {<DeleteModal counterId={id} />}      </div>}
          <UpdateCounterForm counterId={id} title={title} count={count}/>
          <div className={styles.buttonControl} >
           <button onClick={handleDeleteRequest}>Delete</button>
          </div>
         
          </div>
}


export default UpdateCounter