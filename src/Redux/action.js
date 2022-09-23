import { LIE, LIL, LIS, LOS, SIGN_UP } from "./actionType"
import axios from "axios"



export const Login_loading=()=>{
    return{
        type:LIL
    }
}

export const Login_error=()=>{
    return{
        type:LIE
    }
}

export const Login_success=(payload)=>{
    return{
        type:LIS,
        payload
    }
}

export const LogOut_success=()=>{
    return{
        type:LOS
    }
}

export const Sign_Up=(payload)=>{
    return{
        type:SIGN_UP,
        payload
    }
}

export const Loging_in=(payload)=>(dispatch)=>{
    console.log("hello")
    console.log(payload)
 dispatch(Login_loading())
 axios({
    method:"post",
    url:"https://masai-api-mocker.herokuapp.com/auth/login",
    data:payload
})
.then((res)=>{console.log(res);dispatch(Login_success(res.data.token))})
.catch((err)=>{dispatch(Login_error());console.log("err")})
}