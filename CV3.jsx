
//Challenge 3: 
//Recreate the above line of code in vanilla js by creating
//ans appending an h1 to our div#root (without using the inner HTML)

// create a new h1 element
//give it some textcontent
//give it a class name of "header"
// append it as a child(using appendchild) of the div#root

//dont use inner html it accomplish any of this


import {createRoot} from "react-dom/client"
const root=createRoot(document.getElementById("root"))

//This is Imperative Codimg
const h1=document.createElement("h1")
h1.textContent="This is imperative coding"
h1.className="header"
document.getElementById("root").appendChild(h1)


//React is declarative
root.render(
    <div>
        <h1> React is Decalarative</h1>
    </div>
)
