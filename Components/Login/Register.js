import React, { useContext } from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'
import axios from 'axios';

const url = "http://localhost:3020/";
const Register = () => {
	const {setShowLogin} = useContext(ShowCard_Cont)
	const {setLogin} = useContext(Login_cont);
	function registration(e){
		e.preventDefault();
		const data = {
			name:e.target[0].value,
			bio:e.target[1].value,
			dob:e.target[2].value,
			email:e.target[3].value,
			pass:e.target[4].value,
		}
		axios.post(`${url}logindata/login/register`,data)
		.then((response)=>{
			response.data.message==="Success" && setShowLogin(false);
		})
		.catch((err)=>{
			console.log(err);
		})
	}
  return (
    <>
				<form onSubmit={(e)=>{registration(e)}} className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>

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
						<button onClick={()=>setLogin(true)} className="login100-form-btn">
							Login
						</button>
						<button className="login100-form-btn">
							Register
						</button>
					</div>

					<div className="text-center p-t-90">
                        </div>
                    </form>
    </>
  )
}

export default Register