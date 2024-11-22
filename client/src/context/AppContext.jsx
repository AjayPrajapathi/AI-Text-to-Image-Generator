// import { createContext, useEffect, useState } from "react";
// import axios from "axios"

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const [user, setUser] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);

//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [credit, setCredit] = useState(false);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const loadCreditData=async ()=>{
//     try {
//       const {data}=await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
//    if(data.success){
//     setCredit(data.credits);
//     setUser(data.user)
//    }
   
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
      
//     }
//   }
// const logout=()=>{
//   localStorage.removeItem('token');
//   setToken('')
//   setUser(null)
// }
//   useEffect(()=>{
//     if(token){
//       loadCreditData()
//     }

//   },[token])


//   const value = {
//     user,
//     setUser,
//     showLogin,
//     setShowLogin,
//     backendUrl,
//     credit,
//     setCredit,
//     token,
//     setToken,loadCreditData,
//     logout
//   };
//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };
// export default AppContextProvider;
import React from "react";
import { createContext, useEffect, useState, } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Make sure to import toast
import {useNavigate} from 'react-router-dom'
export const AppContext = createContext();


const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);  // Set to 0, since credit is a number
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate=useNavigate();

  const loadCreditData = async () => {
    if (!token) return;  // Prevent request if no token is available
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);  // Set credit to the response value
        setUser(data.user);  // Set user data
      } else {
        toast.error("Failed to load credit data.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };
// calling prompt
const generateImage= async (prompt)=>{
try {
 const {data}= await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})
  if(data.success){
    loadCreditData()
    return data.resultImage
  }else{
    toast.error(data.message)
    loadCreditData()
    if(data.creditBalance===0){
       navigate('/buy')
    }
  }
} catch (error) {
  toast.error(error.message)
  
  


}

}



  const logout = () => {
    localStorage.removeItem("token");  // Remove token from localStorage
    setToken(null);  // Set token to null
    setUser(null);  // Reset user state
    setCredit(0);  // Reset credit to 0
  };

  useEffect(() => {
    if (token) {
      loadCreditData();  // Load user and credit data if token is available
    }
  }, [token]);  // Dependency on token

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    credit,
    setCredit,
    token,
    setToken,
    loadCreditData,
    logout,
    generateImage
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
