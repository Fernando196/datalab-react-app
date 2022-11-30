import axios from 'axios';
import { blogApiUrl } from '../config/config';

class AuthService{
    constructor(){
        try{

            const tokens = localStorage.getItem('tokens');
            this.tokens  = tokens ? JSON.parse(tokens) : {};
            this.authenticated = tokens ? true : false;

            const lastUserName = localStorage.getItem('lastUserName');
            this.lastUserName  = lastUserName || '';

            const userData     = localStorage.getItem('userData');
            this.userData      = userData ? JSON.parse(userData) : {};

        }catch(err){
            console.log(err)
        }
    }
    
    getLastUserName(){
        return this.lastUserName || '';
    }

    getUserData(){
        return this.userData || null;
    }

    isAuthenticated(){
        return this.authenticated;
    }

    async login(user,recordar){
        try{

            let { data } = await axios.post(`${blogApiUrl}/auth`,{
                email: user.usuario,
                password: user.password
            });

            if(data && data?.data){
                let { refresh,token, ...userData } = data?.data;

                localStorage.setItem('tokens',JSON.stringify({ refresh, token }));
                localStorage.setItem('userData',JSON.stringify(userData));
                if(recordar) localStorage.setItem('lastUserName',userData?.usuario || userData?.email);
                this.authenticated = true;
                this.userData      = userData;
            }

        }catch(err){
            throw err;
        }
    }
    
}

export default new AuthService();