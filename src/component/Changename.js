import { useState } from "react";
import classes from "./Changename.module.css";

export const Changename = (props) => {
    
    const [name, setName] = useState("");
    
    const handleSubmitForm = (event) => {
        event.preventDefault();
        setName("");
    };

    return <div>
        <form className={classes.form} onSubmit={handleSubmitForm}>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button className={classes.btn} onClick={() => {props.setJhonasAnn(name)}}>Change Name</button>
        </form>
    </div>
}

