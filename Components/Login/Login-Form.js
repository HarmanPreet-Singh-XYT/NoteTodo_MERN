import React,{useContext, useLayoutEffect, useState} from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'
import { Account_cont } from '@/Helpers/Account-Info';
import axios from 'axios';
import { Notify } from '../Notifcation';
import Cookies from 'js-cookie';
import { Categories_Cont } from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';
const Login_Form = () => {
	const url=process.env.NEXT_PUBLIC_SERVER_URL;
	const {showLoading,setShowLoading,setShowLogin} = useContext(ShowCard_Cont);
  const {login,setLogin} = useContext(Login_cont);
  const {setCategories} = useContext(Categories_Cont);
  const {setTotalCreate,setTotalEdit,setTotalDelete} = useContext(Number_cont);
  const {AccountInfo,setAccountType, setAccountInfo, Error, setError,Exist, setExist} = useContext(Account_cont);
  const [remember, setRemember] = useState(false);
  useLayoutEffect(() => {
	setError(false);
	setExist(false);
  }, [])
  function DemoAcc(){
	setAccountType('demo');
  }
  async function check(e){
	e.preventDefault();
	setShowLoading(true);
	setError(false);
	setExist(false);
	const data = {
		email: e.target[0].value,
		password: e.target[1].value,
	};
	await axios.post(`${url}/logindata/login/logon/${remember}`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
	.then((res)=>{
		switch (res.data.message) {
			case 'Success':
				Notify("Login Successful","success");
				setAccountInfo(res.data.user_info);
				setCategories(res.data.user_info.categories);
				setTotalCreate(res.data.user_info.total.create);
				setTotalEdit(res.data.user_info.total.edit);
				setTotalDelete(res.data.user_info.total.delete);
				remember && Cookies.set('loginD',res.data.encrypted_token);
				setShowLoading(false);
				setShowLogin(false);
				break;
			case 'incorrect':
				setShowLoading(false);
				setExist(true);
				Notify("Incorrect Credentials","warn");
			break;
			default:
				break;
		}
	})
	.catch((err)=>{
		setShowLoading(false);
		setExist(true);
		Notify("Incorrect Credentials","error")
})
  }
  return (
    <>
	{showLoading && <div className='loading'>
	<div className="blobs">
		<div className="blob-center"></div>
		<div className="blob"></div>
		<div className="blob"></div>
		<div className="blob"></div>
		<div className="blob"></div>
		<div className="blob"></div>
		<div className="blob"></div>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
	<defs>
		<filter id="goo">
		<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
		<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
		<feBlend in="SourceGraphic" in2="goo" />
		</filter>
	</defs>
	</svg>
		</div>}
    {!showLoading && <form onSubmit={(e)=>check(e)} method='post' action='/login/log' className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>
					{Error && <h3 className='login-error'>Server Error,Please Try Again Lator</h3>}
					{Exist && <h3 className='login-error'>Incorrect Credentials,Please Check Credentials</h3>}
					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter Email">
						<input required className="input100" type="email" name="username" placeholder="Email"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input required className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input onClick={()=>setRemember(!remember)} className="in-cbk" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="la-cbk">
							Remember me
						</label>
					</div>
					<div className="container-login100-form-btn main-btns">
						<button type='button' onClick={()=>setLogin("register")} className="login100-form-btn">
							Sign Up
						</button>
						<button className="login100-form-btn">
							Login
						</button>
					</div>
					<hr className='sep-hr'/>
					<div className="container-login100-form-btn">
						<button type='button' onClick={()=>{setShowLogin(false);DemoAcc()}} className="login100-form-btn">
							Demo
						</button>
						<button type='button' onClick={()=>{setLogin("localform")}} className="login100-form-btn">
							Local Storage
						</button>
						<button onClick={()=>setLogin("otp")} type='button' className="login100-form-btn">
							Login with OTP
						</button>
					</div>

					<div className="text-center p-t-90">
						<a style={{cursor:'pointer'}} onClick={()=>setLogin("respass")} className="txt1">
							Forgot Password?
						  </a>
              </div>
            </form>}
    </>
  )
}

export default Login_Form;