import { createContext, useState } from 'react';
import { NumericLiteral } from 'typescript';
import { iCharacter } from '../interfaces/interfaz';
// const [page, setPage] = useState(1);

let initialContext: {
    characters: Array<iCharacter>;
    nextPage(count: number): void;
} = {
    characters: [],
    nextPage: () => {},
};

export const CharactersContext = createContext(initialContext);
