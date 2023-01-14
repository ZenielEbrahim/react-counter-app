import styles from './DeleteModal.module.css'
import {useNavigate} from 'react-router-dom'
import { deleteCounter } from '../firebase/db'


function DeleteModal(props){

    const navigate = useNavigate()
    function handleDelete(){
        deleteCounter(props.counterId)
        navigate('/')
    }
    return <div className={styles.innerContainer}>

        <div>
            <h1>Are you sure you want to delete Counter?</h1>
        </div>
        <div className={styles.buttonControl}>
            <div>< button  onClick={()=>handleDelete()}>Delete</button></div>
            <div><button onClick={()=>{navigate('/')}}>Cancel</button></div>
        </div>
    </div>
}


export default DeleteModal