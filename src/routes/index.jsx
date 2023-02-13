import"../main.css"
import { Link } from "react-router-dom"

export default function Index() {
    return (
        <div>
            <h2 className="text heading">Featured</h2>
            <div className="grid-container">
                <Link className="text" to="./packs/midipack1">
                    <div className="grid-item">
                        <img className="pack-art" src="./BoxOPercsPack2.png"></img>
                        <p className="text caption">Box O' Percs Pack</p>
                    </div>
                </Link>
                <Link className="text" to="./packs/ambiancepack1">
                    <div className="grid-item">
                        <img className="pack-art" src="./ambiancepack.png"></img>
                        <p className="text caption">Ambiance Pack 1</p>
                    </div>
                </Link>
                <Link className="text" to="./packs/midipack1">
                    <div className="grid-item">
                        <img className="pack-art" src="./MidiPack1.png"></img>
                        <p className="caption">MIDI Pack 1</p>
                    </div>
                </Link>
            </div>

            <footer></footer>
        </div>
    )
}