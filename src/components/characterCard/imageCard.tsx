import { Link } from 'react-router-dom';
import { iCharacter } from '../../interfaces/interfaz';
import { FavButtons } from '../buttons/favButtons';
export function ImageCard({ character }: { character: iCharacter }) {
    const template = (
        <>
            <div className="image__list">
                <FavButtons character={character} />
                <Link to={'/details/' + character.id}>
                    <img className="image" src={character.image} alt="" />
                </Link>
            </div>
            <p>{character.name}</p>
        </>
    );
    return template;
}
