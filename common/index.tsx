import React from 'react'
import ReactDOM from 'react-dom/client'

function Common() {

    return <h1>Common</h1>
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Common />
    </React.StrictMode>
)