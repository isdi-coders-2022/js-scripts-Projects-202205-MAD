import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage';
import { CharacterContextProvider } from './context/character.provider';
import { FavPage } from './pages/favPage';
import { LoginPage } from './pages/loginPage';
import { aMenuItems } from './interfaces/menu-items';
import { Layout } from './core/layout';

function App() {
    const HomePage = React.lazy(() => import('./pages/homePage'));
    const FavPage = React.lazy(() => import('./pages/favPage'));
    const DetailsPage = React.lazy(() => import('./pages/detailsPage'));
    const LoginPage = React.lazy(() => import('./pages/loginPage'));

    const options: aMenuItems = [
        { path: '', label: 'Home', page: <HomePage /> },
        { path: 'fav', label: 'Fav', page: <FavPage /> },
        { path: 'details', label: 'Details', page: <DetailsPage /> },
        { path: 'login', label: 'Login', page: <LoginPage /> },
        { path: '*', label: '', page: <Navigate replace to="" /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <CharacterContextProvider>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </CharacterContextProvider>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
