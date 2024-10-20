import "./login.css";

const Login = () =>{
     return (
        <>
        <div className="login_page">
    <div class="login-container">
        <div class="avatar">
            <img src="./img/logo.png" alt="" width={"100px"}/>
        </div>
        <form>
            <div class="input-icon">
                <input type="text" placeholder="Username" required />
            </div>
            <div class="input-icon">
                <input type="password" placeholder="Password" required />
            </div>
            <div class="remember-forgot">
                <label>
                    <input type="checkbox" /> Remember me
                </label>
                <a href="#" style={{color: "#007bff", textDecoration: "none"}}>Forgot password?</a>
            </div>
            <button type="submit" class="login-btn">LOGIN</button>
        </form>
    </div>
    </div>
        </>
     )
}

export default Login;