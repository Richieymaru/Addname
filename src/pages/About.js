import { useContext } from "react"
import { AppContext } from "../App"


export const About = () => {

    const {jhonasAnn} = useContext(AppContext);

    return <div><h1>THIS IS THE About! {jhonasAnn} </h1></div>
}