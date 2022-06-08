import { useContext } from 'react';
import { NavButtons } from '../components/buttons/navButtons';
import { CharacterList } from '../components/characterList/characterList';
import { Footer } from '../core/footer/footer';
import { Header } from '../core/header/header';
import { CharactersContext } from '../context/character.context';
import { useAuth0 } from '@auth0/auth0-react';

export function HomePage() {
    const { characters } = useContext(CharactersContext);
    const { user, isAuthenticated } = useAuth0();
    const template = (
        <>
            <main>
                <CharacterList characters={characters} />
            </main>
            <NavButtons />
        </>
    );

    return template;
}

export default HomePage;
