import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { About } from "./About"
import "./App.css"
import { Home } from "./Home"
import { Post } from "./Post"

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/posts/:id" component={Post} />
                    <Route path="/" render={() => <div> eror: 404</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
