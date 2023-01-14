import {getCounters, getLiveCounters} from './../firebase/db'
import {useState, useEffect} from 'react'
import styles from './CounterList.module.css'
import CounterItem from './CounterItem'
function CounterList(){


    const [loading, setLoading] =useState(true)
    const [counterArr, setCounterArr] = useState([])
    const [test, setTest] = useState(0)

    
   function testFunction(arr){
    const random = Math.floor(Math.random()*8)
    setCounterArr(arr)
    setTest(random)
   }
    useEffect( ()=>{

        async function getItems(){
            try {
                const items = await getCounters()
                console.log('your items', items, 'end')
                setCounterArr(items)  
                setLoading(false)
            } catch (error) {
                console.log('an error occured...', error)
            }
            
        }
        getItems()
       getLiveCounters(testFunction)
     
    },[])
   
    return <div className={styles.container}>
    {loading && 'loading...'}
    {
        !loading && counterArr.map(item=><CounterItem key={item.id} id={item.id} title={item.title} count={item.count}/>)
    }
   
    </div>
}

export default CounterList