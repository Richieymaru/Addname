import { useState } from "react";
import classes from "./Changename.module.css";
import { useContext } from "react"
import { AppContext } from "../App";

export const Changename = () => {
    
    const {setJhonasAnn} = useContext(AppContext);
    const [name, setName] = useState("");
    
    const handleSubmitForm = (event) => {
        event.preventDefault();
        setName("");
    };

    return <div>
        <form className={classes.form} onSubmit={handleSubmitForm}>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button className={classes.btn} onClick={() => {setJhonasAnn(name)}}>Change Name</button>
        </form>
    </div>
}

