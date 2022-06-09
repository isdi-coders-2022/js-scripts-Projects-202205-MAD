import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './logOutButton.css';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <div role="button" className="button__out" onClick={() => logout()}>
            <img src="./img/loginout.png" alt="" className="button__out" />
        </div>
    );
};

export default LogoutButton;
