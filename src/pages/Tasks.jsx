import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import { Login } from './Login'
import { useSelector } from 'react-redux'

// import DeleteIcon from '@mui/icons-material/Delete';

export const Tasks = () => {

    const [addedData,setAddedData]=useState("")
    // const [todos,setTodos]=useState([])
    const [subTask,setSubTask]=useState([])
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [type,setType]=useState("")
    const [subType,setSubType]=useState([])
    // const  {token}=useSelector(state=>state)

    // const [subType,setSubType]=useState({
    //     Official:false,
    //     Personal:false,
    //     Others:false
    // })
   

    const selectType=(e)=>{
    setType(e.target.value)
    console.log(type)
    }

    const handleCheckbox=(e)=>{
     const {name}=e.target
    //  setSubType(prev=>({...prev,[name]:checked}))
    setSubType([...subType,name])
    
    //  console.log(subType)
    }



    const handleAddbutton=()=>{

        const obj={
            title:addedData,
            status:false,
            id:nanoid()
        }

        setSubTask([...subTask,obj])
      
    }

    const handleDelete=(id)=>{
   
        const updatedDelete= subTask.filter((ele)=>ele.id !== id)
        setSubTask(updatedDelete)

    }

    const changeStatus=(id)=>{

        const updatedData= [...subTask].map((ele)=>ele.id===id?{...ele, status: !ele.status}:ele)
        setSubTask(updatedData)
        console.log(updatedData)
    }

   const createTask=()=>{

    const dataObj={
        title:title,
        description:desc,
        type:type,
        sub_type:subType,
        sub_task:subTask
    }

    axios({
        method:"post",
        url:"http://localhost:3000/Data",
        data:dataObj
    })
    .then(res=>{console.log(res.data)})

   }

  return (
    <div id='main'>
        <div id='first'>
         <div><input placeholder='Title' type={"text"} value={title} onChange={(e)=>{setTitle(e.target.value)}}></input></div>
         <div><input placeholder='Description' type={"text"} onChange={(e)=>{setDesc(e.target.value)}}></input></div>
         <div>

        <form onChange={selectType}>
        <input type={"radio"}  id="todo" name="radios" value={"Todos"}></input>
        <lable htmlFor="todo">Todo</lable><br/>
       
         <input type={"radio"} id="progress" name="radios" value={"Progress"}></input>
         <lable htmlFor="progress">In progress</lable><br/>
       
         <input type={"radio"} id="done" name="radios" value={"Done"}></input>
         <lable htmlFor="done">Done</lable>
         </form>
         </div>
         <div>
          
        <input type="checkbox" checked={subType.Official} name={"Official"} onChange={handleCheckbox}></input>
        <label>offical</label><br/>
         <input type="checkbox" checked={subType.Personal} name={"Personal"} onChange={handleCheckbox}></input>
         <label>Personal</label><br/>
         <input type="checkbox" checked={subType.Others} name={"Others"} onChange={handleCheckbox}></input>
         <label>Others</label><br/>
          
         </div>
        </div>
        <div id='second'>
            <div><input placeholder='Add Todo' onChange={(e)=>{setAddedData(e.target.value)}} value={addedData}></input><button onClick={handleAddbutton}>Add</button></div>
            <div>{subTask.map((item)=>{
                return <div style={{display:"flex",justifyContent:'space-around',gap:"10px",alignItems:"center"}}>
                       <input type={"checkbox"} onClick={()=>changeStatus(item.id)} checked={item.status}></input>
                       <h4>{item.title}</h4>
                       <button style={{height:"20px"}} onClick={()=>handleDelete(item.id)}>Delete</button></div>})}
                       </div>
       </div>
        <div id='third'>
            <div id='createTask'><button onClick={createTask}>Create a Task</button></div>
        </div>
    </div> 
  )
}
