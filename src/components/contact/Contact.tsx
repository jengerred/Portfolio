import React from 'react';
import { FormEvent } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Particle2 from '../particles/Particle2';



const Contact = () => {
    const form = useRef<HTMLFormElement>(null);


const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) {
    // Optionally handle the null case
    console.error('Form reference is not set');
    return;
  }

  emailjs.sendForm(
    'service_aym51aw',
    'template_syg3uii',
    form.current,
    'FOs0QOlouYoucY9AT'
  )
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });

  e.currentTarget.reset(); // better than e.target.reset()
  alert("Your message was sent successfully");
};

        
    return (
        <>
        <section id="contact">
            <div className="contact">
                <div id="tsparticles2"><Particle2/></div>
         
                    <div className="contact_header">
                        <h5>Get In Touch</h5>
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contact__container">

                        <div className="contact__options">
                            <article className="contact__option">
                                <MdOutlineEmail className="contact__option-icon"/>
                                <h5>Email</h5>
                                <h6>jengerred@aol.com</h6>
                                <a href="mailto:jengerred01@gmail.com" target="_blank">Send a Message</a>
                            </article>

                            <article className="contact__option2">
                            <RiMessengerLine className="contact__option-icon"/>
                                <h5>LinkedIn</h5>
                                <h6>jennifergerred</h6>
                                <a href="https://www.linkedin.com/in/jennifergerred/" target="_blank">Send a Message</a>
                            </article>
                         </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message" rows={3} placeholder="Write Your Message" required/>
                    <button type="submit" className='btn-msg'>Send Message</button>
                </form>
            </div>
            </div>
        </section>
        </>
    )
};
export default Contact;