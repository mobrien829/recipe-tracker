import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import RecipeGrid from './containers/RecipeGrid'

function App() {
  return (
    <div className="App">
      <header>
          <p>Recipe-holder app (placeholder name)</p>
      </header>
      <div id="body-container">
        <RecipeGrid />
      </div>
    </div>
  );
}

export default App;
