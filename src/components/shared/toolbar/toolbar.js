import React, { useEffect, useState } from "react";
import styles from './toolbar.module.css'
import authService from '../../../services/auth.service';
import { useNavigate,useLocation } from "react-router-dom";

const ToolBar = () =>{
    const userData = authService.getUserData();
    const navigate = useNavigate();
    const location = useLocation();
    const [ nameRoute,setNameRoute ] = useState('');

    const handleLogout = () =>{
        authService.logout(()=>{
            navigate('/login');
        });
    }

    useEffect(()=>{
        setNameRoute( location.pathname === '/' 
                       ? 'Dashboard' 
                       : location.pathname.split('/').filter(route=>route !== '')[0]
                    )
    },[])

    return(
        <div className={ styles.toolbarContainer }>
            <div>
                <span>{nameRoute}</span>
            </div>
            <div className={ styles.toolbarUserInfo }>
                <div>{userData?.usuario}</div>
                <div>
                    <button onClick={handleLogout} className={ styles.toolbarBtnMenu +' '+styles.btnPadding }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="currentColor" viewBox="0 0 16 16"> 
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/> 
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/> 
                        </svg> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToolBar;