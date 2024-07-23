import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link,useNavigate } from "react-router-dom"
import "./Signup.css"

const Signup = (props) => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("mobile", mobile);


    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const rawResponse = await fetch(
            "http://localhost:2000/api/user/registration",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, mobile, email, password }),
            }
        );

        const content = await rawResponse.json();

        if (content.success) {
            toast.success(content.message);
            navigate("/sign-in");
        } else {
            toast.error(content.message);
            return;
        }

        console.log("Accomodiations Submitted Successfully");
    }

    return (
        <div id="signUp">
            <div className="container">
                <hr />
                <div className="form_box">
                    <div className="form">
                        <center><u><h2 style={{color:"#00b8ff"}}>Register Yourself AT  IMONA'S</h2></u></center>
                        <form onSubmit={handleSubmitForm} method='post' action='#'>
                            <div className="Form_container">
                                <label htmlFor="name">Name</label><br />
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} required /><br />
                                <label htmlFor="email">E-mail</label><br />
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required /><br />
                                <label htmlFor="password">Password</label><br />
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required /><br />
                                <label htmlFor="mobile">Mobile No.</label><br />
                                <input type="number" onChange={(e) => setMobile(e.target.value)} value={mobile} required /><br />
                                <div className="forgotPass">
                                    <Link to="/forgot-pass">Forgot password ?</Link>
                                </div>
                                <br />
                                <div className="login_button" align="right">
                                    <Link to="/sign-in">Login</Link>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" id="cookies" name="cookies" value="cookies" />Accept all cookies &
                                    conditions
                                </div>
                                <h4 className="color_h4"><i className="fa-solid fa-check"></i> Please accept all conditions and cookies to
                                    look forword.</h4>

                                <div className="buttons" align="right">
                                    <button type="reset">reset</button>
                                    <button type="submit">Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
