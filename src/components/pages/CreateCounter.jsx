import CreateCounterForm from "../CreateCounterForm"
import { getCounters } from "../../firebase/db"
import {useEffect, useState } from 'react'
import styles from './CreateCounter.module.css'

function CreateCounter(){

const [count, setCount] =useState(0)

  useEffect(()=>{
    async function checkLimit(){
    const  data = await getCounters()
      console.log('zenData', data.length)
      setCount(data.length)
    }
    checkLimit()

    
  },[])


    return <div className={styles.container}>

            <CreateCounterForm/>
          </div>
}


export default CreateCounter