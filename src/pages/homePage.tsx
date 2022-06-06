import { useContext } from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { CharactersContext } from '../context/character.context';

export function HomePage() {
    const { characters } = useContext(CharactersContext);
    const template = (
        <>
            <Header></Header>
            <main>
                <ul>
                    {characters.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt="" />
                        </li>
                    ))}
                </ul>
            </main>

            <Footer></Footer>
        </>
    );

    return template;
}
