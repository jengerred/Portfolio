'use client';

import React from 'react';
import { SiPython } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';
import { SiMapbox } from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { RiNextjsFill } from 'react-icons/ri';
import { PiFileCSharpBold } from 'react-icons/pi';
import Link from 'next/link';
import './socials.css';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <Link className="socials_link" href="/projects#react" target="_blank"><TbBrandReact /></Link>
            <Link className="socials_link" href="/projects#next" target="_blank"><RiNextjsFill /></Link>
            <Link className="socials_link" href="/projects#computer-programming-c" target="_blank"><PiFileCSharpBold /></Link>
            <Link className="socials_link" href="/projects#python" target="_blank"><SiPython /></Link>
            <Link className="socials_link" href="/projects#securities" target="_blank"><MdOutlineSecurity /></Link>
            <Link className="socials_link" href="/projects#impactful-projects" target="_blank"><SiMapbox /></Link>
        </div>
    )
}
export default HeaderSocials;