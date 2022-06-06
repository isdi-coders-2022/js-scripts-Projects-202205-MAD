import { useContext } from 'react';
import { NavButtons } from '../components/buttons/navButtons';
import { CharacterList } from '../components/characterList/characterList';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { CharactersContext } from '../context/character.context';

export function HomePage() {
    const template = (
        <>
            <Header></Header>
            <main>
                <CharacterList />
            </main>
            <NavButtons />

            <Footer></Footer>
        </>
    );

    return template;
}
