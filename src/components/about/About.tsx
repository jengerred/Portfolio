import React from 'react';


const About = () => {
    return (
        <section id="about">
         
                 <div className="about">
                     <div className="about_content">
                        <h2 className="header-style">⬆️ ~ My Programming Journey ~ ⬆️</h2>
                        <h3>Hello World! 👋 My name is Jennifer.</h3>
                        <p> ⬆️ Scroll up to explore my learning journey.  Click any step on the staircase for more details and insight into how that step contributed to my development. ⬆️</p>
                     </div>
                 </div>

        <style jsx>{`
            .about_content {
                text-align: center;
            }
            .about_content h3 {
                color:#f858da
            }
            .header-style {
                text-shadow: 1px 2px  #f858da;
                    color: #42daf2;
            }
        `}</style>
      
        </section>
    )
};
export default About;

             {/* <p>Hello World! 👋 My name is Jennifer. 
                My journey began with curiosity in building simple websites for my family and local community, which inspired me to complete MIT xPRO’s full-stack program and dive deeper into modern web technologies. That experience sparked a passion for technology and problem-solving, leading me to pursue formal education in Computer Science at Davenport University, where I specialize in computer theory, algorithms, and artificial intelligence.

                My goal is to leverage my technical skills and creativity to build applications that solve real-world problems, make technology more accessible, and have a positive impact on my community. I am especially interested in the intersection of AI, algorithms, and civic tech, and I am eager to collaborate on projects that drive meaningful change.

                Most recently, I created an AI-powered resource navigator for the Grand Rapids community, using open-source tools like Leaflet and OpenRouteService to ensure the platform remains free and accessible to all.
                </p>
            */}
            {/** <p>Check out my 
                <a href='#portfolio' className="jump">
                    Projects 
                </a>   
                to see what I have been able to do. 
            /p>
            <br/>
            */}
