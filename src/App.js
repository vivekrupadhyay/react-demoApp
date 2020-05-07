import React from 'react';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'

//Functional Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          <Greet name="Bruce" heroname="Shaktiman" >
<p>This is child props</p>
          </Greet>
          <Greet name="Dyna" heroname="Aryaman">
<button>Action</button>
          </Greet>
          <Greet name="Jacky" heroname="Spyderman">
<input type="text"></input>
          </Greet>
           <Welcome heroname="Ramayan"></Welcome>
           <Welcome heroname="Shri Krishna"></Welcome>
           <Message />
         {/* <Hello /> */}
          {/* <SimpleHooksExample /> */}
        </p>
       
      </header>
    </div>
  );
}

export default App;
