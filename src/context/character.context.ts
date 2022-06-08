import { createContext, useState } from 'react';
import { NumericLiteral } from 'typescript';
import { iCharacter } from '../interfaces/interfaz';
// const [page, setPage] = useState(1);

let initialContext: {
    characters: Array<iCharacter>;
    nextPage(count: string): void;
    currentPage: number;
    charactersFav: Array<iCharacter>;
} = {
    characters: [],
    nextPage: () => {},
    currentPage: 1,
    charactersFav: [],
};

export const CharactersContext = createContext(initialContext);
