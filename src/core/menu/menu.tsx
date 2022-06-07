import './menu.css';
import { Link } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu-items';

export function Menu({ options }: { options: aMenuItems }) {
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
                            />
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="login">
                        <img
                            className="menu__icon"
                            src={`./img/iconlogin.png`}
                            alt=""
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
