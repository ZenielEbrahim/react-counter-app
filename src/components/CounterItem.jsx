import styles from './CounterItem.module.css'
import { updateCounter } from '../firebase/db'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function CounterItem(props){

    const navigate = useNavigate()
    const [count, setCount] = useState(props.count)
    if(count !== props.count)setCount(props.count)

    function handleIncrement(){

        updateCounter(props.id,{},1)
    }

    function handleDecrement(){
        updateCounter(props.id,{},-1)
    }
    return <div className={styles.container}>
        <div className={styles.title} id="title"><p className={styles.text} onClick={()=>navigate('/update_counter/'+props.id)}>{props.title} </p> </div>
       
        <div className={styles.counterBtns} id="counterBtns">
        <button onClick={handleDecrement} id="minus">-</button>
            <button onClick={handleIncrement} id="plus">+</button>
          
        </div>
        <div className={styles.count} id="count">{count}</div>
    </div>
}

export default CounterItem