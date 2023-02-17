import"../main.css"
import { Link, redirect, useLoaderData } from "react-router-dom"
import packData from "../database/packData.json"

export default function Pack(props) {
    const formatter = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"});
    const priceString = formatter.format(packData[props["packId"]]["price"]);

    return (
        <Link className="text" to={"/packs/" + props["packId"]}>
            <div className="grid-item">
                <img className="pack-art" src={packData[props["packId"]]["img"]}></img>
                <p className="caption">
                    {packData[props["packId"]]["name"]}
                    <span className="price">{priceString}</span>
                </p>
            </div>
        </Link>
    )
}