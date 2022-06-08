import { Link } from 'react-router-dom';
import { iCharacter } from '../../interfaces/interfaz';
export function ImageCard({ character }: { character: iCharacter }) {
    console.log(character.id);
    const template = (
        <>
            <div className="image__list">
                <Link to={'/details/' + character.id}>
                    <img className="image" src={character.image} alt="" />
                </Link>
            </div>
            <p>{character.name}</p>
        </>
    );
    return template;
}
