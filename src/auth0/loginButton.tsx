import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CharactersContext } from '../context/character.context';

const LoginButton = () => {
    const { isAuthenticated, user } = useContext(CharactersContext);
    const { loginWithRedirect } = useAuth0();

    return (
        <div role="button" onClick={() => loginWithRedirect()}>
            <img
                className="menu__icon icon__login"
                src={isAuthenticated ? user?.picture : `./img/iconlogin.png`}
                alt=""
            />
        </div>
    );
};

export default LoginButton;
