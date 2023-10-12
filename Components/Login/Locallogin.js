import { Account_cont } from '@/Helpers/Account-Info';
import { Categories_Cont } from '@/Helpers/Categories';
import { Login_cont } from '@/Helpers/Login-Cont';
import { Notes_Cont } from '@/Helpers/Notes';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'

const Localstorage = () => {
    const {setNotes,setTodo,notes,Todo} = useContext(Notes_Cont);
    const {AccountInfo,AccountType,setAccountType,setAccountInfo} = useContext(Account_cont);
    const {categories,setCategories} = useContext(Categories_Cont);
	const {login,setLogin} = useContext(Login_cont);
	const {showLoading,setShowLoading,setShowLogin} = useContext(ShowCard_Cont);
  return (
    <form method='post' action='/login/log' className="login100-form validate-form">
					<span className="login100-form-logo logo-login">
						<img src='https://i.pinimg.com/1200x/4d/00/8b/4d008b130bfc3d54968c88e9cf93c53b.jpg' alt='logo'/>
					</span>
					<span className="login100-form-title p-b-34 p-t-27">
						Local Storage
					</span>
					<div className="container-login100-form-btn">
                    <button onClick={()=>setLogin("login")} type='button' className="login100-form-btn">
                        Back
						</button>
						<button type='button' onClick={()=>{setAccountType('local');setShowLogin(false);}} className="login100-form-btn">
                        Local Login
						</button>
						<button type='button' onClick={()=>{setAccountType('localregister');setShowLogin(false);}} className="login100-form-btn">
                        Local Register
						</button>
					</div>
            </form>
  )
}

export default Localstorage