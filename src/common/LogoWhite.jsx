import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '/assets/images/logo/white-logo.png';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={LogoWhiteImage} alt="Madinanty lights"/>
            </Link>   
        </>
    );
};

export default LogoWhite;
