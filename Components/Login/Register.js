import React, { useContext, useLayoutEffect } from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'
import axios from 'axios';
import { Account_cont } from '@/Helpers/Account-Info';

const url=process.env.NEXT_PUBLIC_SERVER_URL
const Register = () => {
	const {showLoading,setShowLoading,setShowLogin} = useContext(ShowCard_Cont);
	const {setLogin} = useContext(Login_cont);
	const {AccountInfo, setAccountInfo, Error, setError,Exist, setExist} = useContext(Account_cont);
	useLayoutEffect(()=>{
		setError(false);
		setExist(false);
	},[])
	async function registration(e){
		e.preventDefault();
		setShowLoading(true);
		setError(false);
		setExist(false);
		const data = {
			name:e.target[0].value,
			bio:e.target[1].value,
			dob:e.target[2].value,
			email:e.target[3].value,
			pass:e.target[4].value,
		}
		await axios.post(`${url}/logindata/login/register`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
		.then((response)=>{
			switch (response.data.message) {
				case "Success":
					setShowLoading(false);
					setAccountInfo(data);
					setShowLogin(false);
					break;
				case "Exist":
					setShowLoading(false);
					setExist(true);
					break;
				case "failed":
					setShowLoading(false);
					setError(true);
					break;
				default:
					break;
			}
		})
		.catch((err)=>{
			setShowLoading(false);
				setError(true);
		})
	}
  return (
    <>
	{showLoading &&<div className='loading'>
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
				{!showLoading && <form onSubmit={(e)=>{registration(e)}} className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>
					{Error && <h3 className='login-error'>Registration Failed,Please Try Again Lator</h3>}
					{Exist && <h3 className='login-error'>Email Already Exists</h3>}
					<span className="login100-form-title p-b-34 p-t-27">
						Sign Up
					</span>
                    
                    <div className="wrap-input100 validate-input" data-validate = "Enter Name">
						<input required className="input100" type="text" name="name" placeholder="Name*"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "Enter Bio">
						<input className="input100" type="text" name="bio" placeholder="Bio"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "Enter Date of Birth">
						<input className="input100" type="date" name="dob" placeholder="Date of Birth"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Enter Email">
						<input required className="input100" type="email" name="email" placeholder="Email*"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input required className="input100" type="password" name="pass" placeholder="Password*"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
				
					<div className="container-login100-form-btn">
						<button onClick={()=>setLogin("login")} className="login100-form-btn">
							Login
						</button>
						<button className="login100-form-btn">
							Register
						</button>
					</div>

					<div className="text-center p-t-90">
                        </div>
                    </form>}
    </>
  )
}

export default Register