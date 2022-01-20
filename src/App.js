import Add from './component/add';

import Todolist from './component/todolist';
import './App.css';

function App() {
  return (

    <div className="App">
   <p className='title'>The todo list:</p> 

   <Add/>  
   <Todolist/>


    
    </div>
  );
}

export default App;
