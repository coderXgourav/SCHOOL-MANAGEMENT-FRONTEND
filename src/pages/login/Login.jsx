import "./login.css";
import { useEffect, useState } from "react";
import { loginAPI } from "../../utils/api";
import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [btn, setBtn] = useState("LOGIN");
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();


  const textChange = (event) => {
    if (event.target.name == "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const adminLoginForm = async (e) => {
    e.preventDefault();
    setDisable(true);
    setBtn("Please Wait..");
    const data = { username, password };
    const response = await loginAPI(data);  
    const {status,title,desc} = response;
    openNotification(status,title,desc);
    setDisable(false);
    setBtn("LOGIN");
  };

  const openNotification = (status,title,desc,topRight) => {
    if(status){
      setTimeout(()=>{
        navigate("/admin/dashboard");
      },1500);
        api.success({
            message: title,
            description:
            desc,
            topRight,
          });

    }else{
        api.error({
            message: title,
            description:
            desc,
            topRight,
          });

    }

  
  };
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate("/admin/dashboard");
    }
  },[]);
  



  return (
    <>{contextHolder}
      <div className="login_page">
        <div class="login-container">
          <div class="avatar">
            <img src="./img/logo.png" alt="" width={"100px"} />
          </div>
          <form onSubmit={adminLoginForm}>
            <div class="input-icon">
              <input
                type="text"
                name="username"
                value={username}
                onChange={textChange}
                placeholder="Username"
                required
              />
            </div>
            <div class="input-icon">
              <input
                type="password"
                name="password"
                value={password}
                onChange={textChange}
                placeholder="Password"
                required
              />
            </div>
            <div class="remember-forgot">
              <label>
                <span>Remember me</span>
              </label>
              <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
                Forgot password?
              </a>
            </div>
            <button disabled={disable} type="submit" class="login-btn">
              {btn}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
