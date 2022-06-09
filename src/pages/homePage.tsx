import { useContext } from 'react';
import { NavButtons } from '../components/buttons/navButtons';
import { CharacterList } from '../components/characterList/characterList';
import { CharactersContext } from '../context/character.context';

export function HomePage() {
    const { characters } = useContext(CharactersContext);

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
