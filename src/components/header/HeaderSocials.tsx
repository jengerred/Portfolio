'use client';

import React from 'react';
import './header.css';
import { SiPython } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';
import { SiMapbox } from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { RiNextjsFill } from 'react-icons/ri';
import { PiFileCSharpBold } from 'react-icons/pi';

const HeaderSocials = () => {
    return (
        <>
        <div className="header__socials">
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><TbBrandReact /></a>
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><RiNextjsFill /></a>
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><PiFileCSharpBold /></a>
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><SiPython /></a>
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><MdOutlineSecurity /></a>
            <a className="socials_link" href="https://github.com/jengerred" target="_blank"><SiMapbox /></a>

     </div>

        </>
    )
}
export default HeaderSocials;