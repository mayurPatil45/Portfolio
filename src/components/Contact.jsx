import React, { useRef } from "react";
import '../styles/Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';

const Contact = () => {
    // ref
    const ref = useRef();
    // submission
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            `${process.env.REACT_APP_EJS_SERVICE_ID}`,
            `${process.env.REACT_APP_EJS_TEMPLATE_ID}`,
            ref.current,
            `${process.env.REACT_APP_EJS_USER_ID}`
        ).then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            toast('Submitted successfully', { theme: 'colored', type: 'success' });
            // Redirect to your email address
            window.location.href = 'mailto:youremail@example.com';
        }, function (error) {
            console.log('FAILED...', error);
            toast('Something went wrong', { theme: 'colored', type: 'error' });
        });
        ref.current.reset();
    }

    const { ref: myTitleRef, inView: titleVisible } = useInView();

    return (
        <div className="form-container" id="contact">
            <div className="contact-content">
                <div className="contact-info">
                    <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                        <i className="fa-solid fa-link"></i> Get In <span className="track">Touch</span>
                    </h2>
                    <div className="underline"></div>
                    <p>Send Me Anonymous Messages...</p>
                    <form ref={ref} onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your name" style={{ background: "#e5ecfb" }} required />
                        <input type="email" name="email" placeholder="Email" style={{ background: "#e5ecfb" }} required />
                        <textarea id="textarea" name="message" placeholder="How can I help you?" style={{ background: "#e5ecfb" }} required></textarea>
                        <button
                            className="submit-btn"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                    <ToastContainer autoClose={3000} />
                </div>
            </div>
        </div>
    )
}

export default Contact;