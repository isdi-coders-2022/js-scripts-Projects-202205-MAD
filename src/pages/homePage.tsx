import { useContext } from 'react';
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
        </>
    );

    return template;
}

export default HomePage;
