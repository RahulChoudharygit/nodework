import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Signin.css"
import { Bounce, toast } from 'react-toastify';
// import {CookiesProvider, useCookies } from 'react-cookie';


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(email);
    // console.log(password);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const rawResponse = await fetch(
            "http://localhost:2000/api/user/login",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );

        const content = await rawResponse.json();
        console.log(content);

        if (content.success) {
            localStorage.setItem('token', content.createdToken)
            localStorage.setItem('name', content.isExist.name)
            localStorage.setItem('email', content.isExist.email)
            toast.success(content.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            navigate("/")
        } else {
            toast.error(content.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <div id="signIn">
            <div className="container">
                <hr />
                <div className="login-form_box">
                    <div className="login-form">
                        <center><u><h2 style={{ color: "#00b8ff" }}>Login nOw </h2></u></center>
                        <form onSubmit={handleLogin} mathod="post" action="#">
                            <div className="Form_container">
                                <label htmlFor="email">E-mail</label><br />
                                <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                                <label htmlFor="password">Password</label><br />
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                                <div className="forgotPass">
                                    <Link to="/forgot-pass">Forgot password ?</Link>
                                </div>
                                <br />

                                <div className="login-button" align="center">
                                    <button type="submit">Sign in</button>
                                </div>
                                <br />
                                <div className="login_button" align="right">
                                    <Link to="/sign-up">Sign Up</Link>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
