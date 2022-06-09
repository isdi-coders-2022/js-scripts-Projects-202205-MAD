import { useContext } from 'react';
import { Browser } from '../components/Browser/browser';
import { NavButtons } from '../components/buttons/navButtons';
import { CharacterList } from '../components/characterList/characterList';
import { CharactersContext } from '../context/character.context';

export function HomePage() {
    const { characters, charactersBrowser, currentName } =
        useContext(CharactersContext);

    const template = (
        <>
            <main>
                <Browser />

                <CharacterList
                    characters={
                        currentName === '' ? characters : charactersBrowser
                    }
                />
            </main>
            <NavButtons />
        </>
    );

    return template;
}

export default HomePage;
