import { Account_cont } from '@/Helpers/Account-Info'
import React, { useContext} from 'react'
import axios from 'axios';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Notify } from '../Notifcation';
import { Login_cont } from '@/Helpers/Login-Cont';
const ResetPassword = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {AccountInfo} = useContext(Account_cont);
    const {setShowLoading} = useContext(ShowCard_Cont);
    const {setLogin} = useContext(Login_cont);
    function PasswordChange(e){
        e.preventDefault();
        setShowLoading(true);
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/password`,{
            password:e.target[0].value,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
        .then((res)=>{
            setShowLoading(false);
            res.status===200 ?
            Notify('Successful','success')
            :
            Notify('Error,Please Try again','error');
            res.status===200 && setLogin('login');
            })
    }
  return (
    <form onSubmit={(e)=>PasswordChange(e)} method='post' className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>
					<span className="login100-form-title p-b-34 p-t-27">
						Reset Password
					</span>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input required className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="container-login100-form-btn">
                    <button type='button' onClick={()=>setLogin('respass')} className="login100-form-btn">
							Back
						</button>
						<button className="login100-form-btn">
							Confirm
						</button>
                    </div>
            </form>
  )
}

export default ResetPassword