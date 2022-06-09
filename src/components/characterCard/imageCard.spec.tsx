import { screen, render } from '@testing-library/react';
import { ImageCard } from './imageCard';
import { BrowserRouter } from 'react-router-dom';
describe('Given the component ImageCard', () => {
    describe('When calling it', () => {
        test('Render ImageCard', () => {
            const mock = {
                id: 361,
                name: 'Toxic Rick',
                status: 'Dead',
                species: 'Humanoid',
                type: "Rick's toxic side",
                gender: 'Male',
                origin: {
                    name: 'Detoxifier',
                    url: 'https://rickandmortyapi.com/api/location/64',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/27'],
                url: 'https://rickandmortyapi.com/api/character/361',
                created: '2018-01-10T18:20:41.703Z',
            };
            render(
                <BrowserRouter>
                    <ImageCard character={mock} />
                </BrowserRouter>
            );
            const nameMock = screen.getByText(mock.name);

            expect(nameMock).toBeInTheDocument();
        });
    });
});
