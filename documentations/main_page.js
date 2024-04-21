// main page https://react.dev/learn

// ABOUT REACT
// React components are functions that return markup
// React components names must start with capital letters, while HTML tags should be lower case
// JSX is stricter than HTML
// componets can't return multiple jsx tags, you have wrap them into a shared parent like <div></div> or <></> wrapper
// If you have a lot of HTML to port to JSX, you can use an online converter. https://transform.tools/html-to-jsx
// React does not prescribe how you add CSS files.
// JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
// You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes : src={user.imageUrl}
// for styling attribute : style = {{key1:prop1, key2:prop2}}
// use if else statements conditional rendering
// if(isLoggedIn)
// {
//     content = <AdminPanel/>;
// }
// else
// {
//     content = <LoginForm/>;
// }
// use terenary operator for conditional rendering
// {isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)};
// when we don't need the else branch we an use the logical && syntax {isLoggedIn && <AdminPanel/>}

// RENDERING LISTS (PENDING)
// let products = [
//     { title: 'Cabbage', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ];
// let listItems = products.map(product =>
//     <li key={product.id}>
//         {product.title}
//     </li>
// );
// let newElem = (
//     <ul>
//         {listItems}
//     </ul>
// );
// let rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(newElem);

// CANNOT USE JSX UNTILL WE INCLUDE TOOLS LIKE BABEL
// if we are using just the CDN links then we cannot use jsx in our .js file, for using jsx we need to have tools like Babel

// KEYS FOR LIST ITEMS
// for each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
// Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

// HANDLING EVENTS
// function MyButton() {
//     function handleClick() {
//         alert('You clicked me!');
//     }
//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

// START FROM UPDATING THE SCREEN : https://react.dev/learn