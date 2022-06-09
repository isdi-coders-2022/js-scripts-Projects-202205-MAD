import { Link } from 'react-router-dom';
import { iCharacter } from '../../interfaces/interfaz';
import { DeleteButton } from '../buttons/deleteButton';
import { FavButtons } from '../buttons/favButtons';
import { useAuth0 } from '@auth0/auth0-react';
export function ImageCard({ character }: { character: iCharacter }) {
    const { isAuthenticated } = useAuth0();
    const template = (
        <>
            <div className="image__list">
                {character.favorite === false ? (
                    <FavButtons character={character} />
                ) : (
                    <DeleteButton character={character} />
                )}

                <Link to={'/details/' + character.id}>
                    <img
                        className="image"
                        src={character.image}
                        alt="See datails"
                        title="See details"
                    />
                </Link>
            </div>
            <p>{character.name}</p>
        </>
    );
    return template;
}
