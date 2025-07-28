import React from 'react';

import {FaAward} from 'react-icons/fa';
import {BiBook} from 'react-icons/bi';
import {FaGithub} from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import {BsLinkedin} from "react-icons/bs";
import Link from 'next/link';
import './buttons.css';



const Buttons = () => {
    return (   
         <div className="buttons">
       
                    <div className="button__cards">

                        <article className="button__card">
                            <Link className="button__link" href="/MIT" target="_blank">
                                <FaAward className='button__icon'/>
                                <h5>Education</h5>
                                <small><p className="header-sm">MIT XPRO</p></small>
                                <small> Certificate - MERN Full Stack Development </small>
                            </Link>
                        </article>
                
                        <article className="button__card">
                            <Link className="button__link" href="/davenport" target="_blank">
                                <FaAward className='button__icon'/>
                                <h5>Education</h5>
                                <small><p className="header-sm">Davenport University</p></small>
                                <small>Computer Science BS - CURRENT</small>
                            </Link>
                        </article>

                        <div className='stack-vertical'>
                            <article className="button__card">
                                <Link className="button__link" href="/youtube" target="_blank">
                                    <TiSocialYoutubeCircular className='buttton__icon' style={{fontSize:"2rem", marginBottom:"-0.6rem",  color:"#83EEFF"}}/>
                                    <h5>YouTube</h5>
                                </Link>
                            </article> 

                            <article className="button__card">
                                <Link className="button__link" href="/projects" target="_blank">
                                    <BiBook className='button__icon'/>
                                    <h5>Projects</h5>
                                </Link>
                            </article>
                        </div>

                        <div className='stack-vertical'>
                            <article className="button__card">
                                <Link className="button__link" href="https://www.linkedin.com/in/jennifergerred/" target="_blank">
                                    <BsLinkedin className='button__icon'/>
                                    <h5>LinkedIn</h5>
                                </Link>
                            </article>

                            <article className="button__card">
                                <Link className="button__link" href="https://github.com/jengerred" target="_blank">
                                    <FaGithub className="button__icon"/>
                                    <h5>GitHub</h5>
                                </Link>
                            </article>
                        </div>

                    </div>
                </div>
    )
};
export default Buttons;