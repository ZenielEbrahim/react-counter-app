import styles from './Form.module.css'
import {useState, useEffect} from 'react'

function FormPartial(props){

    console.log(props)
    const [title, setTitle] = useState(props.title || '')
  
    const [count, setCount] = useState(props.count || 0)
   
    useEffect(()=>{
        if(title !== props.title)setTitle(props.title)
        if(count !== props.count)setCount(props.count)
    },[props.title,props.count])
    function handleTitleChange(e){
        setTitle(e.target.value)
        console.log(e.target.value)
    }
    function handleCountChange(e){
        setCount(e.target.value)
        console.log(e.target.value)
    }
return <>

    <div className={styles.formControl}>
        <label className={styles.label}  htmlFor="title">Title</label>
        <input className={styles.titleInput} name='title' id='title' onChange={e=>handleTitleChange(e)} type="text" value={title} />
    </div>
    <div className={styles.formControl}>
        <label className={styles.label} htmlFor="count">Tally</label>
        <input className={styles.tallyInput} name='count' id='count' onChange={e=>handleCountChange(e)} type="number" step={1}  value={count}/>
    </div>
    </>
}

export default FormPartial