import { Route , Routes , BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
//import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
    
     

    
   
      <BrowserRouter>
    

        <Routes>
          
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path = "about" element={<About />}  />
          <Route path="*" element={<NoPage />} />


         </Route>

        </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
