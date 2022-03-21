import React from 'react'
import './Register.css'
import { LoginIlustration, logo } from '../../assets/icons'
import {Link} from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
      <div className='registerContentLeft'>
            <div className='titleWrapper'>
            <img src={logo} alt=''/>
            <div className='verticalLine'></div>
            <h1>RI-PORT</h1>
          </div>
          <p>a better way to report</p>
      </div>
      <div className='registerContentRight'>
          <img src={LoginIlustration} alt=''/>
          <h1>Create Your Account</h1>
          <form>
         
              <div className='usernameInput'>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username"></input>
              </div>
              <div className='emailInput'>
                <label>Your Enail</label>
                <input type="text" name="email" placeholder='gjposumah@gmail.com'></input>
              </div>
          
            
            <div className='ktpInput'>
              <label>KTP ID </label>
              <input type="text" name="ktpId" placeholder='123123*****'></input>
            </div>
            <div className='passwordInput'>
              <label>Password</label>
              <input type="password" name="password" placeholder='***********'></input>
            </div>
            <Link to='/home'>
                <button>Sign Up</button>
              </Link>
          </form>
      </div>
    </div>
   
  )
}
