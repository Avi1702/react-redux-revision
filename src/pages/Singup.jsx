import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate } from 'react-router-dom'
// import { SUCCESS } from '../Redux/actionType'
import { useDispatch, useSelector } from 'react-redux'
// import { Loading, Success } from '../Redux/action'
// import { Error } from '../Redux/action'



export const Singup = () => {

    const initialState={
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:""

    }
    const [signup,setSignup]=useState(initialState)
    const [err,setErr]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const {loading,error}=useSelector(state=>state)



    const handleChange=(e)=>{
     const   {name,value}=e.target
        setSignup((prev)=>(
            {...prev, [name] : value}
            ))
    }

    const handleSignUp=()=>{

        let isValid=true
        Object.values(signup).forEach(ele=>{
            if(!ele){
                isValid=false;
            }
        })

        if(!isValid){
            alert("Please Fill All Inputs")
        }

        
        axios(
            {
            method:"post",
            url:"https://masai-api-mocker.herokuapp.com/auth/register",
            data:signup
        })
        .then(res=>{setErr(res)})
        .catch((err)=>{dispatch(Error())})

        if(!err){
        navigate("/login")
        }
        else
        {
        alert("User already exits")
        }
        
        
        // .catch((err)=>console.log(err))
    }

  return (
    <div style={{marginTop:"50px"}}>
        {
            Object.keys(signup).map(el=>(
                <div >
                  <input placeholder={el} key={el}  name={el} value={signup.el} onChange={handleChange} ></input>
                </div>
            ))
        }
        <button onClick={handleSignUp} style={{marginTop:"30px"}}>SignUp</button>
        
    </div>
  )
}
