import { Changename } from "../component/Changename";
import classes from "./Home.module.css";
import { useContext } from "react"
import { AppContext } from "../App"

export const Home = (props) => {

    const {jhonasAnn} = useContext(AppContext);

    return (
    <div className={classes.container}>
        <div className={classes.containertwo}>
            <span className={classes.spanstyle}>THIS IS THE HOMEPAGE OF {jhonasAnn}</span>
            <Changename/>
        </div>

            

    </div>
    );
}