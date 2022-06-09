import { useContext } from 'react';
import { CharacterList } from '../components/characterList/characterList';
import { CharactersContext } from '../context/character.context';
import { useAuth0 } from '@auth0/auth0-react';

export function FavPage() {
    const { charactersFav } = useContext(CharactersContext);
    const { isAuthenticated } = useAuth0();
    const template = (
        <>
            {isAuthenticated ? (
                <CharacterList characters={charactersFav} />
            ) : (
                <div>
                    <h2>TO SEE YOUR LIST OF FAVORITES PLEASE LOGIN</h2>
                </div>
            )}
        </>
    );

    return template;
}

export default FavPage;
