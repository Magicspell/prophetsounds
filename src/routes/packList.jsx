import"../main.css"
import { Link, redirect, useLoaderData } from "react-router-dom"
import packData from "../database/packData.json"
import tags from "../database/tags.json"
import Pack from "../components/pack"

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

        if (packIdList.length > 0 ) {
            return (
                <div>
                    <h2 className="text heading">{ tags["names"][tag] }</h2>
                    <div className="grid-container">{
                            packIdList.map(function(packId, i){
                                return (
                                    <Pack packId={packId}></Pack>
                                );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2 className="text heading">{ tags["names"][tag] }</h2>
                    <div className="error-wrapper">
                        <p className="text error-message">Nothing to see here yet. Go back <Link to="/" className="text">home here.</Link></p>
                    </div>
                </div>
            )
        }

    } else {
        return redirect("/404");
    }
}