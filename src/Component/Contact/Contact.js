import React, { useEffect } from 'react';
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarCont from '../NavbarCont/NavbarCont';

const Contact = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])

    function sendEmail(e) {
        e.preventDefault();
        emailjs
        .sendForm("service_ut35xvn", "template_i5dr0bf", e.target, "user_O64cgZW3PaPoVznkQJARQ")
        .then(
            (result) => {
                console.log(result.text);
                e.target.reset();
                alert("Your email successfully send")
            },
            (error) => {
            console.log(error.text);
            }
        );
        
    }
    return (
        <div>
            <NavbarCont/>
            <section >
                <div className="contact">
                    <h1 className="mb-5">Contact form</h1>
                    <div data-aos="flip-right">
                    <form onSubmit={sendEmail} className="contact-form">
                        <input type="text" className="form-control" name="name" placeholder="Your Name " id="" required/> <br/>
                        <input type="text" className="form-control" name="email" placeholder="Your Email" id="" required /> <br/>
                        <input type="text" className="form-control" name="subject" placeholder="Subject" id="" /> <br/>
                        <textarea rows="5" type="text" className="form-control" name="message" placeholder="Message" id="" required/> <br/>
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;