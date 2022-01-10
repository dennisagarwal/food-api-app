import "./App.css";
import './key';
import axios from "axios";
import react,{useState} from "react";

function App() {
  const [query,setQuery]=useState("")
  const api_id="161c446a"
  const api_key="dcf65627400407ddfa85671bd611aa83"

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${api_id}&app_key=${api_key}&from=0&to=36&calories=591-722&health=alcohol-free`;

  function getRecipies(){
    axios
    .get(`${url}`)
    .then((result) => {
      console.log(result);
     })
    .catch((error) => {
      console.log(error);
    });
  }

  return (

    <div className="App">
      <h1 onClick={getRecipies}>Food Recipe App</h1>
      <form className="app_searchForm">
        <input type="text" placeholder="enter ingridient" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
      </form>
    </div>
  );
}

export default App;
