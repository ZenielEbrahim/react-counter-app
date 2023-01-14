import { updateCounter } from "../firebase/db"
import FormPartial from "./FormPartial"
import UpdateCounter from "./pages/UpdateCounter"
import {useNavigate} from 'react-router-dom'
import styles from './Form.module.css'

function UpdateCounterForm(props){

    const navigate = useNavigate()

    function handleFormSubmit(e){
        e.preventDefault()
        const title = e.target.title.value
        const count = e.target.count.value
        updateCounter(props.counterId,{title,count})
        navigate('/')
        console.log(title, count,props)
    }
console.log('props: ', props)
return <div className={styles.container}>
<form onSubmit={e=>handleFormSubmit(e)} >
<FormPartial title={props.title} count={props.count}/>  
<div className={styles.buttonControl}>
<input type="submit" value="Update" />
</div>

</form>
</div>



}


export default UpdateCounterForm