import { useContext } from 'react';
import { NavButtons } from '../components/buttons/navButtons';
import { CharacterList } from '../components/characterList/characterList';
import { Footer } from '../core/footer/footer';
import { Header } from '../core/header/header';
import { CharactersContext } from '../context/character.context';

export function HomePage() {
    const template = (
        <>
            <main>
                <CharacterList />
            </main>
            <NavButtons />

            <Footer></Footer>

        </>
    );

    return template;
}

export default HomePage;
