import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterCard } from '../components/characterCard/characterCard';
import { CharactersContext } from '../context/character.context';
import { iCharacter } from '../interfaces/interfaz';
import './detailsPage.css';

export function DetailsPage() {
    const { characters } = useContext(CharactersContext);

    const params = useParams();
    const template = (
        <>
            <div className="wrapper__characterCard">
                <CharacterCard
                    character={
                        characters.find(
                            (item) => item.id === +params.id!
                        ) as iCharacter
                    }
                />
            </div>
        </>
    );

    return template;
}

export default DetailsPage;
