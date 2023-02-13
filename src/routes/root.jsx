import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import '../main.css'

export default function Root() {
    return (
        <div>
            <div className="title-wrapper">
                <h1>
                    <Link className="text" to='/'>Prophet Sounds</Link>
                </h1>
            </div>
            <div className="link-wrapper">
                <span>
                    <Link className="text link" to="/one_shots">One shots</Link>
                    <Link className="text link" to="/loops">Loops</Link>
                    <Link className="text link" to="/free_sounds">Free sounds</Link>
                    <Link className="text link" to="/drum_kits">Drum kits</Link>
                    <Link className="text link" to="/sound_effects">Sound effects</Link>
                    <Link className="text link" to="/midi_packs">MIDI packs</Link>
                </span>
            </div>
            <Outlet />
        </div>
    )
}