import React from 'react';
//import ME from '../../assets/test.png';
import {FaAward} from 'react-icons/fa';
import {BiBook} from 'react-icons/bi';
//import {VscFolderLibrary} from 'react-icons/vsc';
import {FaGithub} from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import {BsLinkedin} from "react-icons/bs";



const Buttons = () => {
    return (
        <>
   
         <div className="about">
       
            <div className="container about__container">

                <div className="about_content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small style={{color: "white"}}>MIT XPRO</small>
                            <br/>
                            <small> Certificate - MERN Full Stack Development </small>

                        </article>

                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small>Davenport University</small>
                            <br/>
                            <small>Computer Science BS - CURRENT</small>
                        </article>


                        <div className='stack-vertical'>
                            <article className="about__card">
                                <TiSocialYoutubeCircular className='about__icon' style={{fontSize:"2rem", marginBottom:"-0.6rem"}}/>
                                <h5>YouTube</h5>
                            </article> 

                              <article className="about__card">
                                <BiBook className='about__icon'/>
                                <h5>Projects</h5>
                            </article>
                        </div>

                        <div className='stack-vertical'>
                               <article className="about__card">
                                <a href="https://www.linkedin.com/in/jennifergerred/" target="_blank"><BsLinkedin className='about__icon'/></a>
                                <h5>LinkedIn</h5>
                            </article>

                            <article className="about__card">
                            <a href="https://github.com/jengerred" target="_blank"><FaGithub className="about__icon"/></a>
                                <h5>GitHub</h5>
                            </article>

                        </div>

                    </div>
                    <br/>
                </div>
               
          
            </div>
            </div>
      
        </>
    )
};
export default Buttons;