import { Changename } from "../component/Changename";
import classes from "./Home.module.css";


export const Home = (props) => {
    return (
    <div className={classes.container}>
        <div className={classes.containertwo}>
            <span className={classes.spanstyle}>THIS IS THE HOMEPAGE OF {props.username}</span>
            <Changename setJhonasAnn={props.setJhonasAnn}/>
        </div>

            

    </div>
    );
}