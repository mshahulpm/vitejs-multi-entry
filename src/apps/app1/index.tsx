import React from 'react'
import ReactDOM from 'react-dom/client'


function App1() {

    return (
        <div>
            <h1>Hello World from App 1</h1>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App1 />
    </React.StrictMode>
)
