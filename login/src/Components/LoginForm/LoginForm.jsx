import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./LoginForm.css";

const LoginForm = () => {


    return (
        <div className="big">
            <h1 className="intro">Login to Enter the System</h1>
            <div className="wrapper">
                <form>
                    <h1>Login</h1>
                    <div className="input_box">
                        <input type="text" placeholder="Username" required />
                        <FaUserAlt className="icon" />
                    </div>
                    <div className="input_box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remmenber-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don´t have an account <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm