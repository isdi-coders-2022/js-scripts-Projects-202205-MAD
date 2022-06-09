import { RedirectLoginOptions, User } from '@auth0/auth0-react';
import { createContext } from 'react';
import { iCharacter } from '../interfaces/interfaz';
// const [page, setPage] = useState(1);

let initialContext: {
    charactersBrowser: Array<iCharacter>;
    characters: Array<iCharacter>;
    nextPage(count: string): void;
    currentPage: number;
    charactersFav: Array<iCharacter>;
    addCharacter: (character: iCharacter) => void;
    deleteCharacter: (character: iCharacter) => void;
    toggleComplete: (character: iCharacter) => void;
    user: User | undefined;
    isAuthenticated: boolean;
    currentName: string;
    FindCharacter(name: string): void;
} = {
    charactersBrowser: [],
    characters: [],
    nextPage: () => {},
    currentPage: 1,
    charactersFav: [],
    addCharacter: () => {},
    deleteCharacter: () => {},
    toggleComplete: () => {},
    user: {},
    isAuthenticated: false,
    currentName: '',
    FindCharacter: () => {},
};

export const CharactersContext = createContext(initialContext);
