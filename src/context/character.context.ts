import { createContext } from 'react';
import { iCharacter } from '../interfaces/interfaz';

let initialContext: {
    characters: Array<iCharacter>;

    // addTask(task: TaskModel): void;
    // deleteTask(task: TaskModel): void;
    // toggleComplete(task: TaskModel): void;
} = {
    characters: [],
    // addTask: () => {},
    // deleteTask: () => {},
    // toggleComplete: () => {},
};

export const CharactersContext = createContext(initialContext);
