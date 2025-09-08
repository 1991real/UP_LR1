import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { NavLink,Link, Route, Routes } from "react-router-dom";
import Product from "./product";
import About from "./about"
import Login from "./login";
import Home from "./home"
import Basket from "./basket"
function Menu(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    const navLinkStyle = ({IsActive}) => ({
        color: IsActive ? "red" : theme === "dark" ? "#fff" : "#000",
        fontWeight: IsActive ? "bold" : "normal",
        marginRight: "10px",
        textDecoration: "none"
    });
    const linkStyle = {
        color: theme === "dark" ? "#fff" : "#000",
        marginRight: "10px",
        textDecoration: "none"
    }
    return(
        <nav style={{marginBottom:"20px", padding: "10px",backgroundColor: theme === "dark" ? "#444" : "#F0F0F0"}}>
            <NavLink to="/" end style={navLinkStyle}>
            Main Page
            </NavLink>
            <NavLink to="/about" style={navLinkStyle}>
            About us
            </NavLink>
            <NavLink to="/login" style={navLinkStyle}>
            Login
            </NavLink>
            <NavLink to="/basket" style={navLinkStyle}>
            Basket
            </NavLink>
            <button onClick={toggleTheme} style ={{marginLeft:"20px"}}>
                Переключить тему ({theme})
            </button> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </nav>
        
    )
}
export default Menu