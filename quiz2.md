// quiz 2
// 1. What is a React Component?
// Sol: A React component is a reusable piece of UI that returns a React element, which is a JavaScript object representation of a DOM element.

// 2. What is wrong with the following code?
function MyComponent(){
    return(
        <small> I'm tiny text</small>
    )
}
// Sol: The function name should start with a capital letter to be recognized as a React component.
function MyComponent(){
    return(
        <small> I'm tiny text</small>
    )
}

// 3. What is wrong with the following code?
function Header(){
    return(
        <header>
            <img src="logo.png" alt="Logo"/>
        </header>
    )
}
// Sol: We need to use JSX syntax to render the component. The correct way is to use <Header /> inside root.render.
root.render(<Header />);
