// browsers don't understand react

// getting react into our project using CDN links
// include those CDN links inside head tag

// facebook developers have built react

// two objects that we got after inlcuding CDN links
// console.log(React);
// console.log(ReactDOM);

// react at the end of the day is javascript 

// the first CDN link is the core react 
// the second CDN link is reactDOM (useful for DOM operations) (used for browser environments)

// react does not only works on browsers
// it also works in mobile devices and many other environments
// for every other environment react provides a special library for ease of development, for example react provides reactDOM for browser applications

// basic hello world program using react
// const newElement = React.createElement('div',{},'this is a new div');
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);

// creating an element is a core thing of react
// creating a root and rendering something into it is the work of reactDOM

// react was built with the philosophy that we want to manipulate the DOM using javascript

// the most expensive operation in a webpage is DOM manipulation
// all the javascript libraries and frameworks are trying to optimize this

// react element with attrbitues
// const newElement = React.createElement('div',{id:"firstDiv"},'this is a new div');
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// console.log(newElement)
// rootElement.render(newElement);

// creating an nested structure using react
const newElement = React.createElement(
    'div',
    {
        'id':'mainDiv',
        'className': 'elems',
    },
    [
        React.createElement(
            'div',
            {
                'id':'childDiv1',
                'key':'div1',
            },
            "first div",
        ),
        React.createElement(
            'div',
            {
                'id':'childDiv2',
                'key':'div2',
            },
            "second div",
        ),
    ]
)
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
console.log(newElement)
rootElement.render(newElement);

// but our code is getting messy
// for this we have jsx
// react can be written without jsx

// react cdn links should come before react dom cdn links
// and the both should come before main script

// react element at the end of the day is a javascript object
// the render method takes the javascript object (created by the react element) and converts it into an HTML element

// if something already existed in the root element then the render method will override the content of the root element
// but the elements other than the root element aren't touched

// react can be used in a particular section of our website because it's a library

// HOMEWORK
// what are CDN links?
// what is Cross Origin?
// what is the difference between react.development.js and react.production.js
// what is the difference between library and framework