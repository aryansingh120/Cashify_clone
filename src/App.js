import Services from "./Components/Services";
import Stores from "./Components/Stores"
import Questions from "./Components/Questions"
import Article from "./Components/Article"
import { Route,Routes } from "react-router-dom";
import NearbyStore from "./Components/NearbyStore";

function App() {
  return (
    <div className="">
      <Routes>
      <Route path={"/"} element={<> <Services/> <Stores/> <Questions/> <Article/> </>}/>
             <Route path={"/details"} element={ <NearbyStore/>}/>
             </Routes>
 
     
     
    </div>
  );
}

export default App;
