/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
    describe('When calling it', () => {
        test('Render Footer', () => {
            render(<Footer />);
            const nameTeam = screen.getByText(/J´s Scripts/i);
            const copyright = screen.getByText(/All the data in/i);
            expect(nameTeam).toBeInTheDocument();
            expect(copyright).toBeInTheDocument();
        });
    });
});
