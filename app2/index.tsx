import React from 'react'
import ReactDOM from 'react-dom/client'


function App2() {

    return (
        <div>
            <h1>Hello World from App 2</h1>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App2 />
    </React.StrictMode>
)
