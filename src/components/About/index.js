import React from 'react';
import coverImage from '../../assets/cover/aaliyah.JPG'

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Who am I?</h1>
      <div className="mt-3 float-right">
      <img src={coverImage} classname='profile float-left' style={{ width:  "50%" }} alt="profile" />
      
        <p>Hi there! I'm Aaliyah and I'm extremely passionate about capturing memories that you will cherish forever. I have a boyfriend of 6 years and a 3 year old, so I understand how important it is to have photos to look back on.</p>
      </div>
      
    </section>

  );
}

export default About;