import { useLoaderData } from "react-router-dom"

export default function PageNumber() {
    const pageNumber = useLoaderData();


    return (
        <div>
            <p>This is PAGE {pageNumber}</p>
        </div>
    )
}