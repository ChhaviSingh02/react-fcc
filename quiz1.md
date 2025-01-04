1. Where dose the React pull all of the elements I create in JSX when call 'root.render()'?
    Correct Answer: 
    root.render puts all the element into the DOM element with DOM id root

2. What would show up in my console if I were to run this line of code:
console.log(<h1>Hello World!</h1>)
Correct Answer : It would an object representation of the JSX element , not the actual HTML
An object!

3. What is wrong with this code:
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
JSX element must be wrapped in a single parent element
root.render(
    <div>
    <h1>Hi there</h1>
    <p>This is my website!</p>
    </div>
)

4. What does it mean for something to be "declarative" instead of"imperative"?
Correct Answer : Declarative means to describing what you want to achieve,
                Imperative means to describing how to achieve it

5. What does something to be compostable?
    Composable means that compoenents can be combined in various ways to build a complex UIs.
