import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import './App.css';
import EmployeeList from './components/EmployeeList';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
       <Router>  
           <div className="App">  
           
           <Routes>  
                 <Route exact path='/' element={<Dashboard />}></Route>  
                 <Route exact path='/list' element={<EmployeeList />}></Route>  
                 <Route exact path='/contact' ></Route>  
          </Routes>  
          </div>  
       </Router>  


      
    </div>
  );
}

export default App;
