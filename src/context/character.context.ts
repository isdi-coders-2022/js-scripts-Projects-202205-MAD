import { createContext, useState } from 'react';
import { NumericLiteral } from 'typescript';
import { iCharacter } from '../interfaces/interfaz';
// const [page, setPage] = useState(1);

let initialContext: {
    characters: Array<iCharacter>;
    nextPage(count: string): void;
    currentPage: number;
    charactersFav: Array<iCharacter>;
    addCharacter: (character: iCharacter) => void;
    deleteCharacter: (id: iCharacter['id']) => void;
    toggleComplete: (id: iCharacter['id']) => void;
} = {
    characters: [],
    nextPage: () => {},
    currentPage: 1,
    charactersFav: [],
    addCharacter: () => {},
    deleteCharacter: () => {},
    toggleComplete: () => {},
};

export const CharactersContext = createContext(initialContext);
