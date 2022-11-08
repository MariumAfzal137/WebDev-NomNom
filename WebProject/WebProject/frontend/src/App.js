//import './App.css';
import Login from './user/Login';
import Signup from './user/Signup';

function App() {
  return (
    // <Router>
    //     <Route exact path="/login" component={Login}/>
    // </Router>
    <div className="page">
        <Signup />
    </div>
  );
}

export default App;