
//Challenge 
//Part 1
//Create a custom "Page" component that renders the following JSX
//It should return an ordered list with you are excited to be learning react :)
//Render the page component

import {createRoot } from 'react-dom/client';
import {createElement} from 'react';
const root=createRoot(document.getElementById("root"))

root.render(
    <Page/>
);
function Page(){
    return(
        <main>
        <h1>Why I am excited to learn React</h1>
        <ol>
            <li>Coming from a background of HTML,CSS , JS</li>
            <li>React is the next step in upskilling</li>
            <li>I will get my job this year</li>
        </ol>
        </main>
    )
}
