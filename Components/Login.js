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
import Register from './Login/Register'
import Login_Form from './Login/Login-Form'
import { Login_cont } from '@/Helpers/Login-Cont'

const Login = () => {
  const {login} = useContext(Login_cont)
  return (
    <>
    {/* <div className="blur-background login-back" style={{backgroundImage:"url(https://image.slidesdocs.com/responsive-images/background/3d-sticky-notes-arranged-on-cork-board-powerpoint-background_ed1a4ac792__960_540.jpg)"}}> */}
    	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				  {login ? <Login_Form/> : <Register/>}
      </div>
    </div>
      </div>
        

        <div id="dropDownSelect1"></div>
        {/* </div> */}
    </>
  )
}

export default Login