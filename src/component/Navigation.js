import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"

export const Navigation = () => {
    return <header>
        <nav className={classes.pad}>
            <div className={classes.navtwo}>
                <div>
                    <span style={{fontFamily: "Montserrat Alternates", color: "white", fontSize: 30, fontWeight: "bold"}}>AddName</span>
                </div>
                <ul className={classes.navi}>
                    <li>
                        <h3><Link to="/">Homepage</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/service">Service</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/about">About</Link></h3>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}