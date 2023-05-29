import { Carousel } from "react-bootstrap"

const Project = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <Carousel>
        <Carousel.Item>
          <div className="project">
            <h3>Shuriken</h3>
            <p>Description of project 1</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project">
            <h3>Movies for Junkies</h3>
            <p>Description of project 2</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project">
            <h3>Elegant Silver</h3>
            <p>Description of project 3</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project;
