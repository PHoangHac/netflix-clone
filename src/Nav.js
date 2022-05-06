import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        }

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                alt='netflix-logo'
                className='nav_logo'
                src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' />
            <img
                alt='netflix-avatar'
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
        </div>
    )
}

export default Nav;