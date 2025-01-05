// mini challenge
// move the heeder element fromt the page compoenet form the page 
//component in its own called "Header" component

// then render an instance of the Header component inside
//the page Component where the 'header' element was previously


import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import imageSrc from './img/R.png';

const root=createRoot(document.getElementById("root"))

root.render(
     <Page/>  
)
function Header(){
    return(
        <header>
            <h1>React is awesome</h1>
            <img src={imageSrc} alt="React Logo" width="250px"/>        
        </header>
    )
}
function MainContent(){
    return(
        <main>
                <h2> Fun facts about React</h2>
                 <ul>
                    <li>Was first released in 2013</li>
                    <li>Was created by Jordan Walke</li>
                    <li>Has well over 100k stars on github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
        </main>
    )
}
function Footer(){
    return (
        <footer>
            <small>2025 <span>Singh</span> Development. All rights reserved.</small>
        </footer>
    )
}

function Page(){
    return(
        <Fragment>
        <Header/>
        <MainContent/>
        <Footer/>
             {/* <header>
                <h1>I really loves React</h1>
            </header>  */}
            {/* <main>
                <h2> Fun facts about React</h2>
                 <ul>
                    <li>Was first released in 2013</li>
                    <li>Was created by Jordan Walke</li>
                    <li>Has well over 100k stars on github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main> */}
            {/* <footer>
                <small>2025 <span>Singh</span> Development. All rights reserved.</small>
            </footer> */}
        </Fragment>
    )
}
//complete challenge is to be
// Move the 'main' element into its own compoenet called "MainContest"
// and render that component inside the Page 

// do the same for the footer element

