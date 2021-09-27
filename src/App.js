import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import RecipeCard from './components/RecipeCard'

function App() {
  return (
    <div className="App">
      <header>
          <p>Recipe-holder app (placeholder name)</p>
      </header>
      <div id="body-container">
        <RecipeCard />
      </div>
    </div>
  );
}

export default App;
