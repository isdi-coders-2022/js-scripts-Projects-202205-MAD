import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div role="button" onClick={() => loginWithRedirect()}>
            <img
                className="menu__icon icon__login"
                src={`./img/iconlogin.png`}
                alt=""
            />
        </div>
    );
};

export default LoginButton;
