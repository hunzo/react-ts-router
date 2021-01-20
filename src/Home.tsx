import React from 'react'
import { LoginBtn } from './LoginBtn'

interface props {}
export const Home: React.FC<props> = () => {
    return <div>
        <h1>Home</h1>
        <LoginBtn username="testuser"/>
        </div>

}