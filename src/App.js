import "./App.css";
import './key'

function App(props) {
  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=$props.api_id}&app_key=${props.api_key}&from=0&to=36&calories=591-722&health=alcohol-free`;
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
