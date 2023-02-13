import "../main.css"
import { Link } from "react-router-dom"


export default function ErrorPage() {
    return (
        <div>
            <div className="error-wrapper">
                <h1 className="text">404</h1>
                <p className="error-message text">This page does not exist. Go back <Link to="/" className="text">home here.</Link></p>
            </div>
        </div>
    )
}