import axios from "axios";

const API_URL = "http://doroob.runasp.net/api/v1/auth";

export const login = async (credentials) => {
 try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if(response.data.token){
        localStorage.setItem('token', response.data.token);
    }
    return response;
 } catch (error) {
    throw error.response?error.response.data :new Error("Login failed");
 }

    
};

export const Register=async(credentials)=>{
    try{
        const response=await axios.post(`${API_URL}/Regester`,credentials);
        console.log(response.data);
        return response;
        
    }catch(error){
  throw error.response?error.response.data :new Error("error ");
    }


}

export const VerifyEmail=async(credentials)=>{
    try{
        const response=await axios.post(`${API_URL}/verify-email`,credentials);
        console.log(response.data);
        return response;}
    
    catch(error){
        throw error.response?error.response.data :new Error("error ");
    }
}