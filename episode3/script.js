import React from "react";
import ReactDOM from "react-dom/client"

// npx 
// commands are used for executing packages

// creating scripts
// for dev build : "start" : "parcel index.html"
// for prod build : "build" : "parcel build index.html"

// now we will be using npm run start command for starting a dev build
// and npm run build for prod build

// npm start is a shortcut for npm run start

// react.createElement gives us an javascript object 
// render() method takes this object and converts it into an HTML element and puts it into the DOM

// use "not rendered" on the root element

// using jsx to create elements
// const newElement = <div>Mission Placement</div>;
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);

// jsx is not a part of react
// react can be written without jsx
// jsx is a syntactical sugar
// behind the scenes jsx code is converted into react.createElement method() by transpilation tools like Babel

// with react we can have HTML and JavaScript in the same file

// jsx is not HTML inside javascript
// jsx is HTML like syntax

// in jsx we have classname in HTML we have class
// in jsx we have tabIndex in HTML we have tabindex
// similarly we have many attributes that are different in jsx and different in HTML

// js engine can't understand jsx code
// so browsers don't understand jsx code

// babel is not created by facebook

// babel also converts modern ES6 code into old browser compatible javascript

// use () for multi line jsx
// const newElement = (
//     <div>Mission Placement</div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);

// components
// are of two types: functional component (new way) and class components (old way)

// functional component
// is a function that returns a react element or jsx

// a functional component returning jsx
// const NewElement = ()=>(
//     <div>Mission Placement</div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement/>);

// a functional component returns react element
// const NewElement = ()=>{
//     return React.createElement('div',{},"Mission Development");
// };
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement/>);

// a functional component using normal function (not using arrow function) returning react.crateelement
// const NewElement1 = function(){
//     return React.createElement('div',{},"Mission Development");
// };
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement2/>);

// a function component using normal function (not using arrow function) return jsx
// const NewElement2 = function(){
//     return <div>Mission FrontEnd Development</div>
// };
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement2/>);

// name of component should start with capital letter
// rendering a component we need to use <ComponentName/>

// convention
// const NewElement2 = () => <div>Mission Placement</div>;
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement2/>);

// rootElement.render(newElement);
// this way is used to render a reactelement 
// this way cannot be used to render a functional component

// component composition
// const SmallElement = () => <h1>HEADING</h1>;
// const NewElement2 = () => <div>Mission Placement</div>;
// const ParentElement = () => (
//     <>
//         <SmallElement/>
//         <NewElement2/>
//     </>
// )
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<ParentElement/>);

// using {} for insertion javascript
const name = "chinu";
const NewElement2 = () => <div>{`${name}`} is on Mission Placement</div>;
const ParentElement = () => (
    <>
        <NewElement2/>
        {/* <NewElement2></NewElement2> */}
        {/* {NewElement2()} */}
    </>
)
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<ParentElement/>);

// ways to render a component 
// {<NewElement2/>}
// {<NewElement2></NewElement2>}
// {{NewElement2()}}
// all work 

// the content of {} is used but after sanitization

// our react code is readable because of jsx