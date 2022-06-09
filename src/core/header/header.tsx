import { aMenuItems } from '../../interfaces/menu-items';
import { Menu } from '../menu/menu';
import './header.css';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <div className="container__title">
                <img
                    role="img"
                    className="logo__title"
                    src="./img/Rick-and-Morty.png"
                    alt=""
                />
            </div>
            <Menu options={options}></Menu>
        </>
    );

    return template;
}
