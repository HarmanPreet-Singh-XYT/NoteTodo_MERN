import React,{useContext} from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'
const Login_Form = () => {
  const {setShowLogin} = useContext(ShowCard_Cont)
  const {login,setLogin} = useContext(Login_cont)
  return (
    <>
    <form className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter Email">
						<input className="input100" type="email" name="username" placeholder="Email"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="in-cbk" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="la-cbk">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button onClick={()=>setShowLogin(false)} className="login100-form-btn">
							Demo
						</button>
						<button onClick={()=>setLogin(false)} className="login100-form-btn">
							Sign Up
						</button>
						<button className="login100-form-btn">
							Login
						</button>
						<button className="login100-form-btn">
							Local Storage
						</button>
					</div>

					<div className="text-center p-t-90">
						<a className="txt1" href="#">
							Forgot Password?
						  </a>
              </div>
            </form>
    </>
  )
}

export default Login_Form;