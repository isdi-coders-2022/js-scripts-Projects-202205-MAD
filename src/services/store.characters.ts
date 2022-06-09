import { CharacterModel } from '../data/characterModel';
import { iCharacter } from '../interfaces/interfaz';

export class HttpStoreCharacter {
    url: string;
    constructor() {
        this.url = 'http://localhost:3500/results';
    }
    getCharacters(nickName: string): Promise<any> {
        // GET
        return fetch('http://localhost:3500/results?nickName=' + nickName).then(
            (resp) => {
                return resp.json();
            }
        );
    }
    getCharacter(id: string): Promise<iCharacter> {
        // GET
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
    setCharacter(character: iCharacter): Promise<iCharacter> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateCharacter(character: iCharacter): Promise<Partial<iCharacter>> {
        // PUT / PATCH
        return fetch(this.url + `/${character.id}`, {
            method: 'PATCH',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteCharacter(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
