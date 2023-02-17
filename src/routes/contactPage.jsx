import "../main.css"


export default function ContactPage() {
    return (
        <div className="text">
            <h2 className="heading">Contact Us</h2>
            <div className="list-wrapper">
                <li className="list">Email: <a className="footer-link" href="mailto:prophetssounds@gmail.com">prophetssounds@gmail.com</a></li>
                <li className="list">Twitter: <a className="footer-link" href="https://twitter.com/ProphetSounds">@ProphetSounds</a></li>
                <li className="list">Instagram: <a className="footer-link" href="https://www.instagram.com/prophet_sounds">@prophet_sounds</a></li>
                <li className="list">Reddit: <a className="footer-link" href="https://www.reddit.com/user/ProphetSounds">u/ProphetSounds</a></li>
            </div>
        </div>
    )
}