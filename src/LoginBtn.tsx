import React from "react"
import { useHistory } from "react-router-dom"

interface props {
    username: string
}

export const LoginBtn: React.FC<props> = ({ username }) => {
    const history = useHistory()
    const login = () => {
        localStorage.setItem("token", "stringtoken")
        history.push(`/about?user=${username}`)
    }

    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    login()
                }}
            >
                Login
            </button>
        </div>
    )
}
