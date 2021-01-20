import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface props extends RouteComponentProps<{ id: string }> {}

export const Post: React.FC<props> = ({ history, location, match }) => {
    console.log(location, match, history)
    return <div>Rendering post match : {match.params.id}</div>
}
