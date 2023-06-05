import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div className='contact-section'>
      <section className="contact">
      <h1>Contact Me</h1>
      <div className="container">
        <h3>Got a project in mind? Sign me up!</h3>
        <form>
          <input type="text" placeholder="Name" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
