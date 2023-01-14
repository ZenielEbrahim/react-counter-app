
import FormPartial from "./FormPartial"
import { addCounter } from "../firebase/db"
import { useNavigate } from "react-router-dom"
import styles from './Form.module.css'
function CreateCounterForm(){

    const navigate = useNavigate()
    function handleFormSubmit(e){
        e.preventDefault()
        const title = e.target.title.value
        const count = e.target.count.value

        addCounter(title, count)
        navigate('/')
        console.log(title, count)
    }

return <div className={styles.container}>
<form onSubmit={e=>handleFormSubmit(e)} >
<FormPartial />  
<div className={styles.buttonControl} >
<input type="submit" value="Create" />
</div>

</form>
</div>



}


export default CreateCounterForm