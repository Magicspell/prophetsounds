import"../main.css"
import { Link, useLoaderData } from "react-router-dom"
import packData from "../database/packData.json"
import tags from "../database/tags.json"

export default function PackList() {
    const tag = useLoaderData();

    if (tags["0"].includes(tag)) {

        const packIdList = [];

        for (let i = 0; i < Object.keys(packData).length; i++) {
            const key = Object.keys(packData)[i];
            if (packData[key]["tags"].includes(tag)) {
                packIdList.push(key);
            }
        }

        return (
            <div>
                <h2 className="text heading">{ tags["names"][tag] }</h2>
                <div className="grid-container">
                    {packIdList.map(function(packId, i){
                        return (
                            <Link className="text" to={"./packs/" + packId}>
                                <div className="grid-item">
                                    <img className="pack-art" src={packData[packId]["img"]}></img>
                                    <p className="caption">{packData[packId]["name"]}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return tag;
    }
}