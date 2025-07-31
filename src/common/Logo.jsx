import React from 'react';

import LogoImg from '/assets/images/logo/Logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Madinanty lights"/>
            </Link>
        </>
    );
};

export default Logo;    
