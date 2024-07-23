import React, { useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';


const Header = (props) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    console.log(search);

    const userToken = localStorage.getItem('token');

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/sign-in")
    }

    return (
        <header>
            <div className="container">
                <div id="head">
                    <div className="logo">
                        <Link to="/"><img src="https://raw.githubusercontent.com/RahulChoudharygit/E-CommerceWeb/main/images/bird-colorful-logo-gradient-vector_343694-1365.avif" alt="logo_image" /></Link>
                        <div className='logo-text'>
                            <Link to="/"><h2>iMona's</h2></Link>
                        </div>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" name="search" onChange={(e) => setSearch(e.target.value)} value={search} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="pages">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                            <li><Link to='/contact-us'>Contact Us</Link></li>
                            <li><Link to='/support'>Support</Link></li>
                            {
                                (!userToken) ? (<li className="signIn"><Link to='/sign-in'>Sign in</Link></li>) : (<li className="signIn"><Link onClick={handleLogOut} >Logout</Link></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
