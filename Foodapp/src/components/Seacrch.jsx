import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ setfoodlist }) {
  const [query, setQuery] = useState("pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const Api_key = "3e243b62baa845f3aceae11cc63ed022";
  useEffect(() => {
    async function fooditems() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${Api_key}`);
      const data = await response.json();
      console.log(data);
      console.log(data.results);
      setfoodlist(data.results);
    }
    fooditems();
  }, [query]);
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
      />
    </div>
  );
}
