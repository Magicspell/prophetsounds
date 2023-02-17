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
                    {/* <Link className="text link" to="tag/oneshot">One shots</Link>
                    <Link className="text link" to="tag/loop">Loops</Link>
                    <Link className="text link" to="tag/drum">Drum kits</Link> */}
                    <Link className="text link" to="tag/all">All</Link>
                    <Link className="text link" to="tag/free">Free sounds</Link>
                    <Link className="text link" to="tag/sfx">Sound effects</Link>
                    <Link className="text link" to="tag/midi">MIDI packs</Link>
                </span>
            </div>
            <Outlet />
            <div className="footer footer-grid">
                <div className="text small" style={{lineHeight:3}}>
                    <p>© 2023 Prophet Sounds</p>
                </div>
                <div className="text small">
                    <p>Socials:</p>
                    <p>
                        <a href="https://twitter.com/ProphetSounds" className="footer-link">Twitter </a>
                        <a href="https://www.instagram.com/prophet_sounds" className="footer-link">Instagram </a>
                        <a href="https://www.reddit.com/user/ProphetSounds" className="footer-link">Reddit </a>
                    </p>
                </div>
                <div className="text small" style={{lineHeight:3}}>
                    <p><Link className="footer-link" to="/contact">Contact Us</Link></p>
                </div>
            </div>
        </div>
    )
}