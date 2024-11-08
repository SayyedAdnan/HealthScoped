import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <header className='header'>
                <ul className="navv">
                    <li>
                        <a href='/Home'>HOME</a>
                    </li>
                    <li>
                        <a href='/About'>About</a>
                    </li>
                    <li>
                        <a href='/Search'>Search</a>
                    </li>
                </ul>
            </header>
            <Outlet />
        </>
    )
};

export default Navbar;