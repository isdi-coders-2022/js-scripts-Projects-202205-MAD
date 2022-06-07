import { screen, render } from '@testing-library/react';
import { CharacterList } from './characterList';
describe('Given the component CharacterList', () => {
    describe('When calling it', () => {
        test('Render CharacterList', () => {
            render(<CharacterList />);

            const nameItem = screen.getByText(/Rick/i);
            expect(nameItem).toBeInTheDocument();
        });
    });
});
