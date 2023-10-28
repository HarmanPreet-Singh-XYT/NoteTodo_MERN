import Cookies from 'js-cookie'
import React, { useEffect,useContext } from 'react'
import axios from 'axios'
import { Account_cont } from '@/Helpers/Account-Info';
import { Login_cont } from '@/Helpers/Login-Cont';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Notify } from './Notifcation';
import { Categories_Cont } from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';
const LoadCookie = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {setShowLoading,setShowLogin} = useContext(ShowCard_Cont);
    const {setAccountType, setAccountInfo} = useContext(Account_cont);
    const {setCategories} = useContext(Categories_Cont);
    const {setTotalCreate,setTotalEdit,setTotalDelete} = useContext(Number_cont);
    if(Cookies.get('loginD')){
        const token = Cookies.get('loginD');
        useEffect(()=>{
            setShowLoading(true);
            axios.post(`${url}/logindata/cookie`,{token},{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
            .then((res)=>{
                switch (res.data.message) {
                    case "Success":
                        setAccountInfo(res.data.userdata);
                        setAccountType('cloud');
                        setCategories(res.data.userdata.categories);
                        setTotalCreate(res.data.userdata.total.create);
                        setTotalEdit(res.data.userdata.total.edit);
                        setTotalDelete(res.data.userdata.total.delete);
                        setShowLoading(false);
                        Notify("Login Successful","success");
                        setShowLogin(false);
                        break;
                    case "error":
                        setShowLoading(false);
                        Notify("Auto-Login Failed,Please Login Manually","inform");
                        Cookies.remove('loginD');
                        break;
                    default:
                        setShowLoading(false);
                        break;
                }
            })
            .catch((err)=>{
                setShowLoading(false);
            })
        },[])
    }
  return (
    null
  )
}

export default LoadCookie