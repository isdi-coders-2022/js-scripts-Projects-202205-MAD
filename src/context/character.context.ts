import { createContext, useState } from 'react';
import { iCharacter } from '../interfaces/interfaz';
const [page, setPage] = useState(1);

let initialContext: {
    characters: Array<iCharacter>;
} = {
    characters: [],
};

export const CharactersContext = createContext(initialContext);
