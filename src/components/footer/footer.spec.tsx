/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
    describe('When calling it', () => {
        test('Then it should be rendered', () => {
            const mockKey = 'test footer';
            // Arrange
            render(<Footer id={mockKey} />);

            const labelInput = screen.getByText(/test/);

            // Assert
            expect(labelInput).toBeInTheDocument();
        });
    });
});
