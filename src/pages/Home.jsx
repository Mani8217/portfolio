import Summary from "../components/summary/Summary";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";
function Home(){
// Add an animation to the skills diagram



    return (
        
        <div className="home-body">
          <div className="introduction">
            <h1>Mohammadreza Shidfar | Portfolio</h1>
          </div>

        <div className="summary">
            <Summary />
        </div>

        <div >
            <Skills />
        </div>
        <div className="home-footer">
        <Footer />
        </div>
       </div>
       

      
       
       
    )
}

export default Home;