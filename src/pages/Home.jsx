import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { Tasks } from './Tasks'

export const Home = () => {

  // const {token}=useSelector(state=>state)
  const [theData,setTheData]=React.useState([])

  const fetchTasks=()=>{

    axios({
      method:"get",
      url:"http://localhost:3000/Data"
    })
    .then((res)=>{setTheData(res.data)})
  }

  useEffect(()=>{
    fetchTasks()
    console.log("hi")
  },[])

  

  const todos= [...theData].filter((ele)=>ele.type==="Todos")
  // console.log(todos)
  const in_progress= [...theData].filter((ele)=>ele.type==="Progress")
  const done= [...theData].filter((ele)=>ele.type==="Done")

  
  return (
    <div id='tasks'>
      
    <div id="todo">
          {
           todos.map((item)=>
          {
          
            return <div>
              <h2 style={{color:"orange"}}>{item.type}</h2>
              <p>Title-->{item.title}</p>
              <p>Description-->{item.description}</p>
              <h2>Tags:</h2>
              <ul>
                {item.sub_type.map((item)=>{return <li>{item}</li>})}
              </ul>
              <h2>Tasks:</h2>
              <ul>
                {item.sub_task.map((item)=>{return <li>{item.title}</li>})}
              </ul>
             </div>
             }
          )
          }
    
    </div>

    <div id="progress">
    {
           in_progress.map((item)=>
          {
          
            return <div>
              <h2 style={{color:"red"}}>{item.type}</h2>
              <p>Title-->{item.title}</p>
              <p>Description-->{item.description}</p>
              <h2>Tags:</h2>
              <ul>
                {item.sub_type.map((item)=>{return <li>{item}</li>})}
              </ul>
              <h2>Tasks:</h2>
              <ul>
                {item.sub_task.map((item)=>{return <li>{item.title}</li>})}
              </ul>


            
             </div>
             }
          )
          }
    
    </div>
    <div id="done">
    {
           done.map((item)=>
          {
          
            return <div>
              <h2 style={{color:"green"}}>{item.type}</h2>
              <p> Title-->{item.title}</p>
              <p>Description-->{item.description}</p>
              <h2>Tags:</h2>
              <ul>
                {item.sub_type.map((item)=>{return <li>{item}</li>})}
              </ul>
              <h2>Tasks:</h2>
              <ul>
                {item.sub_task.map((item)=>{return <li>{item.title}</li>})}
              </ul>

            
             </div>
             }
          )
          }
    
    </div>
    </div>
  )

  }

