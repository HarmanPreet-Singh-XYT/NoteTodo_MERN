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
import OTP from './Login/OTP'
import OTP_Sent from './Login/OTP-Sent'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import Forget_Pass from './Login/Forget-Pass'
import Forget_Verify from './Login/Forget-Verify'
import ResetPassword from './Login/ResetPassword'
import Register_Verify from './Login/Register-OTP'
import Locallogin from './Login/Locallogin'
const Login = () => {
  const {login} = useContext(Login_cont)
  const {showLoading} = useContext(ShowCard_Cont);
  
  return (
    <>
    {/* <div className="blur-background login-back" style={{backgroundImage:"url(https://image.slidesdocs.com/responsive-images/background/3d-sticky-notes-arranged-on-cork-board-powerpoint-background_ed1a4ac792__960_540.jpg)"}}> */}
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
          {login==="login" && <Login_Form/>}
          {login==="register" && <Register/>}
          {login==="register_otp" && <Register_Verify/>}
          {login==="otp" && <OTP/>}
          {login==="sent" && <OTP_Sent/>}
          {login==="respass" && <Forget_Pass/>}
          {login==="verify_respass" && <Forget_Verify/>}
          {login==="verified-respass" && <ResetPassword/>}
          {login==="localform" && <Locallogin/>}
      </div>
    </div>
      </div>
        

        <div id="dropDownSelect1"></div>
        {/* </div> */}
    </>
  )
}

export default Login