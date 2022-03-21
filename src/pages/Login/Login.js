import React from 'react'
import './Login.css'
import {LoginIlustration, logo} from '../../assets/icons/index'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <div className='loginContentLeft'>
            <div className='titleWrapper'>
                <img src={logo} alt=''/>
                <div className='verticalLine'></div>
                <h1>RI-PORT</h1>
            </div>
            <p>a better way to report</p>
        </div>
        <div className='loginContentRight'>
            <img src={LoginIlustration} alt=""/>
            <h1>Login to your account</h1>
            <form>
                <div className='emailInput'>
                    <label>Your email</label>
                    <input type="text" name="email" placeholder="gjposumah@gmail.com" required/>
                </div>
                <div className='passwordInput'>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="************" required/>
                </div>
                <Link to='/home'>
                <button>Sign in</button>
                </Link>
            </form>
            <div className='signUp'>
                <p>Not have account ? </p>
                <Link className='linkClass' to='register'>
                <button className='signUpButton'>Sign Up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}