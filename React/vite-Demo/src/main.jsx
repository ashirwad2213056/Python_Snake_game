import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//     return (
//       <div>
//         <h1> Creative Creation</h1>
//         <App/>
//       </div>
//     )
// }

// const ReactElement = {

//     type: 'h1',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },

//     Children: 'Click me to go google'

// }

// const anotherElement = (
//     <a href="https://www.google.com" target="_blank">Click me</a>
// )

const reactElement = React.createElement(
    'h1',
    { href: 'https://www.google.com', target: '_blank' },
    'Click me to go google'
)        

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
