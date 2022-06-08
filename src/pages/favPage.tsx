import { useContext } from 'react';
import { CharacterList } from '../components/characterList/characterList';
import { CharactersContext } from '../context/character.context';

export function FavPage() {
    const { charactersFav } = useContext(CharactersContext);
    console.log(charactersFav);
    const template = (
        <>
            <CharacterList characters={charactersFav} />
        </>
    );

    return template;
}

export default FavPage;
