import React  from 'react';
//With JSX & Without JSX
const Hello=()=>{
// return (
//     <div>
//         <h1>
//             Hello Vivek Upadhyay
//         </h1>
//     </div>
// )
return React.createElement('div',
{id:'divId',className:'clsDiv'},React.createElement('h1',null,'Vivek'))
}

export default Hello