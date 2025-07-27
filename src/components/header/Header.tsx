'use client';

import React from 'react';
import './header.css';
import CTA from './CTA';
//import ME from '../../assets/Jenny.png';
import HeaderSocials from './HeaderSocials';
import Particle from '../particles/Particle';
import Buttons from './HeaderButtons';

const Header = () => {
    return (
    <header>
        <div id="tsparticles"><Particle/></div>

            <div className="header__container">

       
                 <div className="header">
       

                    <div className="hero-left">
                        <div className="hero-text">
                            <h1 className="hero-h1" > Jen&apos;s Portfolio</h1>
                            <h5 className="text-light">Fullstack Developer</h5>
                            {/*<h5>Hello World!</h5>*/}
                            <HeaderSocials /> 
                        </div>
      
                        <a href="#about" className="scroll__down">Scroll Down</a>
                        <a href="#contact" className="scroll__up">Scroll Up</a>
      
                    </div>
                    <CTA/>
                </div>
                <Buttons/>
            </div>

</header>
    )
}

export default Header;