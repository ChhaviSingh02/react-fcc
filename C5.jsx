
//Challenge 
//Part 1
//Create a custom "Page" component that renders the following JSX
//It should return an ordered list with you are excited to be learning react :)
//Render the page component
import {createRoot } from 'react-dom/client';
import {createElement} from 'react';
import imageSrc from './img/R.png';


const root=createRoot(document.getElementById("root"))

root.render(
    <Page/>
);
function Page(){
    return(
        
        <main>
        <header>
            
        <img src={imageSrc} alt="Kutch" width="250px" />
        </header>
        <h1>Why I am excited to learn React</h1>
        <ol>
            <li>Coming from a background of HTML,CSS , JS</li>
            <li>React is the next step in upskilling</li>
            <li>I will get my job this year</li>
        </ol>
        <footer>
           <small>2025 <span>Singh</span> Development. All rights reserved. </small>  
            </footer>
        </main>
    )
}
//Part 2
//Challenge
//Add a <header> element with the <img/> element inside of it
//  React logo inside the (Src="react-lgog.png") and make sure to set 
// the width attribute to something manageable so that it doesnot cover the entir screen
// add an <h1> element with the text dexcibing the page (Reasons why i am excited to learn react")
//place it ablove the ordered list and then it above the <h1 and <ol>
// inside the main component to keep our semantic structure flowing well
// add a <footer> after the list that says 
// 20xx <last name here> development . All rights reserved.
