import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function GlobalContext({children}) {
    const {theme} = useContext(ThemeContext)
    const appStyles = {
        backgroundColor: theme === "dark" ? "#444" : "#FOFOFO",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100px",
        padding: "20px",
        margin: 0
    };
    return (
        <div style={appStyles}>
            {children}
        </div>
    )
}

export default GlobalContext;