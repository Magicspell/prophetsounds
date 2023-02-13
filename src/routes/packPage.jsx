import { useLoaderData, redirect } from "react-router-dom"
import packData from "../database/packData.json"
import "../main.css"

export default function PackPage(){
    const packId = useLoaderData();
    
    const data = null;

    if (Object.keys(packData).includes(packId)) {
        const data = packData[packId];

        return (
            <div className="grid-container">
                <img className="pack-art-big" src={data["img"]}></img>
                <div className="text paragraph">
                    <h2 className="heading">{data["name"]}</h2>
                    <div className="description-wrapper">
                        <p className="description">{data["desc"]}</p>
                        <p className="description">{data["desc2"]}</p>
                        <div className="list-wrapper">
                            {data["contentList"].map(function(object, i){
                                return <li className="text list">{object}</li>;
                            })}
                        </div>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1anY9lPTuCiwwo0h3CTJrl0Lk712Qxo7z?usp=sharing" className="purchase-button">Download</a>
                </div>
            </div>
        );
    } else {
        return redirect("/404");
    }
}