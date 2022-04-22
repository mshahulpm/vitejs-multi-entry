import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const baseUrl = '/app1'

function App1() {

    return (
        <div>
            <h1>Hello from App1</h1>
            <Router>
                <Routes>
                    <Route path={baseUrl + "/page2"} element={<Page2 />} />
                    <Route path={baseUrl} element={<Page1 />} />
                </Routes>
            </Router>

        </div>
    )
}

function Page1() {

    return <div>
        <h1>App1 Page1</h1>
        <Link to={baseUrl + "/page2"}>Go to Page2</Link>
    </div>
}

function Page2() {

    return <div>
        <h1>App1 Page2</h1>
        <Link to={baseUrl}>Go to Page1</Link>
    </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App1 />
    </React.StrictMode>
)
