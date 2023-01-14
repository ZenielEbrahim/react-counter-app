
import CounterList from "../CounterList"
import {useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
function Dashboard(){

    const navigate = useNavigate()
    function handleAdd(){
        navigate('/create_counter')
    }
    return <div className={styles.dashboardStyles}>
   
    <CounterList />
    <button onClick={handleAdd}>Add</button>
    </div>
    //<CounterList/>
}

export default Dashboard