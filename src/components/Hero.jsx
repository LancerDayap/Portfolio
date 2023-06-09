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
            <a className="cta" class="btn btn-danger" role="button" href="https://docs.google.com/document/d/1G4HpUB5xIarFuow5VWa13xOF-3z7V3ma4m-ZJudxULU/edit?usp=drive_link"
            download="Lancer Dayap Resume" target="blank">
            View CV
          </a>
          </div>
          <div class="hero-icons">
            <a href="https://github.com/LancerDayap" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/lancer-dayap-581518278/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
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