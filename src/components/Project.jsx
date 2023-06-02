
import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import project1 from "../assets/shuriken.png"
import project2 from "../assets/moviesforjunkies.png"
import project3 from "../assets/elegantsilver.png"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='projects' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='cap'>
            <h3>Shuriken</h3>
            <p>A social media application that uses custom API. </p>
            <h6>Tools |Javascript, ReactJS, Tailwind, PHP, MySQL</h6>
            <a href="">livelink</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='cap'>
          <h3>Movies for Junkies</h3>
          <p>A movie website that uses API from Rapid-API.</p>
          <h6>Tools | Javascript, ReactJS, React bootstrap PHP, MySQL</h6>
          <a href="">livelink</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='cap'>
          <h3>Elegant Silver</h3>
          <p>A simple E-Commerce Project which consist of multi-page website.</p>
          <h6>Tools | HTML, CSS</h6>
          <a href="">livelink</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;