import { useState } from "react";
import Search from "./components/Seacrch";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetails from "./components/FoodDetails";



function App() {
  const [foodlist, setfoodlist] = useState([]);
  const [foodid,setfoodid]=useState("680975")
  return (
    <>
      <div>
        <Nav />
        <Search setfoodlist={setfoodlist} />
        <Container>
          <Innercontainer>
          <Foodlist setfoodid={setfoodid} foodlist={foodlist} />
          </Innercontainer>
          <Innercontainer>
            <FoodDetails foodid={foodid}/>
          </Innercontainer>
          </Container>
      </div>
    </>
  );
}

export default App;
