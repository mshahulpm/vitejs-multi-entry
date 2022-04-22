import React from 'react'
import ReactDOM from 'react-dom/client'


function App3() {

    return (
        <div>
            <h1>Hello World from App 3</h1>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App3 />
    </React.StrictMode>
)
