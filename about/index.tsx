import React from 'react'
import ReactDOM from 'react-dom/client'


function About() {

    return <h1>About Page</h1>
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <About />
    </React.StrictMode>
)
