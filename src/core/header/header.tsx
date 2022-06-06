import { aMenuItems } from '../../interfaces/menu-items';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <div>
                <h1> Rick and Morty</h1>
            </div>
        </>
    );

    return template;
}
