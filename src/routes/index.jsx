import"../main.css"
import { Link } from "react-router-dom"
import Pack from "../components/pack"

export default function Index() {
    return (
        <div>
            <h2 className="text heading">Featured</h2>
            <div className="grid-container">
                <Pack packId="midipack1"></Pack>
                <Pack packId="ambiancepack1"></Pack>
                <Pack packId="midipack1"></Pack>
            </div>
        </div>
    )
}