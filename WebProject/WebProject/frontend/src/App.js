import './App.css';
// import Header from './components/Header';
// import Profile from './components/Profile';
// import RecipeDetail from './components/RecipeDetail';
// import Signup from './components/user/Signup';
import Login from './components/user/Login';
//import PostRecipe from './components/userRecipe/PostRecipe'
//import { BrowserRouter as Router }

function App() {

  return( 
  <main className='App'>
   <Login />
    </main>
  );
  // return (
  //   // <Router>
  //   //     <Route exact path="/login" component={Login}/>
  //   // </Router>
  //   <div className="page">
  //       <Login />
  //   </div>
  // );
}

export default App;