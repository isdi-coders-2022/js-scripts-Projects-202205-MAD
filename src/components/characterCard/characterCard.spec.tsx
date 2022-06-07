import { screen, render } from '@testing-library/react';
import { CharacterCard } from './characterCard';

describe('Given the component CharacterCard', () => {
    describe('When calling it', () => {
        test('Render CharacterCard', () => {
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
            render(<CharacterCard character={mock}></CharacterCard>);
            const imageSrc = screen.getByRole('img');
            const name = screen.getByText(/Rick/i);
            expect(imageSrc).not.toHaveAttribute('srasdasdfa');
            expect(imageSrc).toHaveAttribute(
                'src',
                'https://rickandmortyapi.com/api/character/avatar/361.jpeg'
            );

            expect(name).toBeInTheDocument();
        });
    });
});
