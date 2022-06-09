import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharactersContext } from '../context/character.context';
import LogoutButton from './logOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import {jest} from '@jest/globals'

describe('Given the function LogOutButton', () => {
    describe('When calling it', () => {
        test('should first', () => {

            const user1 ={
                email: 'jesusrodriguezgonzalezgr@gmail.com',
                email_verified: true,
                family_name: 'Rodriguez',
                given_name: 'Jesus',
                locale: 'es',
                name: 'Jesus Rodriguez',
                nickname: 'jesusrodriguezgonzalezgr',
                picture:
                    'https://lh3.googleusercontent.com/a/AATXAJzw0OHKBHbuuUTxwYItFSo94CykoMZ3XQg-4YGX=s96-c',
                sub: 'google-oauth2|118111786459417766034',
                updated_at: '2022-02-19T14:40:50.296Z'

            }

            useAuth0.mockReturnValue(
                user : user1,
                logout: jest.fn(),
                isAuthenticated: true,

            )

            render( 
                    <LogoutButton />
            );
            const button = screen.getByRole('button');

            userEvent.click(button);
            expect(useAuth0).toHaveBeenCalled();
        });
    });
});
