import React from "react"
import { RouteComponentProps, useLocation } from "react-router-dom"
import { LogoutBtn } from "./LogoutBtn"

interface props extends RouteComponentProps {}

const About: React.FC<props> = ({ location }) => {
    let query = new URLSearchParams(useLocation().search)

    console.log(location)
    return (
        <div>
            <p>
                About Pages{" "}
                {query.get("user") ? (
                    query.get("user")
                ) : (
                    <p> error can't get query string ?user=xxx</p>
                )}
            </p>
            <LogoutBtn />
        </div>
    )
}

export { About }
