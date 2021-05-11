import React from 'react';
// Functional Component
// function Greet() {
//     return <h1>Hello Aditya</h1>
// }

// ES6 arrow function syntax
// export const Greet = (props) => {
// console.log(props)
// return (
//     <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//     </div>
// )

// }

// Destructuring props in the function arguments
//  const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
    
//     }

    // Destructuring props in the function body
 const Greet = (props) => {
     const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
    
    }

export default Greet