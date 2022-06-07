import { CountQueuingStrategy } from 'node:stream/web';
import { useContext } from 'react';
import { CharactersContext } from '../context/character.context';

export class CharacterApi {
    static async getCharacters(count: any): Promise<any> {
        const result = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${count}`
        );
        return await result.json();
    }
}
