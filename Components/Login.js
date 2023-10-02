import React, { useContext } from 'react'
// import '../app/Login-Dependencies/vendor/bootstrap/css/bootstrap.min.css'
import '../app/Login-Dependencies/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../app/Login-Dependencies/fonts/iconic/css/material-design-iconic-font.min.css'
import '../app/Login-Dependencies/vendor/animate/animate.css'
import '../app/Login-Dependencies/vendor/css-hamburgers/hamburgers.min.css'
import '../app/Login-Dependencies/vendor/animsition/css/animsition.min.css'
import '../app/Login-Dependencies/vendor/select2/select2.min.css'
import '../app/Login-Dependencies/vendor/daterangepicker/daterangepicker.css'
import '../app/Login-Dependencies/css/main.css'
import '../app/Login-Dependencies/css/util.css'
import { ShowCard_Cont } from '@/Helpers/ShowCard'

const Login = () => {
	const {setShowLogin} = useContext(ShowCard_Cont)
  return (
    <>
    {/* <div className="blur-background login-back" style={{backgroundImage:"url(https://image.slidesdocs.com/responsive-images/background/3d-sticky-notes-arranged-on-cork-board-powerpoint-background_ed1a4ac792__960_540.jpg)"}}> */}
    	<div className="limiter">
		<div className="container-login100" style={{backgroundImage:"url(https://image.slidesdocs.com/responsive-images/background/3d-sticky-notes-arranged-on-cork-board-powerpoint-background_ed1a4ac792__960_540.jpg)"}}>
			<div className="wrap-login100">
				<form onSubmit={()=>setShowLogin(false)} className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter Email">
						<input className="input100" type="text" name="username" placeholder="Email"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Demo
						</button>
						<button className="login100-form-btn">
							Sign Up
						</button>
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-90">
						<a className="txt1" href="#">
							Forgot Password?
						</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        

        <div id="dropDownSelect1"></div>
        {/* </div> */}
    </>
  )
}

export default Login