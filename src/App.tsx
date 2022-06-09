import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './App.css';
import { CharacterContextProvider } from './context/character.provider';
import { aMenuItems } from './interfaces/menu-items';
import { Layout } from './core/layout';

function App() {
    const HomePage = React.lazy(() => import('./pages/homePage'));
    const FavPage = React.lazy(() => import('./pages/favPage'));
    const DetailsPage = React.lazy(() => import('./pages/detailsPage'));

    const options: aMenuItems = [
        { path: '', label: 'home', page: <HomePage />, title: 'Home' },
        {
            path: 'favorites',
            label: 'favorites',
            page: <FavPage />,
            title: 'Favorites',
        },
        {
            path: 'details/:id',
            label: '',
            page: <DetailsPage />,
            title: '',
        },
        {
            path: '*',
            label: '',
            page: <Navigate replace to="" />,
            title: '',
        },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <React.StrictMode>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </React.StrictMode>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
