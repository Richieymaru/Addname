import { useContext } from "react"
import { AppContext } from "../App"

export const Service = () => {

    const {jhonasAnn} = useContext(AppContext);

    return <div><h1>THIS IS THE ServicE! {jhonasAnn}</h1></div>
}