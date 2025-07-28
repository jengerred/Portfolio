'use client';

import React from 'react';
import Link from 'next/link';
import './cta.css';


const CTA = () => {

    return (
        <div className="CTA">
            <Link className="btn-blue" href="/about-me" target="_blank">About Me</Link>
            <Link className="btn-pink" href="#contact">Let&apos;s Talk</Link>
        </div>
    )
}

export default CTA;