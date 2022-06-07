import { useParams } from 'react-router-dom';
import { CharacterCard } from '../components/characterCard/characterCard';

export function DetailsPage() {
    const { id } = useParams();
    const template = (
        <>
            <div>
                <h2>Now showing post {id}</h2>
            </div>
        </>
    );

    return template;
}

export default DetailsPage;
