"use client";


export default function Page() {

  return (
    <div className="about-container">
      <h1>About Me</h1>
        <div className="about-description">
            <p>This is where I will add more info about me and my programming journey.</p>
        </div>
        <br/>
        <p>Particles: Circles</p>
    <style jsx>{`
        .about-container {
          padding: 2rem;
        }
        .about-description{
          margin-left: 3rem;
        }
      
        `}
    </style>
    </div>
  );
}
