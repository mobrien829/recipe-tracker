import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import RecipeGrid from './containers/RecipeGrid'
import NavBar from './containers/NavBar'
import { Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header>
          {/* <p>Recipe-holder app (placeholder name)</p> */}
        <NavBar />
      </header>
      <div id="body-container">
        <Route exact path="/"
        render={routerProps => <RecipeGrid {...routerProps}/>}
       />
      </div>
    </div>
  );
}

export default App;
