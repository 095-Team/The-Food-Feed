import React, { useState } from 'react'
import "../css/Login.css"
import { Link } from 'react-router-dom';
import  Axios from 'axios'

function Login() {
  const [error,setError]=useState('');

   const onSubmit =async( values)=>{
    console.log("values:", values);
    setError("");

    try {
      const response = await Axios.post(
        "http://localhost:8080/",
        values
      )
    } catch (err) {
      // if (err && err instanceof AxiosError)
      //   setError(err.response?.data.message);
      // else if (err && err instanceof Error) setError(err.message);
  
      console.log("Error: ", err);
    }

   };
  return (
    <div className='Login'>
      <form className='login_form'>
      <div className='login_title'>Login</div>
        <input type ="text"
        placeholder='enter username'
        className='login_input'
        />
        
        <input type ="password"
          placeholder='enter password'
          className='login_input'/>
        <button className='login_button'>submit</button>
          Or
        <div className='login_oauth'>
          oauth2 login
        </div>
            <div className='forgotpwd'> <Link className="fgtpwdlink" to="/forgotPassword">forgot password?</Link>
                <h3>Dont have an account?</h3><Link className="fgtpwdlink" to ="/addProfile">register</Link>
            </div>
       </form>
       
      
      
    </div>


  )
}

export default Login;