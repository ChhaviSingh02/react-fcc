// Challenge 2:
// Create your first custom React components
// Call it in "MainContent", nad have it return a single
// h1 element that says "React is great"

// Afterwards, render it on the line below MyAwesomeNavBar

import {createRoot } from "react-dom/client";
const root=createRoom(document.getElementById("root"))

function MainContent(){
  return(
    <h1>React is great!</h1>
    )
}

root.render(
  <div>
  <MainContent />
  </div>
  )

// This covers the concept of composiblity in the react
// we can create a custom component and use it in the other component
//In the above code we have created a custom component called MainContent
//and used it in the root component
