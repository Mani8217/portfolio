import Footer from "../footer/Footer";
function Skills() {
    return (
      <div className="skills">
       <ul>
        <h3>Fundations Of Formations</h3>
        <li>Adecco</li>
        <li>Genneral Assembly</li>
        <li>Azad University of Iran</li>
        <li>CfC</li>
        <li>iFAP</li>
       </ul>

       <ul>
        <h3>Skills</h3>
        
            <li>Javascript</li>
            <li>Java</li>
            <li>Python</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>Angular</li>
        
       </ul>

    <div className="skills-diagram">
       <h2>Languages</h2>
        <ul>
         <li className="english"><span className="skill-name">English</span></li>
         <li className="persian"><span className="skill-name">Persian</span></li>
         <li className="turkish"><span className="skill-name">Turkish</span></li>
         <li className="spanish"><span className="skill-name">Spanish</span></li>
        </ul>
      </div>
    </div>
    
    
    )


}
export default Skills;

