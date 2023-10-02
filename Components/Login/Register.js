import React, { useContext } from 'react'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Login_cont } from '@/Helpers/Login-Cont'

const Register = () => {
	const {setShowLogin} = useContext(ShowCard_Cont)
	const {setLogin} = useContext(Login_cont);
  return (
    <>
				<form onSubmit={()=>setShowLogin(false)} className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Sign Up
					</span>
                    
                    <div className="wrap-input100 validate-input" data-validate = "Enter Name">
						<input className="input100" type="text" name="name" placeholder="Name"/>
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
						<input className="input100" type="email" name="email" placeholder="Email"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
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