import { aMenuItems } from '../../interfaces/menu-items';
import { Menu } from '../menu/menu';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <div>
                <h1> Rick and Morty</h1>
            </div>
            <Menu options={options}></Menu>
        </>
    );

    return template;
}
