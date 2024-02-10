import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import '../styles/Footer.css';

const Footer = () => {
    const ref = useRef(null);

    const startContinuousLoading = () => {
        if (ref.current) {
            ref.current.continuousStart();
        }
    };

    const startStaticLoading = () => {
        if (ref.current) {
            ref.current.staticStart();
        }
    };

    const completeLoading = () => {
        if (ref.current) {
            ref.current.complete();
        }
    };

    return (
        <footer className="footer-container">
            <LoadingBar color='#f11946' ref={ref} />
            <p>
                Made with <span><i className="fa-solid fa-heart"></i></span> and <span><i className="fa-brands fa-react"></i></span> by{' '}
                <a href="https://github.com/mayurpatil45/" style={{ fontWeight: "bolder" }} className="track" onClick={startStaticLoading}>
                    Mayur Patil
                </a>
            </p>
        </footer>
    );
};

export default Footer;
