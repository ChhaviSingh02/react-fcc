
//Challenge
//Add a `nav` > `ul` > `li` (x3).The 3 items should say
// "Pricing", "About", "Contact"


import {createRoot} from "react-dom/client";
import {Fragment} from "react";
import imageSrc from './img/R.png';

const root=createRoot(document.getElementById("root"))

root.render(
    <Page/>
)
function Header(){
    return(
        <header>
        <nav>
                <ul className="">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <h1>React is awesome</h1>
            <img src={imageSrc} alt="React Logo" width="250px"/>
        </header>
    )
}
function MainContent(){
    return(
        <main>
            <h2>Fun facts about React</h2>
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
    return(
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
        </Fragment>
    )
}

