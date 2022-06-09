/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { aMenuItems } from '../../interfaces/menu-items';
import DetailsPage from '../../pages/detailsPage';
import FavPage from '../../pages/favPage';
import HomePage from '../../pages/homePage';
import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Given the component Header', () => {
    describe('When calling it', () => {
        const options: aMenuItems = [
            { path: '', label: 'home', page: <HomePage /> },
            { path: 'favorites', label: 'favorites', page: <FavPage /> },
            { path: 'details', label: '', page: <DetailsPage /> },
        ];
        test('Render Header', () => {
            render(
                <BrowserRouter>
                    <Header options={options} />
                </BrowserRouter>
            );

            const result = screen.getAllByRole(/img/i);
            expect(result[0]).toHaveProperty('src');
        });
    });
});
