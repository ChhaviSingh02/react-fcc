// Challenge : Starting from scratch, build a react app that 
// render the HTML for our section project. 

// Hints:
// React logo is a file in the project tree, so you can 
// access it by using src ="react-logo.png" in your image element

// You can also set the "width " attribute of the image element 
//just like in HTML, In the slide, I have it set to 40 px


import {createRoot} from "react-dom/client"
const root=createRoot(document.getElementById("root"))
root.render(
    <main>
        <img src="./img/R.png" alt ="React Logo" width="40px"/>
        <h1>Fun Facts about React !</h1>
        <ul>
            <li> Was first release in 2013 </li>
            <li> Was created by Jordan Walke</li>
            <li> Has well over 100k stars on github</li>
            <li> Is maintained by Meta</li>
            <li> Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </main>
)
