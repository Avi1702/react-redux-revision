import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Loading } from '../Redux/action'
import { Error } from '../Redux/action'
// import { Success } from '../Redux/action'
import { LogIn } from '../Redux/action'

export const Login = () => {
    const initialState={
        password:"",
        username:""
       
    }
    const [login,setLogin]=useState(initialState)
    // const [token,setToken]=useState("")
   const navigate=useNavigate()
   const dispatch=useDispatch()

   const {token}=useSelector(state=>state)
    // const {name,email,password,username,mobile,description}=login

    // console.log(Object.keys(initialState))

    const handleChange=(e)=>{
       

     const   {name,value}=e.target
  

    //  console.log(e.target.value,e.target.name)

        setLogin((prev)=>(
            {...prev, [name] : value}
            ))

    }

    const handleLogin=()=>{
        console.log(login)

        let isValid=true
        Object.values(login).forEach(ele=>{
            if(!ele){
                isValid=false;
            }
        })

        if(!isValid){
            alert("Please Fill All Inputs")
        }


        console.log("hi")

        // dispatch(Loading())

        axios(
            {
            method:"post",
            url:"https://masai-api-mocker.herokuapp.com/auth/login",
            data:login
        })
        .then((res)=>{console.log(res.data.token)})
        .catch((err)=>{dispatch(Error())})

        // console.log(token)

        if(token){
            console.log("done")

        navigate("/home")
        }
        else{
            console.log("not done")
        navigate("/login")
        }
        
        // dispatch(LogIn(res.data.token))
        // .catch((err)=>console.log(err))
    }

  return (
    <div style={{marginTop:"50px"}}>
          {
            Object.keys(login).map(el=>(
                <div >
                <input placeholder={el} key={el}  name={el} value={login.el} onChange={handleChange} ></input>
                </div>
            ))
        }
        <button onClick={handleLogin} style={{marginTop:"30px"}}>LogIn</button>
    </div>
  )
}
