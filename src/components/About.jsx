import about from "../assets/about-me.jpg"

const About = () => {
  return (
    <section className="about">
      
      <div className="container">
        <img src={about} alt="" />
        <div className="about-text">
          <h1>About Me</h1>
          <h3>Passionate web developer from the Philippines with a focus on HTML, CSS, and JavaScript proficiency.</h3>
          <p>I'm deeply immersed in ReactJS, always seeking new challenges to enhance my understanding of this powerful library. My ability to learn and adapt makes me well-suited to navigate the constantly evolving web development landscape. I'm dedicated to utilizing my expertise to deliver exceptional user experiences and contribute to project success.</p>
        </div>
      </div>
    </section>
  )
}

export default About