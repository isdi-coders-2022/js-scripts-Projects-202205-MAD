import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (
        <div role="button" onClick={() => loginWithRedirect()}>
            <img
                className="menu__icon icon__login"
                src={isAuthenticated ? user?.picture : `./img/iconlogin.png`}
                alt=""
                title="Login"
            />
        </div>
    );
};

export default LoginButton;
