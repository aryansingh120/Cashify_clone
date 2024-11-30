import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Stores from "./Components/Stores"
import Questions from "./Components/Questions"
import Article from "./Components/Article"
import Footer from "./Components/Footer"
import Footer2 from "./Components/Footer2";



function App() {
  return (
    <div className="">
      <Navbar/>
      <Services/>
      <Stores/>
      <Questions/>
      <Article/>
      <Footer/> 
      {/* <Footer2/> */}
     
     
    </div>
  );
}

export default App;
