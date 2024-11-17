import axios from "axios";
const token = localStorage.getItem("token");

const loginAPI = async (data) =>{
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URI}/admin/login`,{
            method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data),
        });
          const returnRes =  await response.json();
          if(returnRes.status){
           localStorage.setItem("token",returnRes?.token);
          }
          return returnRes;
    }catch(error){
       return {status:false,title:"Technical Issue!",desc:error.message}; 
    }
}

const loginVerify = async(token) =>{
  try{
    const response = await axios.post(`${process.env.REACT_APP_API_URI}/admin/login-verify`,{},{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    });
    return response.data;
  }catch(error){
return {status:false};
  }
}

const AddClassFn = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URI}/class/add-class`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }
    );
    return  response.data;
  } catch (error) {
    console.log(error?.response?.data);
    return error?.response?.data;

  }
};


export {loginAPI,loginVerify,AddClassFn}