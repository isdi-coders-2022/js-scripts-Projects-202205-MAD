import './menu.css';
import { Link } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu-items';
import LoginButton from '../../auth0/loginButton';
import LogoutButton from '../../auth0/logOutButton';
import { useAuth0 } from '@auth0/auth0-react';

export function Menu({ options }: { options: aMenuItems }) {
    const { isAuthenticated } = useAuth0();
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>
                            <img
                                className="menu__icon"
                                src={`./img/icon` + item.label + `.png`}
                                alt=""
                                title={item.title}
                            />
                        </Link>
                    </li>
                ))}
                <li>
                    <LoginButton></LoginButton>
                </li>
                {isAuthenticated ? (
                    <li>
                        <LogoutButton></LogoutButton>
                    </li>
                ) : (
                    ''
                )}
            </ul>
        </nav>
    );
}
