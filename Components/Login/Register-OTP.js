import React,{useContext, useLayoutEffect} from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'
import { Account_cont } from '@/Helpers/Account-Info';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Notify } from '../Notifcation';
import { Categories_Cont } from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';
const Register_Verify = () => {
	const url=process.env.NEXT_PUBLIC_SERVER_URL;
	const {showLoading,setShowLoading,setShowLogin} = useContext(ShowCard_Cont);
  const {login,setLogin} = useContext(Login_cont);
  const {setCategories} = useContext(Categories_Cont);
  const {setTotalCreate,setTotalEdit,setTotalDelete} = useContext(Number_cont);
  const {AccountInfo, setAccountInfo, Error, setError,Exist, setExist} = useContext(Account_cont);
  useLayoutEffect(() => {
	setError(false);
	setExist(false);
  }, [])
  async function check(e){
	e.preventDefault();
	setShowLoading(true);
	setError(false);
	setExist(false);

	const data = {
        name:AccountInfo.name,
        bio:AccountInfo.bio,
        dob:AccountInfo.dob,
        User_id:AccountInfo.User_id,
        pass:AccountInfo.pass,
		user_otp: e.target[0].value,
		email:AccountInfo.email,
		encrypted_otp:Cookies.get('loginauth'),
	};
	await axios.post(`${url}/logindata/login/register`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
	.then((res)=>{
		switch (res.data.message) {
			case 'Success':
				Notify("Verified","success");
				setAccountInfo(res.data.userdata);
				setCategories(res.data.user_info.categories);
				setTotalCreate(res.data.user_info.create);
				setTotalEdit(res.data.user_info.edit);
				setTotalDelete(res.data.user_info.delete);
				setShowLoading(false);
                setShowLogin(false);
				break;
			case 'incorrect':
				setShowLoading(false);
				setExist(true);
				Notify("Incorrect Credentials","warn");
				break;
			case 'failed':
				setShowLoading(false);
				setExist(true);
				Notify("Server Error","error");
				break;
			default:
				break;
		}
	})
	.catch((err)=>{
		setShowLoading(false);
		setError(true);
		Notify("Failed,Please Try again","error")
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
					{Error && <h3 className='login-error'>OTP Expired,Please Login Again</h3>}
					{Exist && <h3 className='login-error'>Incorrect OTP,Please Check OTP</h3>}
					<span className="login100-form-title p-b-34 p-t-27">
						OTP Verification
					</span>

					<div className="wrap-input100 validate-input" data-validate="Enter OTP Code">
						<input required className="input100" type="password" name="pass" placeholder="OTP Code"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					<div className="container-login100-form-btn">
						<button type='button' onClick={()=>setLogin("otp")} className="login100-form-btn">
							Back
						</button>
						<button className="login100-form-btn">
							Confirm
						</button>
					</div>
            </form>}
    </>
  )
}
export default Register_Verify;