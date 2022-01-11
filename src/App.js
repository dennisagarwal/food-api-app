import "./App.css";
import "./key";
import axios from "axios";
import react, { useState } from "react";
import RecipeTile from "./Components/RecipeTile/RecipeTile";
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const api_id = "161c446a";
  const api_key = "dcf65627400407ddfa85671bd611aa83";

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${api_id}&app_key=${api_key}&calories=591-722&health=alcohol-free`;

  const submitHandler = (e) => {
    e.preventDefault();
    getRecipies();
  };

  function getRecipies() {
    axios
      .get(`${url}`)
      .then((result) => {
        console.log(result.data);
        setRecipes(result.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="app">
      <h1>Food Recipe App</h1>
      <form className="app__searchForm" onSubmit={submitHandler}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <input className="app__submit" type="submit" value="Search"></input>
      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}></RecipeTile>
          //green recipe is from recipeTile
          //blue recipe is arguement
            {/* return <p>{recipe["recipe"]["label"]}</p>; */}
        })}
      </div>
    </div>
  );
}

export default App;
