/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
    describe('When calling it', () => {
        test('Render Header', () => {
            render(<header />);
            const nameTeam = screen.getByText(/Rick/i);
            expect(nameTeam).toBeInTheDocument();
        });
    });
});
