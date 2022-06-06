import { useContext } from 'react';
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

            <Footer></Footer>
        </>
    );

    return template;
}
