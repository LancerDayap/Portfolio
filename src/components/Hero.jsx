import heroimage from "../assets/prof.jpg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"


const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Full-Stack Website <br /> Developer</h1>
          <p>Hi. I'm Lancer Dayap. An aspiring junior Web developer. Philippines based Website Developer</p>
          <div className="hero-buttons">
            <button className="cta">Download CV</button>
          </div>
        </div>
        <img src={heroimage} alt="" />
      </div>
      <div className="stacks">
        <div className="tech">
          Tech Stack |
          </div>
        <div>
          <img className="icons" src={html} alt="" />
          <img className="icons" src={css} alt="" />
          <img className="icons" src={javascript} alt="" />
          </div>
      </div>
    </div>
    
  )
}

export default Hero