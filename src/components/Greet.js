import  React  from 'react';

// function Greet(){
//     return <h1>Hello Vivek !!</h1>
// }
//export const Greet=(prop)=>{
    const Greet=props=>{
console.log(props);
return(
<div>
<h1>Hello {props.name} a.k.a {props.heroname}</h1>
{props.children}
</div>

) 
}

export default Greet
