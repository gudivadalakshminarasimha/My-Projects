import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Itemlist from "./Itemlist";
import Fooditem from "./Fooditem";

export default function FoodDetails({ foodid }) {
  const [food, setfood] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const URL = ` https://api.spoonacular.com/recipes/${foodid}/information`;
  const Api_key = "3e243b62baa845f3aceae11cc63ed022";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${Api_key}`);
      const data = await res.json();
      setfood(data);
      setLoading(false);
    }
    fetchfood();
  }, [foodid]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vagetarian ? "🥕vegetarian" : "🍗non -vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>ingredients</h2>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading......</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
