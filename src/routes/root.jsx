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
                    <Link className="text link" to="tag/oneshot">One shots</Link>
                    <Link className="text link" to="tag/loop">Loops</Link>
                    <Link className="text link" to="tag/free">Free sounds</Link>
                    <Link className="text link" to="tag/drum">Drum kits</Link>
                    <Link className="text link" to="tag/sfx">Sound effects</Link>
                    <Link className="text link" to="tag/midi">MIDI packs</Link>
                </span>
            </div>
            <Outlet />
        </div>
    )
}