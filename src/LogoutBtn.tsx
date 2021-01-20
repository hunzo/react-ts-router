import React from "react"
import {  useHistory } from "react-router-dom"

export const LogoutBtn: React.FC = () => {
    const history = useHistory()
    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    logout()
                }}
            >
                Logout
            </button>
        </div>
    )
}
