import "./App.css";
import "./key";
import axios from "axios";
import react, { useState } from "react";
import RecipeTile from "./Components/RecipeTile/RecipeTile";
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
const [healthLabels, setHealthLabels]=useState("vegan")
  const api_id = "161c446a";
  const api_key = "dcf65627400407ddfa85671bd611aa83";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}&health=${healthLabels}`;

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
        <select className="app__healthLabels">
        <option value="vegan" onClick={()=>setHealthLabels("vegan")}>Vegan</option>
        <option value="vegetarian" onClick={()=>setHealthLabels("vegetarian")}>Vegetarian</option>
        <option value-="paleo" onClick={()=>setHealthLabels("paleo")}>Paleo</option>
        <option value-="dairy-free" onClick={()=>setHealthLabels("dairy-free")}>Dairy Free</option>
        <option value-="wheat-free" onClick={()=>setHealthLabels("wheat-free")}>Wheat Free</option>
        <option value-="gluten-free" onClick={()=>setHealthLabels("gluten-free")}>Gluten Free</option>
        <option value-="low-sugar" onClick={()=>setHealthLabels("low-sugar")}>Low Sugar</option>
        <option value-="peanut-free" onClick={()=>setHealthLabels("peanut-free")}>Peanut Free</option>
        <option value-="egg-free" onClick={()=>setHealthLabels("Egg-free")}>Egg Free</option>
        <option value-="tree-nut-free" onClick={()=>setHealthLabels("tree-nut-free")}>Tree Nut Free</option>
        <option value-="soy-free" onClick={()=>setHealthLabels("soy-free")}>Soy Free</option>
        <option value-="fish-free" onClick={()=>setHealthLabels("fish-free")}>Fish Free</option>
        <option value-="shellfish-free" onClick={()=>setHealthLabels("shellfish-free")}>ShellFish Free</option>
        </select>
      </form>
      <div className="app__recipes">
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
